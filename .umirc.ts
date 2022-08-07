import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {},
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  title: '西南以北',
  // 修改在根目录下新建一个public，把logo放在img里
  links: [{ rel: 'icon', href: '/img/logo.png' }],
  outputPath:'./build'
});
