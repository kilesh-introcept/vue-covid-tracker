<template>
    <div class="w-screen h-screen bg-black absolute top-0 left-0 grid items-center justify-center bg-opacity-60">

        <!-- modal container -->
        <div class="bg-white rounded p-4 shadow w-30r space-y-4 ">
            <!-- header -->
            <div class="flex justify-between">
                <h1 class="text-2xl text-primary-dark font font-semibold">{{title}}</h1>
                 <button class="btn-icon btn-primary" @click="toggleTodo"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
            </div>

            <!-- body -->
            <div class="border-t-2 border-b-2 space-y-4 py-2">
                <div class="flex justify-between">
                    <span>Todo:</span>
                    <button class="btn btn-primary text-xs px-3 py-2" @click="editBtn(data.id)" >Edit</button>

                </div>
                    <div class="flex justify-between items-center gap-2 relative">
                        <input 
                            ref="todoInput"
                           
                            @keyup="error=false" 
                            @keyup.enter='addTodo' 
                            class="p-2 pr-12 outline-none w-full bg-gray-100 rounded" 
                            type="text" 
                            placeholder="Add Todo"
                            v-model.lazy="data.title"
                            :disabled="disabled"
                        >
                        <button 
                            @click="addTodo" 
                            :class="[{'hidden':disabled},'btn-icon btn-success absolute right-2']" 
                            disabled="disabled"
                        >
                            <font-awesome-icon icon="fa-solid fa-edit" />
                        </button>
                    </div>
                    <p v-if="error" class="text-red-600 font-semibold mt-1">Input field cannot be empty.</p>
                <p>Status: {{data.completed ? 'Completed' : 'Pending'}}</p>
                <p>Created at: {{ new Date(data.createdAt).toLocaleString() }}</p>
                <p v-if="data.editedAt !== null">Edited at: {{ new Date(data.editedAt).toLocaleString() }}</p>
            </div>

            <!-- footer -->
            <div class="flex justify-end">
                <button class="btn btn-primary" @click="toggleTodo">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Modal",
    props:['todo','toggleTodo', 'data', 'title', 'error', 'addTodo', 'editTodo', 'editedTodo'],
    data(){
        return{
            disabled: true,
        }
    },
    methods:{
        editBtn(id){
            this.$refs.todoInput.focus();
            this.disabled = false
            this.editTodo(id)
        }
    }
}
</script>