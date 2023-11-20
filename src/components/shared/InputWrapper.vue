<script setup lang="ts">
import type { StyleValue } from 'vue';
export interface InputWrapperProps {
  placeholder?: string;
  styles?: StyleValue;
}

const props = defineProps<InputWrapperProps>();
</script>

<template>
  <div class="input-container">
    <slot></slot>
    <input :placeholder="props.placeholder" class="input" :style="props.styles"/>
  </div>
</template>

<style scoped lang="scss">
  .input-container {
    display: flex;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    background: var(--container-background-color);
    align-items: center;
    padding: 13px 20px;
    gap: 16px;
  }

  .input, input::placeholder {
    color: var(--placeholder-color, #ADA7A7);
  }

  .input {
    border: none;
    outline: none;
    flex: 1;

    &, &::placeholder {
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
    }
  }
</style>
