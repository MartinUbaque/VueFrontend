<script>
import { RouterView } from 'vue-router';


export default {
  name: 'App',
//   components: {
//     Header,
//     Footer,
//   },
};
</script>

<template>
      <RouterView />
</template>

<style>
@font-face {
  font-family: 'Quicksand';
  src: url('./assets/fonts/Quicksand-Medium.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Quicksand-Bold';
  src: url('./assets/fonts/Quicksand-Bold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Quicksand-SemiBold';
  src: url('./assets/fonts/Quicksand-SemiBold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Quicksand-Light';
  src: url('./assets/fonts/Quicksand-Light.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  margin:0!important;
  padding: 0;
  font-family: 'Quicksand-Light';
}
</style>
  

