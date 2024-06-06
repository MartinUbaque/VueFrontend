<script>
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    NavBar,
  },
};
</script>

<template>
  <NavBar />
  <h1 class="title">Welcome back</h1>
</template>

<style scoped>
.title {
  text-align: center;
  color: #412874;
  font-family: 'Quicksand-SemiBold';
}
</style>