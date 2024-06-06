<template>
  <div class="carousel">
    <div
      v-for="(card, index) in cards"
      :key="card.id"
      :class="{ 'card': true, 'active': index === activeIndex }"
      @click="handleCardClick(card)"
    >
      <p class="gradient-text">{{ card.text }}</p>
      <img :src="card.imageUrl" alt="Card Image" />
    </div>
    <div class="card-navigation">
      <span
        v-for="(card, index) in cards"
        :key="card.id"
        @click="goToCard(index)"
        :class="{ 'active-line': index === activeIndex }"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Card {
  id: number;
  imageUrl: string;
  text: string;
}

export default defineComponent({
  data() {
    return {
      cards: [
        {
          id: 1,
          imageUrl: '/src/assets/images/image3.png',
          text: '\"Create a conversation in a restaurant\"'
        },
        {
          id: 2,
          imageUrl: '/src/assets/images/image1.png',
          text: '\"Create a conversation in work\"'
        },
        {
          id: 3,
          imageUrl: '/src/assets/images/image4.png',
          text: '\"Create a conversation in a caffee\"'
        }
      ] as Card[],
      activeIndex: 0,
      timer: null
    };
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    handleCardClick(card: Card) {
      console.log(`Clicked on card with ID ${card.id}`);
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.nextCard();
      }, 4000);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    nextCard() {
      this.activeIndex = (this.activeIndex + 1) % this.cards.length;
    },
    goToCard(index: number) {
      this.activeIndex = index;
      this.stopTimer();
      this.startTimer();
    }
  },
  beforeUnmount() {
    this.stopTimer();
  }
});
</script>

<style>
.gradient-text{
  background-color: #412874;
  background-image: linear-gradient(#412974, #9D18FF);
  background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
}
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  width: 300px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: none;
}

.card.active {
  display: block;
  transform: scale(1.1);
}

.card img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.card p {
  margin: 10px 0 0;
}

.card-navigation {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.card-navigation span {
  display: block;
  width: 10px;
  height: 10px;
  background-color: #ccc;
  margin: 0 5px;
  border-radius: 50%;
  cursor: pointer;
}

.card-navigation span.active-line {
  background-color: #333;
}
</style>