<!-- App.vue -->
<template>
  <div>
    <h1>CRYPTO</h1>
    <Input :changeAmount="changeAmount"/>
    <div class="selectors">
      <!-- Чтобы в два одинаковых компонента передвать разные значения создаём под. атрибут :setCrypto и в них будет передавать разные методыЮ -->
      <Selector :setCrypto="cryptoFirst"/>
      <Selector :setCrypto="cryptoSecont"/>
    </div>
  </div>
</template>

<script>
  import Input from './components/Input.vue';
  import Selector from './components/Selector.vue';


  export default {
    // Добавлям компонент
    components: { Input, Selector },
    data() {
      return {
        ammount: 0,
        cryptoFirst: '',
        cryptoSecont: ''
      }
    },
    methods: {
      changeAmount(val) {
        this.ammount = val
      },
      setCryptoFirst(val) {
        this.cryptoFirst = val
      },
      setCryptoSecond(val) {
        this.cryptoSecont = val
      }
    }

  }
</script>

<style lang="css" scoped>
  .selectors {
    display: flex;
    justify-content: space-around;
    width: 700px;
    margin: 0 auto;
    margin-top: 50px;
  }
</style>