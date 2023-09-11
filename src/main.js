import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// AppLoader
import AppLoader from './components/generics/AppLoader.vue';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const app = createApp(App);
app.component('AppLoader', AppLoader);
app.mount('#app');
