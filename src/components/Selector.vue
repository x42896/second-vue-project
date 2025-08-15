<template>
    <div>
        <ul>
            <li>Bitcoin</li>
            <li>ETH</li>
            <li>USDT</li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    ul {
        list-style: none;
        width: 200px;
        padding: 0;
        border-radius: 3px;
        border: 3px solid black;
    }

    li {
        display: block;
        background-color: rgba(10, 8, 8, 0.894);
        color: white;
        padding: 20px 0;
    }

    li:hover, li.active {
        background-color: rgb(31, 14, 34);
        cursor: pointer;
    }
</style>