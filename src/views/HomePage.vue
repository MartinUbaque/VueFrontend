<template>
    <NavBar />
    <h1 class="title">Welcome Back, Harry!</h1>
    <div class="container">
      <span class="progress-title">My Progess</span>
      <div class="content">
        <div class="progress-cards">
          <div class="card">
            <h2>11%</h2>
            <p>Weekly Mistakes Reduction</p>
          </div>
          <div class="card">
            <h2>16h</h2>
            <p>Total Conversation Time</p>
          </div>
          <div class="card">
            <h2>12</h2>
            <p>Total Scenarios Completed</p>
          </div>
        </div>
        <div class="charts">
          <div class="bar-chart">
            <BarChart :chart-data="engagementData" :options="chartOptions" />
            <span class="label">Weekly Engagement</span>
          </div>
          <div class="line-chart">
            <LineChart :chart-data="dataCollection" :options="chartOptions" />
            <span class="label">Mistakes per Hour of Conversation</span>
          </div>
        </div>
      </div>
      <div class="my-info">
        <div class="scenarios">
          <h2>My Scenarios</h2>
            <img src='/src/assets/images/person1.jpg' alt="Scenario" class="scenario-img">
        </div>
        <div class="instructors">
          <h2>Instructors</h2>
          <p v-if="!instructorAdded">Ask your instructor to add you</p>
          <div class="instructor-card" v-else>
            <img src="/src/assets/images/person.jpg" alt="Instructor Sophie" class="instructor-img">
            <div class="instructor-info">
              <h3>Sophie</h3>
              <p>B2 - Spanish</p>
              <p>2 new scenarios</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import NavBar from '@/components/StudentNavBar.vue';
import { defineComponent } from 'vue';
import { LineChart, BarChart } from 'vue-chart-3';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  LineController,  // Importing LineController
  BarController,  
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register all necessary Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineController, 
  BarController, 
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  BarElement
);

export default defineComponent({
  components: {
    LineChart,
    BarChart,
    NavBar
  },
  data() {
    return {
      instructorAdded: false, 
      scenarioImage: '',
      instructorImage: '',
      dataCollection: {
        labels: ['1st Week', '2nd Week', '3rd Week', '4th Week'],
        datasets: [
          {
            label: 'Grammar',
            backgroundColor: '#FF65C3', 
            borderColor: '#FF65C3',
            data: [40, 30, 20, 10],
            fill: false, // Set to true if you want the area under the line filled
          },
          {
            label: 'Word Choice',
            backgroundColor: '#8C52FF',
            borderColor: '#8C52FF',
            data: [30, 25, 15, 8],
            fill: false, // Set to true if you want the area under the line filled
          },
          {
            label: 'Sentence Structure',
            backgroundColor: '#5CE1E6',
            borderColor: '#5CE1E6',
            data: [28, 18, 12, 6],
            fill: false,
          }
        ]
      },
      engagementData: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [
          {
            label: 'Weekly Engagement',
            backgroundColor: '#8C52FF',
            data: [3, 2, 0, 0, 0, 1.5, 1]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    logout() {
      // Implement your logout logic
    }
  }
})
</script>

<style scoped>
.title {
  text-align: center;
  color: #412874;
  font-family: 'Quicksand-SemiBold';
  font-size:38px;
}
.container {
  color: #333;
  margin: auto;
  padding: 0 3rem;
}
.progress-title{
  color: #412874; 
  font-size: 26px; 
  font-family: "Quicksand"; 
}
.content {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
  border-radius: 15px; 
  border: 0.50px rgba(65, 40, 116, 0.192) solid;
}
.progress-cards {
  width: 30%; /* Adjust this based on your design needs */
  display: flex;
  flex-direction: column;
}

.card {
  display:flex;
  background-color: white;
  margin-top: 3rem;
}
.card h2{
  background: -webkit-linear-gradient(#9D18FF, #5CE1E6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  font-size:38px;
  font-family: 'Quicksand-Bold';
  margin:0 1rem 0;
}
.card p{ 
  margin: auto 0;
  color: #412874; 
  font-size: 20px; 
  font-family: "Quicksand"; 
  font-weight: 500; 
  letter-spacing: 0.40px; 
}
.charts {
  width: 65%;
  display: flex;
  justify-content: space-around;
  margin-left: 5%;
}
.bar-chart, .line-chart {
  width: 48%; /* This maintains the width inside the charts div */
  padding: 10px;
  background-color: #fff;
  text-align: center;
}
.label{
  color:#412874;
  font-weight: bold;
}
.my-info {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.scenarios {
  width: 30%;
}
.instructors{
  width: 70%;
}
.scenario-img {
  width: 130px;
  height: 130px;
  border: 6px solid white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); 
  object-fit: cover; 
  border-radius: 20%;
}

.scenarios h2, .instructors h2 {
  color: #412874;
  font-family: 'Quicksand-SemiBold';
  font-size: 24px;
}

.instructors p {
  color: red; 
  font-size: 40px;
  font-family: 'Quicksand-SemiBold';
}

.instructor-card {
  background: #FFFFFF; 
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); 
  display: flex;
  align-items: center; 
  width:fit-content;
}

.instructor-img {
  width: 118px; /* Adjust the size as needed */
  height: 118px;
  border-radius: 25%;
  margin-right: 10px;
  object-fit: cover; 
}

.instructor-info {
  display: flex;
  flex-direction: column;
}

.instructor-info h3 {
  margin: 0;
  color: #412874;
  font-family: 'Quicksand-SemiBold';
  font-size: 20px;
}

.instructor-info p {
  margin: 5px 0;
  color: #412874;
  font-family: 'Quicksand';
  font-size: 16px;
}
</style>
