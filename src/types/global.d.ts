import Vue from 'vue'

declare module NodeJS  {
    interface Global {
        Vue: Vue
    }
}