import { defineStore } from 'pinia';

export const useScenarioStore = defineStore('scenario', {
  state: () => ({
    scenarioId: null,
  }),
  actions: {
    setScenarioId(id) {
      this.scenarioId = id;
    }
  }
});