<script setup lang="ts">
import SidebarBrandLogo from './SidebarBrandLogo.vue';
import SidebarNavigation from './SidebarNavigation.vue';

</script>

<template>
  <div class="sidebar-container">
    <SidebarBrandLogo />
    <SidebarNavigation />
  </div>
</template>

<style scoped>
  .sidebar-container {
    background-color: var(--container-background-color);
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>
