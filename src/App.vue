<script setup>
import PublicNavbar from "@/components/partials/navbar.vue";
import Counter from "@/components/Counter.vue";
import AuthForm from "@/components/form/authForm.vue";
import CovidTrackerPage from "@/Page/CovidTracker.vue";
import TodoPage from "@/Page/todoPage.vue";
</script>

<template>
  <div class="grid gap-2 mb-6">
    <PublicNavbar />
    <router-view />
  </div>
</template>
