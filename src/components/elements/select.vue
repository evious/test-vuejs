<template>
    <div
        v-click-out-side="customMethod"
        :class="{ 'custom-select': true, 'inver-select': open }"
        :tabindex="tabindex"
        @blur="open = false"
    >
        <div class="selected box" @click="open = !open">
            <input
                :disabled="inputDisable"
                autocomplete="nope"
                class="input is-medium"
                type="text"
                id="inputtext"
                :placeholder="placeholder"
                @input="open = true; search(selected)"
                v-model="selected"
            />
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div
                v-for="(option, key) of filterSearch()"
                :key="key"
                :class="{ 'not-select': !validateSearch(option) }"
                @click="clickCategorie(option)"
            >
                {{ option }}
            </div>
        </div>
    </div>
</template>

<script>
import clickOutSide from "@mahdikhashan/vue3-click-outside";
import { select } from "../../class/select";
export default {
    directives: {
        clickOutSide,
    },

    props: {
        options: {
            type: Array,
            required: true,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    setup(props) {       

        const elementSelect = select(props);

        return {
            ...elementSelect,
        };
    },
};
</script>


<style scoped>
.select:not(.is-multiple):not(.is-loading)::after {
    border-color: #a0aec0;
    right: 1.125em;
    z-index: 4;
}

.custom-select .selected.open {
    border: 1px solid white;
    border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
    position: absolute;
    content: "";
    top: 22px;
    right: 1em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: #fff transparent transparent transparent;
}

.custom-select .items {
    color: black;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    max-height: 300px;
    border-right: 1px solid white;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    position: absolute;
    background-color: white;
    left: 0;
    right: 0;
    z-index: 1;
}

.custom-select .items div {
    color: #1a202c;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
    font-family: "Lato";
    text-transform: capitalize;
    font-weight: 600;
}

.not-select div:hover {
    color: #a0aec0 !important;
    font-weight: normal !important;
}

.custom-select .items div:hover {
    background-color: white;
    color: #4299e1;
}
</style>
