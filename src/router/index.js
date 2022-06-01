import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import WelcomeView from "@/views/WelcomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      alias: "/login",
      name: "login",
      component: LoginView,
      meta: {
        title: "Login | Instabug",
      },
    },
    {
      path: "/welcome",
      name: "welcome",
      component: WelcomeView,
      meta: {
        title: "Welcome | Instabug",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: NotFoundView,
      meta: {
        title: "Not Found",
      },
    },
  ],
});

router.beforeEach((to) => {
  document.title = to.meta.title;
});

export default router;
