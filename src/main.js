import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './assets/css/common.css';
import './assets/font/iconfont.css';
import App from './App.vue'

createApp(App).use(Antd).use(router).mount("#app");
