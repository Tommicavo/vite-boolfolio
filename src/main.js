import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Router
import { router } from './router/index.js';

// AppLoader
import AppLoader from './components/generics/AppLoader.vue';
import AppAlert from './components/generics/AppAlert.vue';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const app = createApp(App);
app.component('AppLoader', AppLoader);
app.component('AppAlert', AppAlert);
app.use(router);
app.mount('#app');
