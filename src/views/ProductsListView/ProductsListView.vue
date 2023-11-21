<script setup lang="ts">
import ProductsFilter from '@/components/features/ProductsFilter/ProductsFilter.vue';
import ProductsSort, { type SortOption } from '@/components/features/ProductsSort/ProductsSort.vue';
import ProductsTable from '@/components/features/ProductsTable/ProductsTable.vue';
import PageTitle from '@/components/shared/PageTitle.vue';
import filterByBrand from '@/helpers/filterByBrand';
import getProducts from '@/helpers/getProducts';
import sortHelper from '@/helpers/sortHelper';
import type { Product } from '@/types/Product';
import { ref, watch } from 'vue';

const products = ref<Product[]>([]);
const filteredProducts = ref<Product[]>([]);
const sortedProducts = ref<Product[]>([]);
const filterSectionToggle = ref(true);

const searchProducts = async (title?: string) => {
  try {
    products.value = await getProducts(title);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to fetch products data:', error);
  }
};

const titleFilter = ref('');
const brandFilter = ref('');
const sortBy = ref<SortOption>();

watch(
  [titleFilter, brandFilter, sortBy],
  async ([title, brand, sort], [oldTitle]) => {
    if (title !== oldTitle) {
      await searchProducts(title);
    }

    filteredProducts.value = filterByBrand(products.value, brand);

    if (!sort || !sort.property || !sort.order) {
      sortedProducts.value = [...filteredProducts.value];
      return;
    }

    sortedProducts.value = sortHelper(filteredProducts.value, sort.property, sort.order);
  },
  { immediate: true },
);

const toggleFilterSectionClick = () => {
  filterSectionToggle.value = !filterSectionToggle.value;
};
</script>

<template>
  <main class="products-list-view">
    <PageTitle>
      Products Information
      <button type="button" @click="toggleFilterSectionClick()">
        {{ filterSectionToggle ? 'Hide' : 'Show' }} filters/sort
      </button>
    </PageTitle>
    <div class="filter-section" v-if="filterSectionToggle">
      <ProductsFilter v-model:title-value="titleFilter" v-model:brand-value="brandFilter" />
      <ProductsSort class="products-sort" v-model:sort-value="sortBy" />
    </div>
    <ProductsTable :products="sortedProducts" />
  </main>
</template>

<style scoped lang="scss">
.products-list-view {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.filter-section {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}
</style>
