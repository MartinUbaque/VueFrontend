<template>
    <header>
        <div class="navbar">
            <div class="logo">
              <img class="logo-pic" src="../assets/images/logo_purple.png" alt="logo">
            </div>
            <span class="logout" @click="logout">Log out</span>
        </div>
    </header>
</template>

<script>
import { useAuthStore } from '@/stores/AuthStore';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

export default {
  name: 'StudentNavBar',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const logout = () => {
      authStore.logout(); 
      router.push('/login');
    };

    return {
      authStore,
      logout,
    };
  },
};
</script>

<style scoped>
.navbar {
  font-family: 'Quicksand-SemiBold';
  background-color: transparent;
  /* height:50px;
  padding: 3px; */
  display: flex;
  justify-content: space-between;
}

.logout{
  cursor: pointer;
  color:#818181;
  padding-right:1rem;
  margin: auto 0;
}

.logo-pic{
  height:3.5vw;
}
</style>

