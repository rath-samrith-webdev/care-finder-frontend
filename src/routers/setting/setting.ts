import { type RouteRecordRaw } from "vue-router";
export const settingRoutes: RouteRecordRaw[] = [
  {
    path: "/setting",
    name: "Setting",
    component: () => import("@/components/settings/Setting.vue"),
  },
  {
    path: "/setting/:edit",
    name: "SettingEdit",
    component: () => import("@/components/settings/Setting.vue"),
  },
];
