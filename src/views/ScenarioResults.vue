<template>
  <NavBar />
  <div class="container">
    <div class="content">
      <div class="main-section">
        <img :src="imageSrc" alt="scenario image" class="scenario-image"/>
        <div class="assignment">
          <div class="assignment-details">
            <div class="assignment-profile">
              <img :src="profilePicture" alt="Assigned Person" class="profile-pic"/>
              <h1>Assigned to {{ assigneeName }}</h1>
            </div>
            <h2>{{ conversationTitle }}</h2>
            <h3>Description:</h3>
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
      <div class="analysis">
        <h2>Conversation Analysis:</h2>
        <ul>
          <li><span class="dot conversation-time"></span> Conversation Time</li>
          <li><span class="dot grammar-mistakes"></span> Grammar Mistakes</li>
          <li><span class="dot word-choice-mistakes"></span> Word Choice Mistakes</li>
          <li><span class="dot sentence-structure-mistakes"></span> Sentence Structure Mistakes</li>
        </ul>
      </div>
      <div class="empty-box">
        <div class="conversation-container">
          <div v-for="(message, index) in messages" :key="index" class="message-box" :class="{ 'bot-message': message.type === 'bot', 'user-message': message.type === 'user' }">
            {{ message.text }}
            <div v-if="message.corrections" class="corrections">
              <div v-for="(correction, idx) in message.corrections" :key="idx" class="correction">
                {{ correction.type }} Mistake: {{ correction.suggestion }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'ConversationAnalysis',
  components: {
    NavBar,
  },
  data() {
    return {
      imageSrc: '/src/assets/images/scenario.jpg',
      profilePicture: '/src/assets/images/person1.jpg',
      assigneeName: 'Harry',
      conversationTitle: 'Spanish Restaurant Conversation',
      description: 'A customer, newly arrived in Spain, visits a renowned local restaurant to experience traditional Spanish cuisine. The waiter greets the customer and offers recommendations.',
      messages: [
        {
          type: 'bot',
          text: '¡Buenas tardes! Bienvenido a El Tigre, acá servimos comida Española. ¿En qué puedo ayudarle hoy?',
        },
        {
          type: 'user',
          text: 'Buenas tardes. ¿Me podría decir algo típico de aquí?',
          corrections: [
            { type: 'Word Choice', suggestion: 'recomendar' }
          ]
        },
        {
          type: 'bot',
          text: 'Claro que sí. Nuestro plato más popular es la paella, que es muy típica de España. También tenemos unas excelentes tapas, como patatas bravas, jamón ibérico y gambas al ajillo. ¿Le gustaría probar algo de esto?',
        },
        {
          type: 'user',
          text: 'Bueno, estabas pensando en probar una variedad de sabores. ¿Qué tal si empezamos con unas tapas? Oído que las tapas son una forma estupenda de probar distintos platos.',
          corrections: [
            { type: 'Sentence Structure', suggestion: 'He oído que' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  color: #412874;
  padding:2rem;
  margin: auto;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.main-section {
  display: flex;
  align-items: center;
  gap: 30px;
}

.scenario-image {
  width: 30%; /* Adjust width as needed */
  height: 230px;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.assignment {
  width: 70%;
  display: flex;
  align-items: center;
  gap: 20px;
}

.assignment-details {
  display: flex;
  flex-direction: column;
}

.assignment-profile{
  display: flex;
  flex-direction: row;
}

.assignment-profile h1{
  margin: auto 0;
}

.assignment-details h2{
  font-family: 'Quicksand-Bold';
  background: -webkit-linear-gradient(#412874, #7A4BDA);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
}

.assignment-details h3{
  margin:0;
  font-family: 'Quicksand-Bold';
}

.profile-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.analysis{
  display: flex;
}

.analysis h2 {
  margin-bottom: 10px;
  width:30%;
  font-family: 'Quicksand-SemiBold';
}

.analysis ul {
  list-style: none;
  padding: 0;
  display: flex; 
  justify-content: space-between;
  width: 70%;
}

.analysis li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dot {
  height: 10px;
  width: 25px;
  border-radius: 15px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
  display: inline-block;
}

.conversation-time {
  background-color: #412874;
}

.grammar-mistakes {
  background-color: magenta;
}

.word-choice-mistakes {
  background-color: blue;
}

.sentence-structure-mistakes {
  background-color: cyan;
}

.empty-box {
  max-height: 400px; 
  overflow-y: auto; 
  border: 0.50px rgba(65, 40, 116, 0.50) solid;
  border-radius: 10px;
}

.conversation-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.message-box {
  background-color: #f0f0f0;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
}

.bot-message {
  align-self: flex-start;
  width:45%;
  background: linear-gradient(180deg, #8C52FF 0%, #5CE1E6 150%);
  color:white;
}

.user-message {
  align-self: flex-end;
  width:45%;
  background-color:white;
  border: 1px #412874 solid;
  color:412874;
  font-weight: 600;
}

.corrections {
  margin-top: 5px;
  background-color: #e0e0e0;
  padding: 5px;
  border-radius: 5px;
}


.conversation-time {
  background-color: black;
}

.grammar-mistakes {
  background-color: magenta;
}

.word-choice-mistakes {
  background-color: blue;
}

.sentence-structure-mistakes {
  background-color: cyan;
}
</style>
