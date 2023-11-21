<script setup lang="ts">
import InputWrapper from '@/components/shared/InputWrapper.vue';

export interface FilterControlProps {
  title: string;
  placeholder: string;
  value: string;
}

const props = defineProps<FilterControlProps>();
defineEmits(['update:value'])

</script>

<template>
  <div class="filter-control-container">
    <div class="filter-control-title">
      {{props.title}}
    </div>
    <InputWrapper 
      :placeholder="props.placeholder" 
      :styles="{'--placeholder-color': '#13131399'}" 
      :value="value"
      @update:value="(val) => $emit('update:value', val)"
    />
  </div>
</template>

<style scoped lang="scss">
.filter-control-container {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .filter-control-title {
    color: #000;
    font-weight: 400;
  }
}
</style>
