"use strict"

console.log(slides);

const { createApp } = Vue

createApp ({
    data() {
        return {

        }
    },

    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    }


    methods: {

    }
}).mount("#app")