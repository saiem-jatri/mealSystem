import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import navbar from './components/navbar.vue'

const app = createApp(App)

app.use(router);
app.mount('#app');
app.component(navbar)
