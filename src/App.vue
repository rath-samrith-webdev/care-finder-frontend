<template>
  <div class="common-layout">
    <el-container>
      <el-header v-show="isAuthenticated">Header</el-header>
      <el-container>
        <el-aside width="200px" v-show="isAuthenticated">
          <el-button>
            <router-link to="setting">Setting</router-link>
          </el-button>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { setLanguage, getLanguage } from "@/common/language";
import type { ILanguageCode } from "@/interfaces/ILanguage";
import { usersStore } from "@/stores";
import { isAuthenticated } from "@/api/auth/auth";
export default defineComponent({
  name: "App",
  data() {
    return {
      store: usersStore(),
    };
  },
  created() {
    const lang = getLanguage();
    setLanguage(lang);
  },
  async mounted() {
    await this.store.getAllUsers();
  },
  computed: {
    isAuthenticated() {
      return isAuthenticated();
    },
  },
  methods: {
    changeLanguage(lang: ILanguageCode) {
      setLanguage(lang);
    },
  },
});
</script>
<style scoped></style>
