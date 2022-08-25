<template>
    <selectFruit
        v-if="fruitAll"
        :options="fruitAll"
        class="select"        
    />
</template>

<script >
import selectFruit from "./elements/select.vue";
import { loadFruit } from "../class/loadFruits";

export default {
    components: { selectFruit },
    setup() {   
        return { ...loadFruit() };
    },
};
</script>

<style>
*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 0;
}

.items {
    max-height: 300px;
    overflow: auto;
}

#app {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    line-height: 1.4;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1 {
    text-align: center;
}
</style>
