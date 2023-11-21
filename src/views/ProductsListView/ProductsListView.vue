<script setup lang="ts">
import ProductsFilter from '@/components/features/ProductsFilter/ProductsFilter.vue';
import ProductsTable from '@/components/features/ProductsTable/ProductsTable.vue';
import PageTitle from '@/components/shared/PageTitle.vue';
</script>

<template>
  <main class="products-list-view">
    <PageTitle>Products Information</PageTitle>
    <ProductsFilter />
    <ProductsTable />
  </main>
</template>

<style scoped lang="scss">
.products-list-view {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  @include md {
    align-items: unset;
  }
}
</style>
