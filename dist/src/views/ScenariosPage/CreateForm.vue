<template>
    <div class="scenario-container">
        <div v-if="!formSubmitted && !showSendContainer" class="scenario-creator">
            <div class="title-container">
                <h1 class="gradient-text">Create Now!</h1>
            </div>
            <form @submit.prevent="onCreate" class="scenario-form">
                <span class="gradient-text"> Select </span>
                <div class="form-row">
                <div class="form-group">
                    <select id="language-select" class="form-control" v-model="formData.language">
                    <option value="">Language</option>
                    <option value="EN">English</option>
                    <option value="ES">Spanish</option>
                    </select>
                </div>
                <div class="form-group">
                    <select id="conversation-level" class="form-control" v-model="formData.level">
                    <option value="">Conversation level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    </select>
                </div>
                </div>
                <div class="form-group">
                <span class="gradient-text"><label for="scenario-description">Describe the topic, theme, or context of the scenario</label> </span>
                <textarea id="scenario-description" class="form-control input-box" v-model="formData.description" placeholder="Create a conversation in a Spanish restaurant..."> </textarea>
                </div>
                <div class="form-group">
                <span class="gradient-text"> <label for="vocabulary">Any specific vocabulary?</label> </span>
                <textarea id="vocabulary" class="form-control input-box" v-model="formData.vocabulary" placeholder="Typical Spanish dishes..."> </textarea>
                </div>
                <div class="form-group form-button">
                    <button type="submit" class="form-control create-button">CREATE</button>
                </div>
            </form>
        </div>

        <!--  ScenarioControl component-->
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

        <!--  ScenarioSend component-->
         <div v-show="showSendContainer" class="send-container">
            <div class="send-header">
                <button class="back-button" @click="backToControl">&leftarrow;</button>
                <h1 class="send-title">Send</h1>
            </div>
            <div class="select-all-container">
                <input type="checkbox" id="selectAll" v-model="selectAll" @change="toggleSelectAll" class="custom-checkbox">
                <label for="selectAll" class="checkbox-label">Select All</label>
            </div>
            <div class="students-container">
                <div class="student" v-for="(student, index) in students" :key="index" @click="toggleStudentSelection(index)">
                    <div class="profile-pic-container" :class="{ selected: student.selected }">
                    <img :src="student.picture" :alt="student.name" class="profile-pic">
                    </div>
                    <p class="student-name">{{ student.name }}</p>
                </div>
            </div>
            <button class="send-button">Send</button>
            <div class="student-count">
                <p>{{ selectedCount }} Students Selected</p>
            </div>
        </div>

    </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'ScenarioCreation',
  data() {
    return {
      formData: {
        language: '',
        level: '',
        description: '',
        vocabulary: ''
      },
      formSubmitted: false, // This is used to control the conditional rendering
      //ScenarioSend Data
      students: [
        { name: 'Harry', picture: '/src/assets/images/person.jpg', selected: false },
        { name: 'Andrea', picture: '/src/assets/images/profile.png', selected: false },
        { name: 'Liam', picture: '/src/assets/images/pic.png', selected: false },
        { name: 'Liam', picture: '/src/assets/images/pic.png', selected: false },
        { name: 'Liam', picture: '/src/assets/images/pic.png', selected: false },
        { name: 'Liam', picture: '/src/assets/images/pic.png', selected: false },
      ],
      selectAll: false,
      showSendContainer: false, // This is used to control the conditional rendering btn ScenarioControl & ScenarioSend
    };
  },
  //Used for ScenarioSend 
  computed: {
    selectedCount() {
      return this.students.filter(student => student.selected).length;
    }
  },
  methods: {
    //CreateForm methods
    onCreate() {
      this.$emit('created'); // Emit an event to the parent component
      // Logic after form submission
      console.log(this.formData);
      this.formSubmitted = true; // Set the flag to true when the form is submitted

      // !!!!!!Error- endpoint to be checked
    //   axios.post('http://localhost:3000/api/v1/scenarios', {
    //     language: this.formData.language,
    //     level: this.formData.level,
    //     context: this.formData.description, 
    //     specifics: this.formData.vocabulary  
    //   })
    //   .then(response => {
    //     console.log(response);
    //     this.formSubmitted = true; // Set the flag to true when the form is successfully submitted
    //     // Additional logic after successful submission (e.g., show success message, redirect, etc.)
    //   })
    //   .catch(error => {
    //     if (error.response) {
    //         // The request was made and the server responded with a status code
    //         // that falls out of the range of 2xx
    //         console.log('Data', error.response.data);
    //         console.log('Status', error.response.status);
    //         console.log('Header',error.response.headers);
    //     } else if (error.request) {
    //         // The request was made but no response was received
    //         console.log(error.request);
    //     } else {
    //         // Something happened in setting up the request that triggered an Error
    //         console.log('Error', error.message);
    //     }
    //     console.log(error.config);
    // });
    },

    //ScenarioControl methods
    sendToStudent() {
      this.formSubmitted = false; // Hide the scenario-control
      this.showSendContainer = true; // Show the send-container
    },
    testScenario() {
      // Logic for testing the scenario
    },
    saveForLater() {
      // Logic for saving the scenario for later
    },
    editScenario() {
      // Logic for editing the scenario
      this.formSubmitted = false; // Reset the flag to show the scenario-creator form again
    },
    deleteScenario() {
      // Logic for deleting the scenario
    },

    //ScenarioSend methods
    toggleStudentSelection(index) {
      this.students[index].selected = !this.students[index].selected;
      this.checkIfAllSelected();
    },
    toggleSelectAll() {
      this.students.forEach(student => {
        student.selected = this.selectAll;
      });
    },
    checkIfAllSelected() {
      this.selectAll = this.students.every(student => student.selected);
    },
    backToControl() {
      this.showSendContainer = false; // Hide the send-container
      this.formSubmitted = true; // Show the scenario-control
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
    box-shadow: 0 4px 4px #00000040
}

/* CreateForm styles*/
.scenario-creator {
    max-width: 100%;
    padding-right: 20px;
    background-color: #ffffff;
}

.title-container {
    margin-bottom: 30px;
    text-align: center;
}

.gradient-text{
    background: -webkit-linear-gradient(#412974, #9D18FF);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
}

.form-row {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.form-group {
    flex: 1;
}

.form-control {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    line-height: 1.5;
    color: #495057;
    background-color: #F7F7F7;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 11px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin-bottom: 15px;
    margin-top: 10px;
}

.form-control::placeholder {
    color: #818181;
    opacity: 1;
}

.input-box:focus {
    color: #495057;
    background-color: #fff;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.25);
}

.input-box{
    height:100px;
}

.form-button{
    text-align: center;
}

.create-button {
    color: #fff;
    border-radius: 11px;
    background: -webkit-linear-gradient(#412974, #9D18FF);
    font-weight: bold;
    width: auto;
    display: inline-block;
    text-align: center;
    padding: 10px 50px;
}

.create-button:hover {
    color: #fff;
    background: #9D18FF;
    border-color: #9D18FF;
}

.create-button:active {
    color: #fff;
    background-color: #412974;
    border-color: #412974;
}



/* ScenarioControl styles*/
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
    margin-top:30px;
    flex-grow: 1;
    margin-bottom:0;
}

.btn-action:first-child{
    margin-right:2rem;
}

.btn:hover {
    opacity: 0.9;
}

.btn:active {
    transform: scale(0.98);
}


/* ScenarioSend styles*/
.send-container {
  max-width: 548px;
  background-color: #ffffff;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
}

.send-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}

.back-button {
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
}

.send-title {
  color: #412874;
  font-family: 'Quicksand-SemiBold';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.select-all-container {
  display: flex;
  margin: 20px 0;
  color: #959595;
}

.custom-checkbox {
  visibility: hidden;
  position: absolute;
}

.checkbox-label {
  position: relative;
  padding-left: 25px;
  cursor: pointer;
}

.checkbox-label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #959595;
  background-color: #fff;
  border-radius: 3px;
}

.custom-checkbox:checked + .checkbox-label:before {
  background-color: #959595;
}

.custom-checkbox:checked + .checkbox-label:after {
  content: "";
  position: absolute;
  left: 6px;
  top: 0;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.students-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.student {
  cursor: pointer;
}

.profile-pic-container {
  border-radius: 50%;
  width: 90px;
  height: 90px;
  margin-bottom: 5px;
  position: relative;
}

.profile-pic-container.selected {
  border: 2px solid purple;
  padding: 2px;
}

.profile-pic {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}

.student-name {
  color: #333333;
}

.send-button {
  background: -webkit-linear-gradient(#412974, #9D18FF);
  color: white;
  border: none;
  border-radius: 11px;
  padding: 10px 40px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Quicksand-Bold';
}

.student-count {
  margin-top: 20px;
  color: #959595;
}
</style>
  