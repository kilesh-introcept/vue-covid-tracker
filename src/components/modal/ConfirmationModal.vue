<template>
    <div class="w-screen h-screen bg-black absolute top-0 left-0 grid items-center justify-center bg-opacity-60">

        <!-- modal container -->
        <div class="bg-white rounded p-4 shadow w-30r space-y-4 ">
            <!-- header -->
            <div class="flex justify-between">
                <h1 class="text-2xl text-primary-dark font font-semibold">{{title}}</h1>
                 <button class="btn-icon btn-primary" @click="toggleTodo">X</button>
            </div>

            <!-- body -->
            <div class="border-t-2 border-b-2 space-y-4 py-2">
                Are you sure you want to delete this todo?
            </div>

            <!-- footer -->
            <div class="flex justify-end space-x-2">
                <button class="btn btn-primary" @click="toggleModal">Close</button>
                <button class="btn btn-danger" @click="deleteTodo(toDelete)">Confirm</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ConfirmationModal",
    props:["toggleModal", "deteleTodo", "toDelete"],
    data(){
        return{
            
        }
    },
}
</script>