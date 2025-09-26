<template>
  <div>
    <h1>{{ $t("hello") }}</h1>
    <Test />
  </div>
</template>
<script>
import Test from "./test2.vue";
export default {
  components: {
    Test,
  },
  data() {
    return {
      all: "测试",
    };
  },
  created() {
    console.log(Test.__date);
  },
};
</script>
<i18n src="./i18n.json"></i18n>
