<template>
    <input :type="text ">
</template>

<script>
export default {
    name: 'customInput',
    props: {
        value: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },S
    
}
</script>