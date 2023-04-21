"use strict"


const { createApp } = Vue

createApp ({
    data() {
        return {
            // randomly generated emails will be storewd in this array
            mailingList: []
        }
    },

    methods: {
        // this function allows to get a randomly generated email from an API
        callBooleanApi(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (res) => {
                    // Push a randomly generated email to
                    this.mailingList.push(res.data.response)
                })
            
            }
           
        }

    },

    created(){
       
    }

}).mount("#app")