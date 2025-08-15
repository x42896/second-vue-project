/* main.js */
// Основной файл где мы подключаем createApp из фреймворка vue
import { createApp } from 'vue'

// Какой основной компонент подключаем
import App from './App.vue'

// Подключение стилей к крипто странице
import './assets/style.css'


// Обращене к основному HTML файлу с id app куда мы будем помещать весь код
createApp(App).mount('#app')
