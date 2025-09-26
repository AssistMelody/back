<template>
  <div>
    <h1 ref="test"></h1>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { GSDevTools } from "gsap/GSDevTools";

export default {
  data() {
    return {
      all: "测试2",
    };
  },
  created() {
    console.log(this);
    gsap.registerPlugin(TextPlugin, GSDevTools);
  },
  mounted() {
    const tl = gsap.timeline();

    tl.to(this.$refs.test, {
      duration: 2,
      text: this.$t("world"),
      ease: "none",
      id: "test",
    });
    GSDevTools.create({
      animation: "test",
    });
  },
};
</script>
<i18n src="./i18n2.json"></i18n>
