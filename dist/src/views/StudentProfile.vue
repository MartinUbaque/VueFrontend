<template>
<div class="scenario-page">
    <NavBar />
    <div class="top-section">
        <div class="profile">
            <img src="../assets/images/person.jpg" alt="Harry" class="profile-image">
            <div class="profile-info">
            <h1>Harry</h1>
            <p>Spanish B2</p>
            </div>
        </div>
    </div>
    <div class="submitted-section">
        <h2 class="title">Submitted Scenarios</h2>
        <button class="edit-button">Edit</button>
    </div>
    <ScenariosList :scenarios="scenarios"/>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ScenariosList from '@/components/ScenariosList.vue'; 

export default {
    components: {
        NavBar,
        ScenariosList
    },
    data() {
        return {
        scenarios: [
            { title: 'Restaurant', image: '/src/assets/images/scenario.jpg', duration: '30 min' },
            { title: 'Vocab #1', image: '/src/assets/images/scenario1.webp', duration: '15 min' },
            { title: 'Restaurant', image: '/src/assets/images/scenario.jpg', duration: '30 min' },
            { title: 'Vocab #1', image: '/src/assets/images/scenario1.webp', duration: '15 min' },
            { title: 'Restaurant', image: '/src/assets/images/scenario.jpg', duration: '30 min' },
            { title: 'Vocab #1', image: '/src/assets/images/scenario1.webp', duration: '15 min' },
        ]
        };
    }
}
</script>

<style scoped>
.top-section {
display: flex;
align-items: center;
padding: 2rem 5rem;
background-color: #FFF;
border-bottom: 1px solid rgba(65, 40, 116, 0.50);
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.profile {
display: flex;
align-items: center;
}

.profile-image {
width: 150px; 
height: 150px;
border-radius: 30%;
margin-right: 20px;
box-shadow: 0 4px 3px rgba(0,0,0,0.3);
}

.profile-info h1 {
font-family: 'Quicksand-SemiBold';
margin: 0;
font-size: 26px;
color: #412874;
}

.profile-info p {
font-family: 'Quicksand-Light';
margin-top: 0.5rem;
font-size: 22px;
color: #412874;
}

.submitted-section {
    display: flex;
    padding: 1rem 5rem;
}

.title{
    padding-left: 5rem;
    color: #412874;
    font-family: 'Quicksand-SemiBold';
}

.edit-button {
    margin: auto 1.5rem;
    padding: 5px 20px;
    border-radius: 5px; 
    border: 0.50px rgba(65, 40, 116, 0.50) solid;
    background: #F7F7F7;
    color: #412874;
    cursor: pointer;
    font-size: 18px;
}
</style>
