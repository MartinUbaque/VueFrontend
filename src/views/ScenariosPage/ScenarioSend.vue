<template>
    <div v-show="showSendContainer" class="send-container">
        <div class="send-header">
            <button class="back-button" @click="$emit('backToControl')">&leftarrow;</button>
            <h1 class="send-title">Send</h1>
        </div>
        <div class="select-all-container">
            <input type="checkbox" id="selectAll" v-model="selectAll" @change="toggleSelectAll" class="custom-checkbox">
            <label for="selectAll" class="checkbox-label">Select All</label>
        </div>
        <div class="students-container">
            <div class="student" v-for="(student, index) in students" :key="index" @click="toggleStudentSelection(index)">
                <div class="profile-pic-container" :class="{ selected: student.selected }">
                    <img :src="student.picture" :alt="student.name" class="profile-pic">
                </div>
                <p class="student-name">{{ student.name }}</p>
            </div>
        </div>
        <button class="send-button" @click="sendScenarios">Send</button>
        <div class="student-count">
            <p>{{ selectedCount }} Students Selected</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Student {
  name: string;
  picture: string;
  selected: boolean;
}

export default defineComponent({
  name: 'ScenarioSendComponent',
  props: {
    students: Array as () => Student[],
    showSendContainer: Boolean
  },
  data() {
    return {
      selectAll: false,
    };
  },
  computed: {
    selectedCount(): number {
      return this.students.filter((student: Student) => student.selected).length;
    }
  },
  methods: {
    toggleSelectAll() {
      const currentState = this.selectAll;
      this.students.forEach((student: Student) => {
        student.selected = currentState;
      });
      this.$emit('updateStudents', this.students);
    },
    toggleStudentSelection(index: number) {
      this.students[index].selected = !this.students[index].selected;
      this.$emit('updateStudents', this.students);
    },
    sendScenarios() {
      console.log('Sending scenarios to:', this.students.filter((student: Student) => student.selected));
      this.$emit('scenariosSent');
    }
  }
});
</script>

<style scoped>
.send-container {
    max-width: 548px;
    background-color: #ffffff;
    border-radius: 10px;
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.send-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
}

.back-button {
    border: none;
    background: none;
    font-size: 24px;
    cursor: pointer;
}

.send-title {
    color: #412874;
    font-family: 'Quicksand-SemiBold';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.select-all-container {
    display: flex;
    margin: 20px 0;
    color: #959595;
    align-items: center;
}

.custom-checkbox {
    margin-right: 10px;
}

.checkbox-label {
    cursor: pointer;
}

.students-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.student {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-pic-container {
    border-radius: 50%;
    width: 90px;
    height: 90px;
    margin-bottom: 5px;
    position: relative;
}

.profile-pic-container.selected {
    border: 2px solid purple;
    padding: 2px;
}

.profile-pic {
    border-radius: 50%;
    width: 100%;
    height: 100%;
}

.student-name {
    color: #333333;
}

.send-button {
    background: -webkit-linear-gradient(#412974, #9D18FF);
    color: white;
    border: none;
    border-radius: 11px;
    padding: 10px 40px;
    margin-top: 20px;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Quicksand-Bold';
}

.student-count {
    margin-top: 20px;
    color: #959595;
}
</style>