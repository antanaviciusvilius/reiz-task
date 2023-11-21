<script setup lang="ts">
import ProductsFilter from '@/components/features/ProductsFilter/ProductsFilter.vue';
import ProductsTable from '@/components/features/ProductsTable/ProductsTable.vue';
import PageTitle from '@/components/shared/PageTitle.vue';
import filterByBrand from '@/helpers/filterByBrand';
import getProducts from '@/helpers/getProducts';
import type { Product } from '@/types/Product';
import { ref, watch } from 'vue';


const products = ref<Product[]>([]);
const filteredProducts = ref<Product[]>([]);

const searchProducts = async (title?: string) => {
  try {
    products.value = await getProducts(title);
  } catch (error) {
    console.error('Failed to fetch products data:', error);
  }
};

const titleFilter = ref('');
const brandFilter = ref('');

watch([titleFilter, brandFilter], async ([title, brand], [oldTitle, oldBrand]) => {
  if (title !== oldTitle) {
    await searchProducts(title);
  }
  filteredProducts.value = filterByBrand(products.value, brand);
}, { immediate: true })

</script>

<template>
  <main class="products-list-view">
    <PageTitle>Products Information</PageTitle>
    <ProductsFilter 
      v-model:title-value="titleFilter" 
      v-model:brand-value="brandFilter"
    />
    <ProductsTable :products="filteredProducts"/>
  </main>
</template>

<style scoped lang="scss">
.products-list-view {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
