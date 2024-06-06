
<template>
    <div class="preset-scenarios">
        <h2 class="gradient-text">Examples:</h2>
        <ScenarioExamplesCarousel />
        <button>Explore Preset Scenarios</button>
    </div>
</template>

<script>
import ScenarioExamplesCarousel from './ScenarioExamplesCarousel.vue';
export default {
  components: {
    ScenarioExamplesCarousel
  },
  name: 'CreateSide',
};
</script>

<style scoped>
.gradient-text{
  background-color: #412874;
  background-image: linear-gradient(#412974, #9D18FF);
  background-size: 100%;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
}
.preset-scenarios{
  display: flex;
  flex-direction: column;
}
.preset-scenarios button{
  background-color: #412874;
  background-image: linear-gradient(#412974, #9D18FF);
  color: #fff;
}
</style>