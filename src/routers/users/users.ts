export const userRoutes = [
  {
    path: "/users",
    name: "Users",
    component: () => import("@/components/users/Users.vue"),
  },
  {
    path: "/users/:id/update",
    name: "UsersUPdate",
    component: () => import("@/components/users/Users.vue"),
  },
  {
    path: "/users/:id/profile",
    name: "UsersProfile",
    component: () => import("@/components/users/Users.vue"),
  },
  {
    path: "/users/:id/view",
    name: "UsersView",
    component: () => import("@/components/users/Users.vue"),
  },
];
