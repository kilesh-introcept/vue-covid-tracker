<template>
    <div class="grid items-center justify-center mt-4">
        <Todo />
    </div>
</template>

<script>
import Todo from "../components/Todo/index.vue"
export default {
    name: 'TodoPage',
    components: {
        Todo
    }
}
</script>