"use strict"


const { createApp } = Vue

createApp ({
    data() {
        return {
            mailingList: []
        }
    },

    created(){
        
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(response){
            console.log( response )
        })
    },


    methods: {

    }
}).mount("#app")