<script setup lang="ts">
import type { Component } from 'vue';

export interface SidebarNavigationItemProps {
  icon: Component
  title: string
  isActive: boolean
}

const props = defineProps<SidebarNavigationItemProps>();
</script>

<template>
  <li class="sidebar-nav-item" v-bind:class="{ active: props.isActive }">
    <div class="sidebar-nav-item-icon">
      <component :is="props.icon" />
    </div>
    <div class="sidebar-nav-item-label">
      {{ props.title }}
    </div>
  </li>
</template>

<style scoped lang="scss">
.sidebar-nav-item {
  display: flex;
  gap: 15px;
  align-items: center;
  padding-left: 30px;
  height: 39px;
  color: var(--link-text-color);
  border-left: 3px solid transparent;
  cursor: pointer;

  &:hover,
  &.active:hover {
    background-color: var(--link-active-text-color);
    color: var(--background-color);
  }

  &.active {
    color: var(--link-active-text-color);
    border-color: var(--link-active-text-color);
  }
}

.sidebar-nav-item-icon {
  display: flex;
}

.sidebar-nav-item-label {
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  display: none;
}

@include lg {
  .sidebar-nav-item {
    padding-left: 41px;
  }
  .sidebar-nav-item-label {
    display: flex;
  }
}
</style>
