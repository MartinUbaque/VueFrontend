<template>
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
              <span class="gradient-text"><label for="scenario-description">Describe the topic, theme, or context of the scenario</label></span>
              <textarea id="scenario-description" class="form-control input-box" v-model="formData.description" placeholder="Create a conversation in a Spanish restaurant..."></textarea>
          </div>
          <div class="form-group">
              <span class="gradient-text"> <label for="vocabulary">Any specific vocabulary?</label> </span>
              <textarea id="vocabulary" class="form-control input-box" v-model="formData.vocabulary" placeholder="Typical Spanish dishes..."></textarea>
          </div>
          <div class="form-group form-button">
              <button type="submit" class="form-control create-button">CREATE</button>
          </div>
      </form>
  </div>
</template>

<script>
import axios from 'axios';
import { useAuthStore } from '@/stores/AuthStore'; 
import { useScenarioStore } from '@/stores/ScenarioStore'; 

export default {
  name: 'CreateFormComponent',
  props: {
      formData: {
          type: Object,
          default: () => ({
              language: '',
              level: '',
              description: '',
              vocabulary: ''
          })
      },
      formSubmitted: Boolean,
      showSendContainer: Boolean
  },
  methods: {
      onCreate() {
        const authStore = useAuthStore();
        const scenarioStore = useScenarioStore();
        console.log('onCreate triggered');

          axios.post('http://localhost:3000/api/v1/scenarios', {
              language: this.formData.language,
              level: this.formData.level,
              context: this.formData.description,
              specifics: this.formData.vocabulary,
              creator: authStore.email
          })
          .then(response => {
              // Handle the response from the server here
              console.log('Success:', response);
              scenarioStore.setScenarioId(response.data.id); // Save the scenario ID
              console.log(response.data.id);
              this.$emit('created');
          })
          .catch(error => {
              // Handle any errors here
              console.error('Error:', error);
          });
      }
  }
}
</script>

<style scoped>
.scenario-creator {
  max-width: 100%;
  padding-right: 20px;
  background-color: #ffffff;
}

.title-container {
  margin-bottom: 30px;
  text-align: center;
}

.gradient-text {
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

.input-box {
  height: 100px;
}

.form-button {
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
</style>