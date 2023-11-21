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

<style scoped lang="scss">
.layout-container {
  display: grid;
  grid-template-columns: max-content;
  flex: 1;
}

.sidebar {
  display: none;
  height: 100%;
  position: fixed;
  grid-column: 1/2;
}

.content {
  display: grid;
  grid-template-rows: 80px calc(100vh - 80px);
  grid-column: 2/2;
}

.router-wrapper {
  padding-inline: 10px;
  display: flex;
  padding-bottom: 33px;
  overflow: hidden;
}

@include md {
  .layout-container {
    grid-template-columns: var(--sidebar-md-width) 1fr;
  }

  .sidebar {
    display: flex;
  }

  .content {
    grid-template-rows: 152px calc(100vh - 152px);
  }

  .router-wrapper {
    padding-inline: 40px;
  }
}

@include lg {
  .layout-container {
    grid-template-columns: var(--sidebar-lg-width) 1fr;
  }
}
</style>
