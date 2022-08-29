import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {},
  routes: [
    { path: '/', component: '@/pages/home/index' },
    { path: '/home', component: '@/pages/home/index' },
    { path: '/about', component: '@/pages/about/index' },
    { path: '/other', component: '@/pages/other/index' },
    { path: '/test', component: '@/pages/test/index' },
    { path: '/other/cat', component: '@/pages/cat/index' },
    { path: '/other/vue', component: '@/pages/vue/index' },
  ],
  fastRefresh: {},
  title: '西南以北',
  // 修改在根目录下新建一个public，把logo放在img里
  links: [{ rel: 'icon', href: '/img/logo.png' }],
  // outputPath:'./build',
  publicPath: './',
  history: {
    type: 'hash',
  },
  dva: {},
  antd: {},
});
