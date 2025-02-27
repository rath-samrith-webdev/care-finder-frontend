import { defineStore } from "pinia";
import { getUsers } from "../../api/users/users";
export const usersStore = defineStore("users", {
  state: () => ({
    user: {},
    userList: [] as any[],
  }),
  getters: {
    userLists(state) {
      return state.userList;
    },
  },
  actions: {
    async getAllUsers() {
      const users = await getUsers();
      this.userList = [...users];
    },
  },
});
