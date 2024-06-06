<template>
  <div>
    <ScenarioExamplesCarousel v-if="!isFormSubmitted" />

    <ScenarioPreview v-if="isFormSubmitted" :scenarioId="scenarioId" />
  </div>
</template>

<script>
import ScenarioExamplesCarousel from './ScenarioExamplesCarousel.vue';
import ScenarioPreview from './ScenarioPreview.vue';

export default {
  components: {
    ScenarioExamplesCarousel,
    ScenarioPreview
  },
  props: {
    isFormSubmitted: Boolean,
    scenarioId: String // Assuming you pass the scenarioId once the form is submitted
  }
}
</script>

  
<style scoped>

</style>
  