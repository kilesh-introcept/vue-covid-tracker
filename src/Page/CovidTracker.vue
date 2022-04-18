<template>
  <div class="container mx-auto px-4 lg:px-20">
    <CovidTracker />
  </div>
</template>

<script>
import CovidTracker from "@/components/covid-tracker/index.vue";
export default {
  name: "CovidTrackerPage",
  components: {
    CovidTracker,
  },
};
</script>
