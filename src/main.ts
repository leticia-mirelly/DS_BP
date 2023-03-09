import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import plugins from '../index'

createApp(App).use(plugins).mount('#app')
