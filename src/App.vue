<script>
// Импортируем Axios для работы с JSON по API
import axios from 'axios'

  export default {
    data() {
      return {
        city: '',
        error: '',
        info: null
      }
    },
    computed: {
      cityName() {
        return `"${this.city}"`
      },
      showTemp() {
        return `Температура: "${this.info.main.temp}"`
      },
      showFeelLike() {
        return `Ощущается как: "${this.info.main.feels_like}"`
      },
      showMinTemp() {
        return `Минимальная температура: "${this.info.main.temp_min}"`
      },
      showMaxTemp() {
        return `Максимальная температура: "${this.info.main.temp_max}"`
      },
    },
    methods: {
      getWeather() {
        // Если пользователь ввёл меньше двух символов то выводим ошибку в div и выходим из всего метода
        if (this.city.trim().length < 2) {
          this.error = 'Нужно название более одного символа'
          return false
        }

        // Очишаем ошибку
        this.error = ''

        // Получение JSON по API по ссылке. Если успешно соединились то .then (тогда) сохраняем результат в this.info
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=a0b628fcff2b5f2546f862485b9ba834`).then(res => (this.info = res.data))
        // res => (this.info = res)) – это аналог записи полной функции и улучшам тут ещё что обращаемся к объекту data в json
        /* .then(function(res) { 
          this.info = res;
        }) */
      }
      
    }
  }
</script>






<template>
  <div class="wrapper">
    <h1>Погодное приложение</h1>
    <!-- Это запись без условия -->
    <!-- <p>Узнать погоду в {{ city }}</p> -->
    
    <!-- Это с тернарным (коротким) уловием и доп ковычками к тексту, модно и через (конкатенацию) написать `"${city}"` -->
    <p>Узнать погоду в {{ city == '' ? 'вашем городе' : '"' + city + '"' }}</p>
    
    <!-- $event.target.value за счёт этой команды мы кладёт в переменную значение которое вводит пользователь. И важно прописать this чтобы установить в переменную значение -->
    <!-- this означает что мы прямо к этому компоненту обращаемся и именно с этим компонентом и будем работать и именно с переменными в этом компоненте -->
    <!-- <input type="text" v-on:input="this.city = $event.target.value" placeholder="Введите город"> -->
    <!-- Можно упросить строку выше и записать -->
    <!-- <input type="text" @input="this.city = $event.target.value" placeholder="Введите город"> -->
    <!-- Или ешё проще -->
    <input type="text" v-model="city" placeholder="Введите город">

    <!-- <button v-show="city != ''">Получить погоду</button> -->
    <button v-if="city != ''" @click="getWeather()">Получить погоду</button>
    <button disabled v-else>Ведите название города</button>
    <p class="error">{{ error }}</p>

    <!-- Показываем JSON объект при нажатии на кнопку -->
    <!-- Важно написать v-if а не v-show (проверят только на null) -->
    <!-- Чуть ниже у себя в учебнике записал почему так и что лучше сделать проверку через .catch() -->
    <div v-if="info != null">
      <p>{{ showTemp }}</p>
      <p>{{ showFeelLike }}</p>
      <p>{{ showMinTemp }}</p>
      <p>{{ showMaxTemp }}</p>
    </div>
    
  </div>
</template>






<style scoped>
  .wrapper {
    width: 900px;
    height: 500px;
    padding: 20px;
    border-radius: 50px;
    background-color: rgb(30, 10, 48);
    text-align: center;
    color: white;
  }

  .wrapper h1 {
    margin-top: 50px;
  }

  .wrapper p {
    margin-top: 20px;
  }

  .wrapper input {
    margin-top: 30px;
    background: transparent;
    border: 0;
    border-bottom: 2px solid black;
    color: white;
    font-size: 14px;
    padding: 5px 10px;
    outline: none;
  }

  .wrapper input:focus {
    border-bottom-color: darkmagenta;
  }

  .wrapper button {
    background-color: rgb(255, 157, 0);
    color: white;
    border-radius: 10px;
    border: 2px solid rgb(217, 83, 10);
    padding: 10px 15px;
    margin-right: 20px;
    cursor: pointer;
    transition: 0.5s ease; 
  }

  .wrapper button:disabled {
    cursor: not-allowed;
  }

  .wrapper button:hover {
    transform: scale(1.1) translateY(-5px);
  }

  .error {
    color: tomato;
  }
</style>