<template>
  <div>
    <el-button>{{ $t("test") }}</el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { setLanguage, getLanguage } from "./common/language";
export default defineComponent({
  name: "App",
  created() {
    const lang = getLanguage();
    setLanguage(lang);
  },
});
</script>
<style scoped></style>
