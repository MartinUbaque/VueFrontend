<template>
  <div>
    <NavBar />
    <h1 class="title">All Students</h1>

    <div class="item-container">
      <div class="item" @click="showModal = true">
        <div class="create-circle">
          <img src="../assets/images/plus.png">
        </div>
        <p class="item-title">Add Student</p>
      </div>
      <div class="item" v-for="(student, index) in students" :key="index">
        <router-link to="/studentProfile">
          <img :src="student.picture" :alt="student.name" class="item-picture">
          <p class="item-title">{{ student.name }}</p>
        </router-link>
      </div>
    </div>

    <!--Pop up -->
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <span class="close" @click="showModal = false">&times;</span>
        <h2 class="modal-title">Add Student</h2>
        <form @submit.prevent="sendInvitation">
          <input type="text" v-model="student.name" placeholder="Name" required>
          <select class="select" v-model="student.language" required>
            <option value="" disabled selected>Languages to learn</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="English">English</option>
          </select>
          <input type="email" v-model="student.email" placeholder="e-mail@something.com" required>
          <button type="submit" id="invite">Send invitation</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      showModal: false,
      student: {
        name: '',
        email: '',
        language: '',
      },
      students: [
        { name: 'Andrea', picture: '/src/assets/images/person1.jpg' },
        { name: 'Liam', picture: '/src/assets/images/person.jpg' },
        { name: 'Andrea', picture: '/src/assets/images/person1.jpg' },
        { name: 'Liam', picture: '/src/assets/images/person.jpg' },
        { name: 'Andrea', picture: '/src/assets/images/person1.jpg' },
        { name: 'Liam', picture: '/src/assets/images/person.jpg' },
      ],
    };
  },
  methods: {

    // async sendInvitation() {
    //   const message = "Join Now";
    //   console.log(`Sending invitation to ${this.student.email} with message: ${message}`);
      
    //   console.log('Adding student:', this.student);
    //   //Reset
    //   this.student.name = '';
    //   this.student.email = '';
    //   this.student.language = '';
    //   this.showModal = false;
    // },

    sendInvitation() {
      const emailData = {
        to: this.student.email,
        subject: 'Invitation to Join',
        message: `Hi ${this.student.name},\n\nYou have been invited to join the platform. Please use the following link to complete your registration.\n\nJoin Now Link: [Insert Link Here]\n\nBest Regards,`
      };
      
      // Set the endpoint URL of your email sending service
      const emailEndpoint = 'http://yourserver.com/send-email';
      
      // Make the POST request
      axios.post(emailEndpoint, emailData)
        .then(response => {
          // Handle the success
          console.log('Email sent successfully:', response.data);
          alert('An invitation has been sent to the student.');
          this.closeModal();
        })
        .catch(error => {
          // Handle the error
          console.error('Error sending email:', error);
          alert('There was an error sending the invitation.');
        });
    }
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  color: #412874;
  font-family: 'Quicksand-SemiBold';
}

.item-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 80%; 
  margin: 0 auto;
}

.create-circle {
  width: 150px;
  height: 150px;
  background: linear-gradient(180deg, #9D18FF 0%, #5CE1E6 100%);
  border-radius: 50%;
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
  margin: 50px;
}

.item-picture {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.item-title {
  margin-top: 10px;
  font-weight: bold;
  width: 150px;

}

.modal {
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: rgba(65, 40, 116, 0.8);
  margin: 12% auto;
  padding: 1rem;
  padding-bottom: 3rem;
  border: 1px solid #888;
  width: 30%;
  border-radius: 10px;
  color: white;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal-title {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input, .select {
  font-family: 'Quicksand';
  font-size:1rem;
  letter-spacing: 0.4px;
  color: rgba(65, 40, 116, 0.60);
  margin: 10px 0;
  padding: 10px;
  width: 80%;
  border-radius: 5px;
  border: none;
}
.select{
  width: 85%;
}

#invite {
  font-family: 'Quicksand';
  font-size:1rem;
  letter-spacing: 0.4px;
  background: #412874; 
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
  border-radius: 10px; 
  border: 0.50px rgba(255, 255, 255, 0.50) solid;
  margin-top: 1rem;
  padding: 10px 40px;
  color: white;
  cursor: pointer;
}

#invite:hover {
  background-color: rgba(65, 40, 116, 0.7);
}

@media only screen and (max-width: 767px) {
  .item-container {
  justify-content: center;
  }

}
</style>