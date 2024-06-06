<template>
    <div class="container">
        <h1>Text to Create!</h1>
        <div class="chat">
          <ChatMessage v-for="(message, index) in sortedMessages" :key="index" :message="message"/>
        </div>
        <div class="bot"></div>
        <br>
    
    <div class="input">
          <button @click="uploadPhoto"><i>photo</i></button>
          <button @click="uploadDocument"><i>doc</i></button>
          <input type="text" v-model="messageText" @keyup.enter="sendMessage">
          <button @click="startRecording"><i>mic</i></button>
          <button @click="switchReceiver">Switch Receiver</button> <!-- Used for testing-->
        </div>
  </div>
</template>

<script>
import ChatMessage from './ChatMessage.vue';

export default {
  components: {
    ChatMessage
  },
  data() {
    return {
      messageText: '',
      messages: [],
      receive: false
    };
  },
  computed: {
    sortedMessages() {
      return this.messages.slice().sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    }
  },
  methods: {
    sendMessage() {
      if (this.messageText.trim() !== '') {
        const newMessage = {
          text: this.messageText,
          timestamp: new Date(),
          receive: this.receive
        };
        this.messages.push(newMessage);
        this.messageText = '';
      }
    },
    switchReceiver() { //used for testing
      this.receive = !this.receive;
    }
  }
};

</script>


<style scoped>
</style>