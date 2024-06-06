<template>
  <div>
    <NavBar />
    <div v-if="!showCreate" class="container">
      <h1 class="title">Saved Scenarios</h1>
      <ScenariosList :scenarios="scenarios" @toggleCreate="toggleCreate" />
    </div>
    <div v-if="showCreate" class="create">
      <div class="create-side">
        <CreateSide :isFormSubmitted="isFormSubmitted" />
      </div>
      <div class="create-main">
        <CreateMain @creationComplete="handleCreated" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from '@/components/NavBar.vue';
import CreateSide from '@/views/ScenariosPage/CreateSide.vue';
import CreateMain from '@/views/ScenariosPage/CreateMain.vue';
import ScenariosList from '@/components/ScenariosList.vue'; 

export default {
  components: {
    NavBar,
    CreateSide,
    CreateMain,
    ScenariosList
  },
  data() {
    return {
      showCreate: false,
      isFormSubmitted: false,
      scenarios: [
        { title: 'Restaurant', image: '/src/assets/images/scenario.jpg', duration: '30 min' },
        { title: 'Vocab #1', image: '/src/assets/images/scenario1.webp', duration: '15 min' },
        { title: 'Restaurant', image: '/src/assets/images/scenario.jpg', duration: '30 min' },
        { title: 'Vocab #1', image: '/src/assets/images/scenario1.webp', duration: '15 min' },
        { title: 'Restaurant', image: '/src/assets/images/scenario.jpg', duration: '30 min' },
        { title: 'Vocab #1', image: '/src/assets/images/scenario1.webp', duration: '15 min' },
      ],
    };
  },
  methods: {
    toggleCreate() {
      this.showCreate = !this.showCreate;
      this.isFormSubmitted = false; // Reset when toggling the creation mode
    },
    handleCreated() {
      this.isFormSubmitted = true;
    }
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  color: #412874;
  font-family: 'Quicksand-SemiBold';
}
.create{
  display: flex;
}
.create-side{
  width:50vw;
  height: 90vh;
}
.create-main{
  width:50vw;
  height: 90vh;
}
</style>