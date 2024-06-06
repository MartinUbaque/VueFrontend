<template>
      <div class="item-container">
        <div class="item">
          <div class="create-circle" @click="$emit('toggleCreate')">
            <img src="../assets/images/plus.png" width="80" height="80">
          </div>
          <p class="item-title">Create</p>
        </div>
        <div class="item" v-for="scenario in scenarios" :key="scenario.title">
          <img :src="scenario.image" :alt="scenario.title" class="item-picture">
          <p class="item-title">{{ scenario.title }}</p>
          <p class="scenario-duration">{{ scenario.duration }}</p>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    name: 'ScenariosList',
    props: {
      scenarios: Array
    },
    emits: ['toggleCreate']
  };
  </script>
  
  <style scoped>
  .item-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 80%; 
    margin: 0 auto;
  }
  
  .create-circle {
    width: 100px;
    height: 100px;
    background: linear-gradient(180deg, #412874 0%, #9D18FF 100%);
    border-radius: 50%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: white;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  
  .item {
    text-align: center;
    margin: 25px;
  }
  
  .item-picture {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  
  .item-title {
    margin-top: 10px;
    font-weight: bold;
    width: 150px;
  }
  
  .scenario-duration {
    color: #959595;
    font-size: 14px;
  }
  </style>
  