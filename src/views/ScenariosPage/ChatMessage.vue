<template>
  <div class="message" :class="{ 'other-message': message.receive, 'user-message': !message.receive}">
    <p>{{ message.text }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  methods: {
    async sendMessage() {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/gtp/audio', {
          text: this.message.text
        });
        console.log('Message sent successfully.');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  },
  mounted() {
    this.sendMessage();
  }
};
</script>

<style scoped>
.other-message {
  text-align: left;
  background-color: #E5E7EB;
  padding: 8px 12px;
  border-radius: 12px;
  margin: 8px;
}

.user-message {
  text-align: right;
  background-color: #DCF8C6;
  padding: 8px 12px;
  border-radius: 12px;
  margin: 8px;
}
</style>