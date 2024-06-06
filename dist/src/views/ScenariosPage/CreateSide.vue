<template>
     <div v-if="!isFormSubmitted" class="slider-container">
      <div class="header-text">
        <h2 class="gradient-text">Examples:</h2>
        <p class="caption">{{ currentImage.caption }}</p>
      </div>
      <div class="slider">
        <div class="slide-wrapper">
          <div v-for="(image, index) in images" :key="image.id" class="slide" v-show="currentSlide === index">
            <img :src="image.src" :alt="image.caption">
          </div>
        </div>
      </div>
      <div class="dots">
        <span v-for="(image, index) in images" :key="image.id" class="dot" :class="{ active: currentSlide === index }" @click="goToSlide(index)"></span>
      </div>
    </div>

<!-- 
    <div v-if="isFormSubmitted" class="scenario-preview">
        <div class="image-container">
            <img :src="imageSrc" alt="Restaurant Scenario" />
        </div>
        <div class="description-container">
            <h3>Description:</h3>
            <p>Restaurant Scenario - Spanish B2</p>
            <p class="italic">*Topic Description*</p>
        </div>
        <div class="topics-container">
            <h3>Conversation Topics and Vocab Summary:</h3>
            <ul>
                <li v-for="item in topics" :key="item">{{ item }}</li>
            </ul>
        </div>
    </div> -->
    <div v-if="isFormSubmitted" class="scenario-preview">
      <div class="image-container">
        <img :src="scenario.imageSrc" alt="Restaurant Scenario" />
      </div>
      <div class="description-container">
        <h3>Description:</h3>
        <p>{{ scenario.name }} - {{ scenario.creator }}</p>
        <p class="italic">{{ scenario.description }}</p>
      </div>
      <div class="topics-container">
        <h3>Conversation Topics and Vocab Summary:</h3>
        <p>{{ scenario.prompt }}</p>
      </div>
    </div>

</template>
  
  <script>
  import axios from 'axios';

  export default {
    name: 'ImageSlider',
    props: ['isFormSubmitted','scenarioId'],
    data() {
      return {
        currentSlide: 0,
        images: [
          {
          id: 1,
          src: '/src/assets/images/image3.png',
          caption: '\"Create a conversation in a restaurant\"'
        },
        {
          id: 2,
          src: '/src/assets/images/image1.png',
          caption: '\"Create a conversation in work\"'
        },
        {
          id: 3,
          src: '/src/assets/images/image4.png',
          caption: '\"Create a conversation in a caffee\"'
        }
        ],
        // imageSrc: '/src/assets/images/image3.png',
        // topics: [
        //     '________________________________________',
        //     'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        //     // ... more topics and vocabulary
        // ],
        scenario: {
          id: '',  // Assuming we're getting this as a prop or define it here for now
          name: '',
          description: '',
          prompt: '',
          creator: '',
          imageSrc: '',  // Assuming image is handled here after decoding from base64
        },
      };
    },
    computed: {
      currentImage() {
        return this.images[this.currentSlide];
      }
    },
    methods: {
      fetchScenarioData() {
        axios.get(`http://localhost:3000/api/v1/scenarios/${this.scenarioId}`)
          .then(response => {
            const { name, description, prompt, creator, image, id } = response.data;
            this.scenario.name = name;
            this.scenario.description = description;
            this.scenario.prompt = prompt;
            this.scenario.creator = creator;
            this.scenario.id = id;
            this.scenario.imageSrc = `data:image/png;base64,${image}`;
          })
          .catch(error => {
            console.error('Error fetching scenario:', error);
          });
      },
      goToSlide(index) {
        this.currentSlide = index;
      },
    },
    watch: {
      scenarioId(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.fetchScenarioData();
        }
      }
    },
    mounted() {
      this.fetchScenarioData();
    },
  };
  </script>
  
  <style scoped>

  /* CreateSide styles*/
  .slider-container {
    color: white;
    padding: 40px;
    text-align: center;
  }

  .gradient-text{
    background: -webkit-linear-gradient(#412974, #9D18FF);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
    }

   .caption{
    color: #412874;
   }
  
  .header-text h2 {
    margin-bottom: 8px;
  }
  
  .header-text p {
    font-size: 18px;
  }
  
  .slider {
    position: relative;
    margin: 20px 0;
  }
  
  .slide-wrapper {
    display: flex;
  }
  
  .slide {
    flex: 0 0 100%;
    width: 100%;
  }
  
  img {
    width: 100%;
    height:350px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .dots {
    text-align: center;
  }
  
  .dot {
    height: 5px;
    width: 20px;
    margin: 0 5px;
    background-color: #F7F7F7;
    border-radius: 2px;
    border: 0.5px solid;
    border-color: #42187480;
    display: inline-block;
    transition: background-color 0.6s ease;
  }
  
  .dot.active {
    background-color: #412874;
  }




/* ScenarioPreview styles*/
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
  