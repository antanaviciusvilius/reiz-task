<script setup lang="ts">
import FilterControl from '../../shared/FilterControl.vue';

export interface ProductsFilterProps {
  titleValue: string;
  brandValue: string;
}

defineProps<ProductsFilterProps>();
defineEmits(['update:titleValue', 'update:brandValue']);
</script>

<template>
  <section class="products-filter-container">
    <FilterControl
      title="Title"
      placeholder="Enter Title"
      :value="titleValue"
      @update:value="(title) => $emit('update:titleValue', title)"
    />
    <FilterControl
      title="Brand"
      placeholder="Enter Brand"
      :value="brandValue"
      @update:value="(brand) => $emit('update:brandValue', brand)"
    />
  </section>
</template>

<style scoped lang="scss">
.products-filter-container {
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
}
</style>
