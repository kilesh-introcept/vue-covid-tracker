<template>
    <div class="grid bg-white rounded shadow-lg overflow-hidden w-30r gap-2 ">
        <div class="p-3">
            <div class="text-center text-2xl text-primary-dark mb-2 font-bold">Todo List</div>
            <div class="flex justify-between items-center gap-2 relative">
                <input
                    @keyup="error=false" 
                    @keyup.enter='addTodo' 
                    class="p-2 pr-12 outline-none w-full bg-gray-100 rounded" 
                    type="text" placeholder="Add Todo" v-model="todo"
                >
                <button @click="addTodo" class="btn-icon btn-success absolute right-2 ">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                </button>
            </div>
            <p v-if="error" class="text-red-600 font-semibold mt-1">Input field cannot be empty.</p>
        </div>
        <div class="max-h-96 overflow-y-auto scrollbar py-2 border-t border-b mb-12">
            <TodoList :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" :editTodo="editTodo" :viewTodo="viewTodo"/>
        </div>

        <div v-if="isModalVisible">
            <Modal title="Todo details" :toggleTodo="toggleTodo" :data="todoData" :addTodo="addTodo" :error="error" :editTodo="editTodo"/>
        </div>
    </div>
</template>

<script>
    import TodoList from "./todolist.vue"
    import {uid} from "../utils/uid"
    import Modal from "../modal/modal.vue"

    export default {
        name:'Todo',
        components: {
            TodoList,
            Modal
        },
        data: function(){
            return {
                todo:"",
                editedTodo:null,
                todos: [
                    {
                        id: uid(),
                        title: "Learn Vue",
                        completed: false,
                        createdAt:"Fri Apr 08 2022 16:51:22 GMT+0545 (Nepal Time)",
                        editedAt:null
                    },
                    {
                        id: uid(),
                        title: "Learn Vuex",
                        completed: false,
                        createdAt:"Fri Apr 08 2022 16:51:22 GMT+0545 (Nepal Time)",
                        editedAt:null



                    },
                    {
                        id: uid(),
                        title: "Learn Vue Router",
                        completed: false,
                        createdAt:"Fri Apr 08 2022 16:51:22 GMT+0545 (Nepal Time)",
                        editedAt:null
                    }
                ],
                todoData:null,
                error: false,
                isModalVisible: false,
            }
        },
        methods: {
            addTodo(){
                if(this.todo.length === 0) {
                    this.error = true
                    setTimeout(() => {
                        this.error = false
                    }, 6000)
                    return
                }
                if(this.editedTodo===null){
                    this.todos.push({
                        id: uid(),
                        title: this.todo,
                        completed: false,
                        createdAt: new Date(),
                        editedAt: null
                    })
                this.todo = ""
                }else{
                    const editedTodo=this.todos.find(todo => todo.id === this.editedTodo)
                    editedTodo.title = this.todo
                    editedTodo.editedAt= new Date()
                    editedTodo.completed = false
                    this.todo=""
                    this.editedTodo = null
                }
            },
            toggleTodo(){
                this.isModalVisible = !this.isModalVisible
            },
            viewTodo(todo){
                this.toggleTodo()
                this.todoData=todo
            },

            deleteTodo(id){
                // this.todos = this.todos.filter(todo => todo.id !== id)
                this.todos.splice(this.todos.indexOf(id), 1)

            },
            updateTodo(id){
                this.todos = this.todos.map(todo => {
                    if(todo.id === id){
                        todo.completed = !todo.completed
                    }
                    return todo
                })
                
            },
            editTodo(id){
                console.log(id);
                this.todo = this.todos.find(todo => todo.id === id).title
                this.editedTodo = id
            }
        }
    }

</script>