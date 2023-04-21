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

            mailingList: []

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (res) => {
                this.mailingList.push(res.data.response)
            })
        }

    }
}).mount("#app")