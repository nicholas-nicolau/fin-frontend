import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/external/Login/LoginView.vue";
import SignupView from "../views/external/Signup/SignupView.vue";
import ForgotPasswordView from "../views/external/ForgotPassword/ForgotPasswordView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView
  },
  {
    path: "/forgot_password",
    name: "forgot_password",
    component: ForgotPasswordView
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/external/Error404/PageNotFoundView.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404"
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
