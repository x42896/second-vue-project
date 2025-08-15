<!-- components/Input.vue -->
<template>
    <div>
        <input type="number" @input="changeAmount($event.target.value)" placeholder="Введите число">
    </div>
</template>

<script>
    export default {
        props: {
            changeAmount: {
                type: Function,
                required: true
            }
        }
    }
</script>

<style lang="css" scoped>
    input {
        width: 500px;
        font-size: 1.2rem;
        border-radius: 3px;
        border: 0;
        outline: none;
        padding: 10px 15px;
        color: darkslategray;
    }
</style>