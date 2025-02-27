<template>
  <div>
    <el-button @click="()=>changeLanguage('en')">{{ $t("test") }}</el-button>
    <el-button @click="()=>changeLanguage('km')">{{ $t("test") }}</el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { setLanguage, getLanguage } from "./common/language";
import type { ILanguageCode } from "./interfaces/ILanguage";
export default defineComponent({
  name: "App",
  created() {
    const lang = getLanguage();
    setLanguage(lang);
  },
  methods: {
    changeLanguage(lang: ILanguageCode) {
      setLanguage(lang);
    },
  },
});
</script>
<style scoped></style>
