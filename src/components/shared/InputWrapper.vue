<script setup lang="ts">
import type { StyleValue } from 'vue';
export interface InputWrapperProps {
  placeholder?: string;
  styles?: StyleValue;
  value?: string;
}

defineProps<InputWrapperProps>()
defineEmits(['update:value'])
</script>

<template>
  <div class="input-container">
    <slot></slot>
    <input
      class="input"
      name="input"
      :style="styles"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped lang="scss">
.input-container {
  display: flex;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: var(--container-background-color);
  align-items: center;
  padding: 13px 20px;
  gap: 16px;
}

.input,
input::placeholder {
  color: var(--placeholder-color, var(--grey-color));
}

.input {
  border: none;
  outline: none;
  flex: 1;
  width: 100%;

  &,
  &::placeholder {
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
  }
}
</style>
