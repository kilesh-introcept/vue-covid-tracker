<template>
<div>
    <table class="table-fixed  w-full">
        <tbody>
            <tr>

                <td class="p-4 min-h-10 list-none text-center" v-if="todos.length === 0">Nothing to do</td>
            </tr>
            <tr  v-for="(todo,index,) in todos.slice().reverse()" :key="index" class="py-2 px-4 cursor-pointer flex justify-between items-center">
                <td class="w-9/12 break-words">
                    <div @click="viewTodo(todo)" :class="{'line-through':todo.completed}">{{todo.title}}</div>    
                </td>
                <td>
                     <div class="space-x-2 flex flex-nowrap">
                    <button v-if="!todo.completed" @click="updateTodo(todo.id)" class="btn-icon btn-primary"><font-awesome-icon icon="fa-solid fa-check" /></button>
                    <button v-else @click="updateTodo(todo.id)" class="btn-icon btn-primary"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
                    <button @click="editTodo(todo.id)" class="btn-icon"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></button>
                    <button @click="deleteTodo(todo.id)" class="btn-icon btn-danger"><font-awesome-icon icon="fa-solid fa-trash" /></button>
                </div>  
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>

export default {
    name: 'TodoList',
    props: ['todos','viewTodo','deleteTodo','updateTodo', 'editTodo'],
 
}
</script>