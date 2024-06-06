
  <template>
    <div class="chatbox">
      <h1 class="heading">{{ hasRecordedAudio ? 'Conversation' : 'Start a Conversation!' }}</h1>
      <div class="messages">
        <!-- Display each message in the messages array -->
        <div v-for="msg in messages" :key="msg.id" class="message" :class="{ 'sent': msg.sent, 'received': !msg.sent }">
          <div class="custom-audio-player">
            <button @click="togglePlay(msg)" class="play-button">
              <img :src="msg.playing ? '/src/assets/images/pause.png' : '/src/assets/images/play.png'" alt="Play/Pause">
            </button>
            <div class="progress-bar" @click="seek($event, msg)">
              <div class="progress" :style="{width: msg.progress + '%'}"></div>
            </div>
            <span class="time">{{ formatTime(msg.currentTime) }} / {{ formatTime(msg.duration) }}</span>
            <audio ref="audioRefs" :src="msg.audio" @loadedmetadata="setupAudio(msg)" @timeupdate="updateProgress(msg)"></audio>
          </div>
        </div>
      </div>

      <div class="bot">
        <img src="/src/assets/images/bot-chat.png" alt="Bot" class="bot-image">
      </div>
      <div class="message-input">
        <button class="microphone-btn" @click="recordAudio">
          <img src="/src/assets/images/microphone.png" alt="Record">
        </button>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        messages: [
          {
            id: 1,
            audio: '/src/assets/images/austere.mp3', 
            sent: false
          },
        ],
        recording: false,
        mediaRecorder: null,
        audioChunks: [],
        hasRecordedAudio: false, // Flag to track if any audio has been recorded
      };
    },
    props: {
      resetTrigger: Boolean
    },
    watch: {
      resetTrigger(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.resetMessages();
        }
      }
    },
    methods: {
      resetMessages() {
        if (this.messages.length > 1) {
          this.messages.splice(1); // Keeps the first message and removes the rest
        }
        this.hasRecordedAudio = false; 
      },
      async recordAudio() {
        if (!this.recording) {
          if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            console.error('Audio recording is not supported by your browser.');
            return;
          }
  
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.mediaRecorder = new MediaRecorder(stream);
            this.audioChunks = [];
  
            this.mediaRecorder.ondataavailable = (event) => {
              if (event.data.size > 0) {
                this.audioChunks.push(event.data);
              }
            };
  
            this.mediaRecorder.onstop = () => {
              const audioBlob = new Blob(this.audioChunks);
              const audioUrl = URL.createObjectURL(audioBlob);
              this.messages.push({
                id: this.messages.length + 1,
                audio: audioUrl,
                sent: true,
              });
              this.hasRecordedAudio = true; // Set the flag to true once audio is recorded
              stream.getTracks().forEach(track => track.stop());
            };
  
            this.mediaRecorder.start();
            this.recording = true;
            console.log('Recording started');
          } catch (err) {
            console.error('Error accessing the microphone:', err);
          }
        } else {
          this.mediaRecorder.stop();
          this.recording = false;
          console.log('Recording stopped');
        }
      },

      togglePlay(msg) {
      const audio = this.$refs.audioRefs[this.messages.indexOf(msg)];
      if (audio.paused) {
        audio.play();
        msg.playing = true;
      } else {
        audio.pause();
        msg.playing = false;
      }
    },
    setupAudio(msg) {
      const index = this.messages.indexOf(msg);
      const audio = this.$refs.audioRefs[index];

      if (audio) {
        if (audio.readyState >= 2) { // Indicates metadata has been loaded
          msg.duration = audio.duration;
          console.log("Duration set immediately: ", msg.duration);
        } else {
          audio.onloadedmetadata = () => {
            msg.duration = audio.duration;
            console.log("Duration set on metadata load: ", msg.duration);
            audio.onloadedmetadata = null; // Remove event listener once executed
          };
        }
      } else {
        console.error("Audio element not found in refs");
      }
    },
    updateProgress(msg) {
      const audio = this.$refs.audioRefs[this.messages.indexOf(msg)];
      msg.currentTime = audio.currentTime;
      msg.progress = (audio.currentTime / audio.duration) * 100;
    },
    seek(event, msg) {
      const audio = this.$refs.audioRefs[this.messages.indexOf(msg)];
      const width = event.currentTarget.clientWidth;
      const clickX = event.offsetX;
      const duration = audio.duration;
      audio.currentTime = (clickX / width) * duration;
    },
    formatTime(time) {
      if (isNaN(time)) {
      return '00:00';  // Return '00:00' if time is NaN
      }
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    },
    }
  }
  </script>
  
  <style scoped>
  .chatbox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.772);
    border-radius: 10px;
    height: 95%;
  }
  
  .heading {
    color: white;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .messages {
    overflow-y: auto;
  margin-bottom: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  }

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: none; 
  border: 1px solid rgba(255, 255, 255, 0.772);
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #9D18FF 0%, #FF65C3 100%);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #9D18FF; 
}
  
  .message {
    display: flex;
    margin-bottom: 10px;
  }
  
  .message.sent {
    justify-content: flex-end;
  }
  
  .message.received {
    justify-content: flex-start;
  }

  .audio-player {
  margin: 5px;
}
  
  .message-input {
    display: flex;
    justify-content: center;
  }
  
  .microphone-btn {
    background: linear-gradient(180deg, #9D18FF 0%, #412874 100%);
    border-radius: 50%;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    margin-top:0.5rem;
  }
  
  .microphone-btn img {
    width: 30px;
    height: 40px;
  }

  .bot{
    border-bottom: 1px solid white;
  }

  .bot-image {
    width: 100px;
    height: 70px;
  }

  .custom-audio-player {
  display: flex;
  align-items: center;
  background-color: #000;
  padding: 10px;
  border-radius: 20px;
}

.play-button {
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  width: 50px;
  height: 40px;
}

.play-button img{
    width:100%;
    height:100%;
    object-fit: fit;
}

.progress-bar {
  flex-grow: 1;
  height: 5px;
  background-color: #666;
  cursor: pointer;
  position: relative;
}

.progress {
  height: 5px;
  background-color: #9D18FF;
}

.time {
  margin-left: 10px;
  color: #FFF;
}


  </style>
  



