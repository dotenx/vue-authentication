import { createWebHistory, createRouter } from "vue-router";
import SignUp from "@/components/SignUp.vue";
import SignIn from "@/components/SignIn.vue";

const routes = [
  {
    path: "/register",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "SignIn",
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;