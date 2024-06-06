<template>
    <div v-show="formSubmitted && !showSendContainer" class="scenario-control">
      <h1 class="scenario-title gradient-text">Spanish Restaurant Scenario</h1>
      <div class="button-container">
        <button class="btn btn-primary" @click="sendToStudent">Send to student</button>
        <button class="btn btn-secondary" @click="testScenario">Test Scenario</button>
        <button class="btn btn-secondary" @click="saveForLater">Save for later</button>
      </div>
      <div class="button-container horizontal">
        <button class="btn btn-action" @click="editScenario">Edit</button>
        <button class="btn btn-action" @click="deleteScenario">Delete</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ScenarioControlComponent',
    props: {
      formSubmitted: Boolean,
      showSendContainer: Boolean
    },
    methods: {
      sendToStudent() {
        this.$emit('sendToStudent');
      },
      testScenario() {
        this.$emit('testScenario');
      },
      saveForLater() {
        this.$emit('saveForLater');
      },
      editScenario() {
        this.$emit('editScenario');
      },
      deleteScenario() {
        this.$emit('deleteScenario');
      }
    }
  }
  </script>
  
  <style scoped>
  .scenario-control {
    margin: auto;
    padding: 60px;
    text-align: center;
  }
  
  .scenario-title {
    margin-bottom: 2rem;
  }
  
  .button-container {
    margin-bottom: 10px;
  }
  
  .button-container.horizontal {
    display: flex;
    justify-content: space-between;
  }
  
  .btn {
    display: block;
    width: 100%;
    padding: 10px 20px;
    border: none;
    border-radius: 11px;
    margin-bottom: 2.5rem;
    cursor: pointer;
    font-size: 16px;
  }
  
  .btn-primary {
    background: -webkit-linear-gradient(#412974, #9D18FF);
    color: white;
  }
  
  .btn-secondary {
    background-color: #f7f7f7;
    border: 0.5px solid #41287480;
    color: #412874;
  }
  
  .btn-action {
    background-color: #f7f7f7;
    border: 0.5px solid #41287480;
    color: #412874;
    margin-top: 30px;
    flex-grow: 1;
    margin-bottom: 0;
  }
  
  .btn-action:first-child {
    margin-right: 2rem;
  }
  
  .btn:hover {
    opacity: 0.9;
  }
  
  .btn:active {
    transform: scale(0.98);
  }
  </style>
  