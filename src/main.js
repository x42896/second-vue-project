// Основной файл где мы подключаем createApp из фреймворка vue
import { createApp } from 'vue'


//import './style.css'

// Какой основной компонент подключаем
import App from './App.vue'


// Обращене к основному HTML файлу с id app куда мы будем помещать весь код
createApp(App).mount('#app')
