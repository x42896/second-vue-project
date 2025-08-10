<!-- App.vue – основной компонент страницы -->
<!-- Основной код страницы -->
<template>
  <!-- @input="" много всего нужно записать ещё лучше использовать v-model="" -->
  <!-- v-model="" – встроенный атрибут в Vue, не обработчик события, за счёт него можем получать данные и сразу устанавливать в переменную. То есть данные из input сразу добавятся в userName. Если работать с checkbox или radio, v-model имеет свою специфику -->
  <input type="text" v-model="userName" placeholder="Имя">
  <input type="email" v-model="userEmail" placeholder="Email">
  <input type="password" v-model="userPass" placeholder="Пароль">
  <p class="block-name">{{ error }}</p>
  <!-- При нажатии на кнопку получаем все данные из переменных и добавляем новый элемент в массив -->
  <button @click="sendData()">Отправить</button>


  <!-- Тут для теста выводим сразу значения переменных которые пишем в input -->
  <p>{{ userName }}</p>
  <p>{{ userEmail }}</p>
  <p>{{ userPass }}</p>

  <!-- Вывод новых данных из массива -->
  <p>{{ users }}</p>



  <!-- Доп атрибут if, else-if, else если в массиве ничего нет то покажем этот блок -->
  <div v-if="users.length == 0" class="user">
    У нас нету пользователей
  </div>
  <!-- Если только 1 пользователь то этот блок покажем -->
  <div v-else-if="users.length == 1" class="user">
    У нас только 1 пользователь
  </div>
  <!-- Иначе этот блок покажем -->
  <div v-else class="user">
    У нас больше одного пользователя
  </div>
  


  <!-- Сюда подставится всё что есть в User.vue в разделе template-->
  <User v-for="(el, index) in users" :key="index" />
</template>



<!-- Подключаются все скрипты -->
<script>
// Импорт данныех из файла User.vue (чтобы подставлять в template)
import User from './components/User.vue'
  // Объект который экспортируем по умолчанию, в котором хранятся различные действия
  export default {
    // Указываем с какими компоненатми из Users.vue будем работать
    components: { User },
    // Стандартная запись для переменных которые добавляются в основной html
    data() {
      return {
        users: [],
        error: '',
        userName: '',
        userEmail: '',
        userPass: ''
      }
    },
    // Функции которые можно будет вызывать чтобы не писать Vue код прямо в HTML
    methods: {
      // Проверка ввёл ли пользователь все данные
      sendData() {
        // Улучшенная записать, так везде можно писать и добавить trim() а ниже более простая
        if (!this.userName.trim()) {
          this.error = 'Имя не введено'
          return
        // email лучше валидировать с помощью RegExp (не знаю пока что это)
        } else if (this.userEmail == '') {
          this.error = 'Email не введен'
          return
        } else if (this.userPass == '') {
          this.error = 'Пароль не введен'
          return
        }

        // Пустое значение если ошибки исправлены
        this.error = ''

        // Обращене к data() в ней к users и добавление нового объекта в users где ключ будет name, а значение из переменных data() подставится
        // Чтобы обратиться к верному массиву нужно прописать this и уже потом users.push({
        this.users.push({
          name: this.userName,
          email: this.userEmail,
          pass: this.userPass
        })

      
        // В конце лучше очищаться все поля input для лучшего UX например this.userName = '' и т.д
      }
    }
  }
</script>



<!-- Весь CSS для этого компонента -->
<style scoped>
  .user {
    width: 500px;
    margin-top: 20px;
    border: 1px solid silver;
    background-color: lightgray;
    color: black;
    padding: 20px;
    border-radius: 5px;
  }
</style>
