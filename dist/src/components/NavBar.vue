<template>
  <header>
      <div class="navbar">
          <div class="profile">
            <img src="../assets/images/pic.png" alt="profile" class="profile-pic">
            <span class="username">{{ getUser }}</span>
          </div>
          <nav class="site-nav">
              <ul class="site-nav__links">
                <li :class="{ 'nav__link--active': $route.path === '/home' }"><router-link to="/home">
                  Home</router-link></li>
                <li :class="{ 'nav__link--active': $route.path === '/students' }"><router-link to="/students">
                  <svg style="height:15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z"/></svg>
                  Students</router-link></li>
                <li :class="{ 'nav__link--active': $route.path === '/scenarios' }"><router-link to="/scenarios">
                  Scenarios</router-link></li>
              </ul>
              <ul><li class="logout" @click="logout">Log out</li></ul>
          </nav>
          <div class="logo">
            <img class="logo-pic" src="../assets/images/logo_purple.png" alt="logo">
          </div>
      </div>
  </header>
</template>

<script>
import { useAuthStore } from '@/stores/AuthStore';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

export default {
  name: 'NavBar',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const logout = () => {
      authStore.logout(); 
      router.push('/login');
    };

    const getUser = computed(() => {
      return authStore.email || 'User';  // Returns the email or 'User' if email is not set
    });

    return {
      authStore,
      logout,
      getUser
    };
  },
};
</script>


<style scoped>
.navbar {
  background-color: transparent;
  color: #412874;
  /* height:50px;
  padding: 3px; */
  padding-left:3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile{
  margin-top:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.username{
  font-family: 'Quicksand';
  font-size:large;
}

.logo-pic{
  height:3.5vw;
  margin:0.5rem 1rem 0 0;
}

.logout{
  cursor: pointer;
  color:#818181;
}

.title {
  font-size:20px;
}

.site-nav{
  text-align: right;
  position: static;
  margin-top: 1.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.site-nav__links{
  background-color: #61489117;
  color:white;
  border: 1px solid rgb(182, 182, 182);
  border-radius: 15px;
  position:relative;
}

.site-nav__links li:after {
  content: "";
  margin-left: 0.57rem;
  background: rgb(182, 182, 182);
  position: absolute;
  height: 50%;
  width: 1px;
}
.site-nav__links li:last-child:after { 
  content: "";
  margin-left: 0.57rem;
  background: rgb(182, 182, 182);
  position: absolute;
  height: 50%;
  width: 0; 
}

/* .site-nav__links li{
  border-right: 1px solid #412874;
}
    
.site-nav__links li:last-child{
  border-right: none;
} */

.nav__link{
  margin-right:1.2rem;
  padding: 1rem;
  background-color: #1B263B;;
}

.nav__link--active{
  background-color: #412874;
  border: 2px solid #412874;
  border-radius: 15px;
}

.nav__link--active a{
  color:white;
}

.site-nav__links li a{
  text-decoration: none;
}

.nav__link li a{
  color:white;
  text-decoration: none;
}

.site-nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  float:right;
}

.site-nav ul li {
  display: inline-block;
  padding:0.7vw;
}
</style>

  