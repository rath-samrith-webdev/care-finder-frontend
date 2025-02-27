import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { userRoutes } from "./users/users";
import { settingRoutes } from "./setting/setting";
import { isAuthenticated } from "@/api/auth/auth";
const routes: Array<RouteRecordRaw> = [...settingRoutes, ...userRoutes];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes,
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0, behavior: "smooth" };
  },
});
router.beforeEach((to, _, next) => {
  // Add this line to your router file
  if (!isAuthenticated() && to.path !== "/") {
    next({ path: "/" });
    return;
  }
  next();
});
export default router;
