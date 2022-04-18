<template>
    <div>        
        <label class = "text-slate-400 text-sm">{{label}}</label>
        <!-- <input :placeholder="label" :type="type || 'text'" v-model="email" /> -->
        <input :type="type || 'text'" :placeholder="label" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)"/>
    </div>

</template>

<script>
export default {
    name:"CustomInput",
    props: {
        label: {
            type: String,
            required: true
        },
        modelValue: {
            type: [String, Number],
        },

        type: {
            type: String,
            required: true
        }
    },
}
</script>