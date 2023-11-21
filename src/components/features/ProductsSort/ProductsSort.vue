<script setup lang="ts">
import FilterTitle from '@/components/shared/FilterTitle.vue';
import type { SortDirection } from '@/helpers/sortHelper';
import type { Product } from '@/types/Product';

export interface ProductsSortProps {
  sortValue?: SortOption;
}

defineProps<ProductsSortProps>();
const emit = defineEmits(['update:sortValue']);

export interface SortOption {
  title: string;
  property: keyof Product | null;
  order?: SortDirection;
}

const sortOptions: SortOption[] = [
  {
    title: 'Title A-Z',
    property: 'title',
    order: 'desc',
  },
  {
    title: 'Title Z-A',
    property: 'title',
    order: 'asc',
  },
  {
    title: 'Brand A-Z',
    property: 'brand',
    order: 'desc',
  },
  {
    title: 'Brand Z-A',
    property: 'brand',
    order: 'asc',
  },
];

const handleSortClick = (sortOption: SortOption) => {
  emit('update:sortValue', sortOption);
};

const handleClearSort = () => {
  emit('update:sortValue', null);
};
</script>

<template>
  <section class="products-sort-container">
    <FilterTitle>Sort By</FilterTitle>
    <div class="sort-options">
      <button
        v-for="sortOption in sortOptions"
        :key="sortOption.title"
        class="sort-option-btn"
        v-bind:class="{ active: sortValue?.property === sortOption.property && sortValue.order === sortOption.order }"
        @click="handleSortClick(sortOption)"
        type="button"
      >
        {{ sortOption.title }}
      </button>
      <button
        class="sort-option-btn"
        @click="handleClearSort()"
        type="button"
      >
        Clear sort
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.products-sort-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sort-options {
  display: flex;
  gap: 22px;
}

.sort-option-btn {
  display: flex;
  background-color: white;
  height: 52px;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: var(--grey-color);
  padding: 12px;

  &:hover {
    box-shadow: 1px 1px 2px 0 var(--grey-color);
  }

  &.active {
    background-color: var(--link-active-text-color);
  }
}
</style>
