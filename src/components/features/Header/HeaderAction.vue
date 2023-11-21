<script setup lang="ts">
import type { Component, StyleValue } from 'vue';

export interface HeaderActionProps {
  icon?: Component;
  showIndicator?: boolean;
  indicatorColor?: string;
  styles?: StyleValue;
}

const props = defineProps<HeaderActionProps>();
</script>

<template>
  <div class="header-action-container" :style="props.styles">
    <div class="bubble-indicator" v-if="props.showIndicator" :style="{backgroundColor: props.indicatorColor || '#FFBC0F'}"></div>
    <div class="icon" v-if="props.icon">
      <component :is="props.icon" />
    </div>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.header-action-container {
  display: flex;
  background-color: white;
  height: 52px;
  width: 52px;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 1px 1px 2px 0 var(--grey-color);
  }
}

.bubble-indicator {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  right: -4px;
  top: -4px;
}

.icon {
  display: flex;
  color: var(--grey-color);
}
</style>
