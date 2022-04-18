<template>
  <div>
    <div class="text-2xl text-primary-dark font-bold mb-2">
      <p>
        {{ title }}
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-4">
      <div
        v-for="(data, index) in datas"
        :key="index"
        class="p-4 rounded shadow-md bg-white border-b-4 grid items-center justify-items-center space-y-2"
        :class="data.color"
      >
        <header class="md:text-xl text-gray-900">{{ data.title }}</header>
        <p class="text-slate-800 text-xl md:text-3xl">{{ data.value }}</p>
        <p>+ {{ data.new }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CovidTrackerCards",
  props: {
    datas: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
