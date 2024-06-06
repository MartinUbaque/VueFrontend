<template>
    <div class="scenario-preview" v-if="scenario.id">
      <div class="image-container">
        <img :src="scenario.imageSrc" alt="Restaurant Scenario" />
      </div>
      <div class="description-container">
        <h3>Description:</h3>
        <p>{{ scenario.name }}</p>
        <p class="italic">{{ scenario.description }}</p>
      </div>
      <div class="topics-container">
        <h3>Conversation Topics and Vocab Summary:</h3>
        <p>{{ scenario.description }}</p>
      </div>
    </div>
    <div v-else>
      <p>Loading scenario...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useScenarioStore } from '@/stores/ScenarioStore';
  
  export default {
    name: 'ScenarioPreview',
    data() {
      return {
        scenario: {
          id: '',
          name: '',
          description: '',
          prompt: '',
          creator: '',
          imageSrc: '', // This will be set after fetching and decoding the image
        },
      };
    },
    computed: {
      scenarioStore() {
        return useScenarioStore();
      }
    },
    methods: {
      fetchScenarioData() {
        axios.get(`http://localhost:3000/api/v1/scenarios/${this.scenarioStore.scenarioId}`)
          .then(response => {
            const { name, description, prompt, creator, image, id } = response.data;
            this.scenario = {
              id: id,
              name: name,
              description: description,
              prompt: prompt,
              creator: creator,
              imageSrc: `data:image/png;base64,${image}`, // Assuming the image is base64 encoded
            };
          })
          .catch(error => {
            console.error('Error fetching scenario:', error);
          });
      }
    },
    watch: {
      'scenarioStore.scenarioId'(newVal, oldVal) {
        if (newVal !== oldVal && newVal) {
          this.fetchScenarioData();
        }
      }
    },
    mounted() {
      if (this.scenarioStore.scenarioId) {
        this.fetchScenarioData();
      }
    }
  }
  </script>
  
  <style scoped>
  .scenario-preview {
  max-width: 90%;
  padding-top:40px;
  margin: auto;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Quicksand';
}

.image-container img {
  width: 100%;
  display: block;
  object-fit: cover;
}

img {
    width: 100%;
    height:350px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

.description-container, .topics-container {
  padding: 20px;
  color: #808080;
  line-height: 15px; 
  letter-spacing: 0.40px; 
  word-wrap: break-word;
}

.description-container h2, .topics-container h3 {
  color: #818181;
  margin-bottom: 10px;
}

.italic {
  font-style: italic;
}

ul {
  padding: 0;
  margin: 0;
}

ul li {
  margin-bottom: 8px;
  padding: 8px;
}

ul li:last-child {
  margin-bottom: 0;
}
  </style>
  