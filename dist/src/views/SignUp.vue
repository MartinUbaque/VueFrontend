<script>
import { reactive } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
import FootBar from '@/components/FootBar.vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    FootBar,
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const user = reactive({
      selectedUserType: '',
      name: '',
      surname: '',
      username: '',
      email: '',
      password: ''
    });

    const signUp = async () => {
      try {
        await authStore.signUp(user);
        router.push('/login');
      } catch (error) {
        alert(error.message);
      }
    };

    return { user, signUp };
  }
};
</script>


<template>
  <section>
    <picture class="aside-img">
      <img src="../assets/images/landing.png" alt="Class learning languages">
      <div class="shadow-overlay"></div>
      <div class="overlay">
        <img class="logo" src="../assets/images/logo.png" alt="logo">
        <span class="logo-text"> Empowering educators with AI</span>
      </div>
    </picture>
    <div class="container">
      <h3>Create an account</h3>
      <p>Sign up with...</p>
      <picture class="icons">
        <img src="../assets/images/facebookColor.png" alt="Facebook">
        <img src="../assets/images/google.png" alt="Google">
        <img src="../assets/images/linkedinColor.png" alt="Linkedin">
      </picture>
      <div class="text-divider">
        <div class="divider-container"> 
          <div class="divider"></div>
          <span class="separator">Or</span>
          <div class="divider"></div>
        </div>
      </div>
      <form class="signup-form" @submit.prevent="signUp"> 
        <select class="input-dropdown" v-model="user.selectedUserType"> 
          <option value="" disabled selected>I am a...</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="parent">Parent</option>
        </select>
        <div class="input-group">
          <input type="text" class="input-field name" placeholder="Name" v-model="user.name">
          <input type="text" class="input-field surname" placeholder="Last Name" v-model="user.surname">
        </div>
        <div class="input-group">
          <input type="text" class="input-field username" placeholder="username" v-model="user.username"> 
        </div>
        <div class="input-group">
          <input type="email" class="input-field email" placeholder="e-mail@something.com" v-model="user.email"> 
        </div>
        <div class="input-group">
          <input type="password" class="input-field password" placeholder="password" v-model="user.password"> 
        </div>
        <button type="submit" class="submit-button">Sign Up</button> 
      </form>
      <span class="label">Already have an account?
        <router-link to="/login"><span class="login">Log in</span></router-link> </span>
      <FootBar />
    </div>
  </section>
</template>

<style scoped>
section{
	display: flex;
	font-size: 1.2em;
  position: relative;
  text-align: center;
  height:120vh;
}
.container > h3{
	font-size: 1.5em;
  margin-top: 10vh;
  margin-bottom:0;
  font-family: 'Quicksand-Bold';
}
.container > p{
	font-weight: bold;
}
.aside-img{
	display: flex;
	width: 60vw;
  position: relative;
  text-align: center;
}
.aside-img > img{
	width: 100%;
	height: auto;
  object-fit: cover;
}
.shadow-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(65, 40, 116, 0.47), rgba(65, 40, 116, 0.47));
}
.overlay {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.logo-text{
  color: #fff;
  font-size: 1.5rem;
}
.container{
	display: flex;
	flex-direction: column;
	width: 40vw;
	align-items: center;
  color: #412874;
}
.icons{
	display: flex;
	justify-content: space-between;
	width: 200px;
	margin-bottom: 1em;
}
.icons > img{
	width:50px;
}
.text-divider {
  width: 90%;
}
.divider-container{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 1px;
    width: 100%;
    margin: 12px 0;
    background-color:#412874;
}
.separator {
  padding: 0 10px;
  background:#fff;
}
form{
  margin-top:1.5rem;
	display:flex;
	flex-direction: column;
  width:70%;
}
form>button{
	font-size: 1.5em;
	align-self: center;
	margin-top: 1rem;
}
.input-dropdown, .input-field {
  width: 87%;
  padding: 10px;
  margin-bottom: 10px;
  border: 0.5px solid;
  border-radius: 5px;
  border-color: #41287480;
  background-color: #f7f7f7;;
  font-size: 1rem;
  letter-spacing: 0.4px;
  color: #41287499;
}
::placeholder {
  color: #412874;
  opacity: 60%; 
}
.input-dropdown{
    width: 100%;
}
.input-group {
  position: relative;
}
.input-field.name, .input-field.surname {
  width:42%;
  background-image: url('name-icon.png');
  background-repeat: no-repeat;
  background-position: 10px center;
}
.input-field.name{
    margin-right:0.5%;
    float:left;
}
.input-field.surname{
    float:right;
}
.input-field.username {
  padding-left: 35px;
  background-image: url('../assets/images/form-user.png');
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 10px center;
}
.input-field.email {
  padding-left: 35px;
  background-image: url('../assets/images/form-email.png');
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 10px center;
}

.input-field.password {
  padding-left: 35px;
  background-image: url('../assets/images/form-pass.png');
  background-size: 12px;
  background-repeat: no-repeat;
  background-position: 10px center;
}
.submit-button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #412874;
  color: white;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0px 4px 4px #00000040;
  background-image: linear-gradient(to bottom, #412874, #7a6aaf);
  margin-bottom:1.5rem;
}
.submit-button:hover {
  background-color: #5a3d9a;
}

.label{
  font-size:1rem;
  font-weight: bold;
}
.login{
  font-family: 'Quicksand-Bold';
}

@media only screen and (max-width: 767px) {
  section {
   display:inline;
  }
  .aside-img{
	width: 100%;
  }
  .container{
	width: 100%;
  position:absolute;
  top:10%;
  color:white;
  }
  .overlay{
    height:40%;
  }
  .logo{
	  height: 30%;
  }
  .logo-text{
    font-size: 1rem;
  }
  .separator{
    background:transparent;
  }
  .footer{
    position: static;
  }

  .input-field.name, .input-field.surname {
  width:97%;
  float:none;
  }
}
</style>