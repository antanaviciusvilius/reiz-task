<script setup lang="ts">
import FilterControl from '../../shared/FilterControl.vue';
</script>

<template>
  <section class="products-filter-container">
    <FilterControl title="Title" placeholder="Enter Title"/>
    <FilterControl title="Brand" placeholder="Enter Brand"/>
  </section>
</template>

<style scoped lang="scss">
.products-filter-container {
  display: flex;
  gap: 22px;
}
</style>
