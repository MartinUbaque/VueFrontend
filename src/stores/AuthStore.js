import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    credentials: null,
    email: null,
    userType: null
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    setCredentials(credentials) {
        this.credentials = credentials;
    },
    async signUp(user) {
        try {
          let endpoint = '';
          if (user.selectedUserType === 'student') {
            endpoint = '/students/signup';
          } else if (user.selectedUserType === 'teacher') {
            endpoint = '/teachers/signup';
          }
      
          const response = await axios.post(`http://localhost:3000/api/v1${endpoint}`, user);
          console.log('User signed up:', response.data);
          return response.data;
        } catch (error) {
          console.error('Error signing up:', error);
          throw error;
        }
      },
      
    async login(credentials) {
      try {
        const endpoint = '/auth/login';
        const response = await axios.post(`http://localhost:3000/api/v1${endpoint}`, credentials);

        console.log(response.data);

        this.token = response.data.token;
        this.email = response.data.email;
        this.userType = response.data.userType;

        localStorage.setItem('token', this.token); // Persist the token
        this.setCredentials(credentials);
      } catch (error) {
        this.logout(); // Ensure token is cleared if login fails
        console.error('Error logging in:', error);
        throw error; // Re-throw the error to be caught in the component
      }
    },
    logout() {
      this.$reset();
      localStorage.removeItem('token');
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'auth',
        storage: localStorage,
      }
    ]
  }
});
