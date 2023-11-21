<script setup lang="ts">
import AppLayout from './components/AppLayout.vue';
</script>

<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>

<style scoped>
  .wrapper {
    background-color: var(--sidebar-background-color);
  }
</style>
