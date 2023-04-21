"use strict"


const { createApp } = Vue

createApp ({
    data() {
        return {
            mailingList: []
        }
    },

    created(){
        
       
    },


    methods: {

        callBooleanApi(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(response){
                // console.log( response );
                this.mailingList.push(response.data.response)
            })
        }

    }
}).mount("#app")