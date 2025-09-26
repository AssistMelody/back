import { visualizer } from "rollup-plugin-visualizer";
import inspect from "vite-plugin-inspect";
import { defineConfig } from "vite";
import { MyPlugins } from "./plugins/test";
import vue from "@vitejs/plugin-vue2";
export default defineConfig({
  plugins: [vue(), MyPlugins(), inspect()],
  build: {
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      // treeshake: {
      //   moduleSideEffects: 'no-external', // 强制处理外部依赖的副作用
      //   preset: 'recommended', // 使用推荐的 Tree-shaking 策略
      //   tryCatchDeoptimization: false, // 关闭 try-catch 的降级处理
      // },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  server: {
    port: 5137,
  },
});
