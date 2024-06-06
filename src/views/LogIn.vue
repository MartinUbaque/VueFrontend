<script>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/AuthStore'; 
import FootBar from '@/components/FootBar.vue';
import { useRouter } from 'vue-router';


export default {
  components: {
    FootBar,
  },
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    
    const identifier = ref('');
    const password = ref('');

    const login = async () => {
      try {
        await authStore.login({ identifier: identifier.value, password: password.value });
        router.push('/home');
        // if (authStore.isAuthenticated) {
        //   router.push('/home');
        // }
      } catch (error) {
        // Handle error by showing an error message
      }
    };

    return {
      identifier,
      password,
      login,
    };
  },
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
			<h3 style="margin-bottom:2rem">Welcome back!</h3>
      <!-- <p>Login in with...</p>
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
      </div> -->
      <form class="login-form" @submit.prevent="login">
          <div class="input-group">
            <input v-model="identifier" type="text" class="input-field user" placeholder="e-mail / username">
          </div>
          <div class="input-group">
            <input v-model="password" type="password" class="input-field password" placeholder="password">
          </div>
          <div class="form-action-wrapper">
            <div class="remember-me">
              <input type="checkbox" id="remember-me">
              <label for="remember-me">Remember me</label>
            </div>
            <div class="spacer"></div>
            <router-link to="/forgot-password" class="forgot-password">Forgot password?</router-link>
          </div>
          <button type="submit" class="submit-button">Log in</button>
      </form>
			<p class="label">New user?</p>
			<router-link to="/signup"><h4>Create account</h4></router-link>
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
.input-field {
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
.input-group {
  position: relative;
}
.input-field.user {
  padding-left: 35px;
  margin-bottom: 1.5rem;
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
.form-action-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}
input[type=checkbox] {
  accent-color: #f7f7f7;
}
.forgot-password{
  font-family: 'Quicksand-Bold';
  color:#412874;
  text-decoration: none;
}
.spacer {
  flex-grow: 1;
}
.label{
  font-size:1.2rem;
  font-weight: bold;
  margin-bottom:0;
}
h4{
  margin-top:0;
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
}
</style>