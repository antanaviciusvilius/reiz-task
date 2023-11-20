<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    background-color: var(--sidebar-background-color);
  }
</style>
