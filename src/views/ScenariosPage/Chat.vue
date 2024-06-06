<template>
    <div class="chat">
        <div class="chat-controls">
            <div class="description">
            <h1>Description</h1>
            <p>Conversation about space...</p>
            </div>
            <div class="controls">
                <div class="toggle-group">
                    <label>Help Text Language</label>
                    <button @click="toggleLanguage" :class="{ active: helpTextLanguage === 'Native' }">Native</button>
                    <button @click="toggleLanguage" :class="{ active: helpTextLanguage === 'New' }">New</button>
                </div>
                <div class="toggle-group">
                    <label>Enable Suggestions</label>
                    <button @click="toggleSuggestions" :class="{ active: suggestionsEnabled }">On</button>
                    <button @click="toggleSuggestions" :class="{ active: !suggestionsEnabled }">Off</button>
                </div>
                <div class="buttons-group">
                    <button @click="restartConversation" class="action-btn">Restart Conversation</button>
                    <button @click="backToEdit" class="action-btn">Back to Edit</button>
                </div>
            </div>
        </div>
        <div class="chat-box">
          <ChatBox :reset-trigger="resetTrigger" />
        </div>
    </div>
  </template>
  
  <script>
  import ChatBox from '@/views/ScenariosPage/ChatBox.vue';

  export default {
    components: {
        ChatBox
    },
    data() {
      return {
        helpTextLanguage: 'Native',
        suggestionsEnabled: true,
        resetTrigger: false,
      };
    },
    methods: {
      toggleLanguage() {
        this.helpTextLanguage = this.helpTextLanguage === 'Native' ? 'New' : 'Native';
      },
      toggleSuggestions() {
        this.suggestionsEnabled = !this.suggestionsEnabled;
      },
      restartConversation() {
        this.resetTrigger = !this.resetTrigger; // Toggle the reset trigger to initiate the reset in the child component
        console.log('Conversation restarted');
      },
      backToEdit() {
        console.log('Going back to edit mode');
      }
    }
  }
  </script>
  
  <style scoped>
    .chat{
    font-family: 'Quicksand-SemiBold';
    display: flex;
    background: url('/src/assets/images/scenario.jpg') center center no-repeat;
    background-size: cover;
    height: 100vh; /* Adjust based on your application's layout */
    }
    .chat-box{
    width:50vw;
    height: 90vh;
    padding: 20px;
    }
  .chat-controls {
    width:50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    padding: 20px;
  }

  .description{
    background: rgba(0, 0, 0, 0.7); /* Semi-transparent black background */
    border: 1px solid rgba(255, 255, 255, 0.772); /* Subtle white border */
    border-radius: 10px;
    padding: 15px;

  }

  .description h1, .description p {
    margin: 1rem;
  }
  
  .controls {
    background: rgba(0, 0, 0, 0.7); /* Semi-transparent black background */
    border: 1px solid rgba(255, 255, 255, 0.772); /* Subtle white border */
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  
  .toggle-group {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .toggle-group label {
  margin-right: 1rem;
  }
  
  .toggle-group button {
    font-family: 'Quicksand-SemiBold'!important;
    padding: 10px 20px;
    margin: 0 5px;
    background: none;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .toggle-group button.active {
      border: solid 2px #9D18FF;
      color: #9D18FF;
    
  }

  .buttons-group{
    display: flex;
    flex-direction: row;
    justify-content: center;

  }
  
  .action-btn {
    width:40%;
    margin-right:1rem;
    background: none;
    margin-top: 10px;
    cursor: pointer;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 15px;
    padding: 10px 20px;
    cursor: pointer;
    margin-top: 10px;
  }

  .action-btn:hover {
    border: 3px #A3CBF0 solid; 
}
  </style>
  