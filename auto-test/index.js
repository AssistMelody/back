/**
 * Paste or drop some JavaScript here and explore
 * the syntax tree created by chosen parser.
 * You can use all the cool new features from ES6
 * and even more. Enjoy!
 */
// import "./test.js";
// let tips = [
//   "Click on any AST node with a '+' to expand it",

//   "Hovering over a node highlights the \
//    corresponding location in the source code",

//   "Shift click on an AST node to expand the whole subtree",
// ];

// function printTips() {
//   tips.forEach((tip, i) => console.log(`Tip ${i}:` + tip));
// }

// export { printTips };

import Test from "./test.vue";
import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en", // 设置地区
});
new Vue({
  i18n,
  render: (h) => h(Test),
}).$mount("#app");
