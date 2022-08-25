import { ref, onMounted } from "vue";
import { fruits } from "../class/request/fruits";

export const loadFruit = () => {

    const fruitAll = ref(null);

    const loadFruits = async () => {
        fruitAll.value = await fruits().get();
    };

    onMounted(async () => {
        await loadFruits();
    });

    return {
        fruitAll,
    };


}