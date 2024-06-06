<template>
  <div class="slider-container">
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
</template>

<script>
export default {
  name: 'ScenarioExamplesCarousel',
  data() {
    return {
      currentSlide: 0,
      images: [
        { id: 1, src: '/src/assets/images/image3.png', caption: 'Create a conversation in a restaurant' },
        { id: 2, src: '/src/assets/images/image1.png', caption: 'Create a conversation in work' },
        { id: 3, src: '/src/assets/images/image4.png', caption: 'Create a conversation in a cafe' }
      ]
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentSlide];
    }
  },
  methods: {
    goToSlide(index) {
      this.currentSlide = index;
    }
  }
}
</script>

<style scoped>
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
</style>
