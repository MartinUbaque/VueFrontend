import { createRouter, createWebHistory } from 'vue-router'
import SignUp from "../views/SignUp.vue"
import LogIn from "../views/LogIn.vue"
import HomePage from "../views/HomePage.vue"
import StudentsPage from '../views/StudentsPage.vue'
import StudentProfile from '../views/StudentProfile.vue'
import ScenariosPage from '../views/ScenariosPage/ScenariosPage.vue'
import SettingsPage from '../views/SettingsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/signup" },
    { path: "/signup", name: "signup", component: SignUp },
    { path: "/login", name: "login", component: LogIn },
    { path: '/home', name: "home", component: HomePage },
    { path: '/students', name:"students", component: StudentsPage },
    { path: '/studentProfile', name:"student", component: StudentProfile },
    { path: '/scenarios', name: "scenarios", component: ScenariosPage },
    { path: '/settings', name: "settings", component: SettingsPage }
  ]
})

export default router
