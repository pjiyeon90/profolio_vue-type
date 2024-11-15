import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './styles/reset.scss';

// Firebase 설정 추가
import './lib/firebase'; // firebase 설정 파일 임포트


createApp(App).use(store).use(router).mount('#app')

