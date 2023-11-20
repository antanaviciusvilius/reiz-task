<script setup lang="ts">
import HeaderComponent from '@/components/features/Header/HeaderComponent.vue';
import SidebarComponent from '@/components/features/Sidebar/SidebarComponent.vue';
</script>

<template>
  <main class="layout-container">
    <section class="sidebar">
      <SidebarComponent />
    </section>
    <section class="content">
      <div class="header">
        <HeaderComponent />
      </div>
      <div class="router-wrapper">
        <slot></slot>
      </div>
    </section>
  </main>
</template>

<style scoped>
.layout-container {
  display: grid;
  grid-template-columns: var(--sidebar-lg-width) 1fr;
  flex: 1;

  .sidebar {
    display: flex;
    width: 100%;
  }

  .content {
    display: grid;
    grid-template-rows: 152px 1fr;
  }

  .router-wrapper {
    padding-inline: 40px;
  }
}
</style>
