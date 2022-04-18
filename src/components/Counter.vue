<template>
    <div class="grid items-center justify-center bg-white mt-4 rounded shadow">
        <div class ="bg-slate-100 flex justify-center items" >{{count}}</div>
        <div>
            <button class = "p-2 bg-slate-300 hover:bg-slate-500  border-2 border-red-600 " @click="increment">+</button>
            <button class = "p-2 bg-slate-300 hover:bg-slate-500 border-2 border-red-600 " @click="decrement()">-</button>
        </div>

        <div>
            
        </div>

    </div>
</template>

<script>
export default {
    name: "Counter",
    data() {
        return {
            count: 0
        }
    },

    methods:{
        increment(){
            this.count++
        },

        decrement(){
            if(this.count == 0){
                alert("End of the count cant go below 0")
                return
            }
            this.count--
        },
    }
}
</script>