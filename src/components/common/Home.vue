<template>
    <div>
      <el-button @click="() => changeLanguage('en')">{{ $t("test") }}</el-button>
      <el-button @click="() => changeLanguage('km')">{{ $t("test") }}</el-button>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from "vue";
  import { setLanguage, getLanguage } from "@/common/language";
  import type { ILanguageCode } from "@/interfaces/ILanguage";
  import { usersStore } from "@/stores";
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
    methods: {
      changeLanguage(lang: ILanguageCode) {
        setLanguage(lang);
      },
    },
  });
  </script>
  <style scoped></style>
  