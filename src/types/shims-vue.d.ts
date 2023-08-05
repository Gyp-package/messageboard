// 解决 ts 对 .vue 文件的报错问题
declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  // 用于 TypeScript 识别.vue 文件，Ts默认并不支持导入 vue 文件，这个文件告诉ts 导入.vue 文件都按VueConstructor<Vue>处理。