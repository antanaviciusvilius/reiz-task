<script setup lang="ts">
import CustomCheckbox from '@/components/shared/CustomCheckbox.vue';
import DataTable from '@/components/shared/DataTable/DataTable.vue';
import DataTableCell from '@/components/shared/DataTable/DataTableCell.vue';
import DataTableRow from '@/components/shared/DataTable/DataTableRow.vue';
import type { Product } from '@/types/Product.ts';

export interface Row {
  title: string
  prop: keyof Product
}
const rows: Row[] = [
  {
    title: 'Category',
    prop: 'category',
  },
  {
    title: 'Brand',
    prop: 'brand',
  },
  {
    title: 'Price',
    prop: 'price',
  },
  {
    title: 'Stock',
    prop: 'stock',
  },
  {
    title: 'Rating',
    prop: 'rating',
  },
];

export interface ProductsTableProps {
  products: Product[];
}

const props = defineProps<ProductsTableProps>();
</script>

<template>
  <div class="products-table-container">
    <DataTable>
      <DataTableRow class="table-header">
        <DataTableCell cell-element="th"><CustomCheckbox /></DataTableCell>
        <DataTableCell cell-element="th">Title</DataTableCell>
        <DataTableCell v-for="row in rows" :key="row.title" cell-element="th">{{
          row.title
        }}</DataTableCell>
      </DataTableRow>
      <tbody class="table-body">
        <DataTableRow v-for="product in props.products" :key="product.title">
          <DataTableCell :styles="{ padding: '5px' }">
            <CustomCheckbox />
          </DataTableCell>
          <DataTableCell cell-data="Title">
            <router-link :to="{ name: 'product', params: { id: product.id } }" class="link">{{ product.title }}</router-link>
          </DataTableCell>
          <DataTableCell v-for="row in rows" :key="row.title" :cell-data="row.title">
            <span class="body-cell">{{ product[row.prop] }}</span>
          </DataTableCell>
        </DataTableRow>
      </tbody>
    </DataTable>
  </div>
</template>

<style scoped lang="scss">
.products-table-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-x: auto;
  margin-top: 34px;
  max-width: calc(100vw - 20px);
}
.body-cell {
  font-weight: 400;
  opacity: 0.65;
}

.table-body {
  display: table-row-group;
}

.link {
  color: var(--link-active-text-color);
  text-decoration: none;
}

@include md {
  .products-table-container {
    max-width: calc(100vw - var(--sidebar-md-width) - 80px);
  }
}

@include lg {
  .products-table-container {
    max-width: calc(100vw - var(--sidebar-lg-width) - 80px);
  }
}
</style>
