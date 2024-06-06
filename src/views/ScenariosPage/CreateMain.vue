<template>
    <div class="scenario-container">
      <CreateForm
        :form-data="formData"
        :form-submitted="formSubmitted"
        :show-send-container="showSendContainer"
        @created="handleCreate"
      />
  
      <ScenarioControl
        v-show="formSubmitted && !showSendContainer"
        @sendToStudent="sendToStudent"
        @testScenario="testScenario"
        @saveForLater="saveForLater"
        @editScenario="editScenario"
        @deleteScenario="deleteScenario"
      />
  
      <ScenarioSend
        v-show="showSendContainer"
        :students="students"
        @backToControl="backToControl"
        @updateStudents="updateStudents"
        @scenariosSent="scenariosSent"
      />
    </div>
  </template>
  
  <script>
  import CreateForm from './CreateForm.vue';
  import ScenarioControl from './ScenarioControl.vue';
  import ScenarioSend from './ScenarioSend.vue';
  
  export default {
    components: {
      CreateForm,
      ScenarioControl,
      ScenarioSend
    },
    data() {
      return {
        formData: {
          language: '',
          level: '',
          description: '',
          vocabulary: ''
        },
        formSubmitted: false,
        showSendContainer: false,
        students: [
          { name: 'Harry', picture: '/src/assets/images/person.jpg', selected: false },
          { name: 'Andrea', picture: '/src/assets/images/profile.png', selected: false },
          { name: 'Liam', picture: '/src/assets/images/pic.png', selected: false },
          { name: 'Harry', picture: '/src/assets/images/person.jpg', selected: false },
          { name: 'Andrea', picture: '/src/assets/images/profile.png', selected: false },
          { name: 'Liam', picture: '/src/assets/images/pic.png', selected: false },
          // Additional student data...
        ]
      };
    },
    methods: {
      handleCreate() {
        this.$emit('creationComplete');

        this.formSubmitted = true;
      },
      sendToStudent() {
        this.showSendContainer = true;
      },
      testScenario() {
        console.log('Testing scenario...');
      },
      saveForLater() {
        console.log('Scenario saved for later.');
      },
      editScenario() {
        this.formSubmitted = false;
        this.showSendContainer = false;
      },
      deleteScenario() {
        console.log('Scenario deleted.');
      },
      backToControl() {
        this.showSendContainer = false;
      },
      updateStudents(updatedStudents) {
        this.students = updatedStudents;
      },
      scenariosSent() {
        console.log('Scenarios have been sent.');
      }
    }
  };
  </script>
  
  <style scoped>
  .scenario-container {
    font-family: 'Quicksand-SemiBold';
    max-width: 80%;
    margin: 40px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 15px;
    border: 0.5px solid #41287480;
    box-shadow: 0 4px 4px #00000040;
  }
  </style>  