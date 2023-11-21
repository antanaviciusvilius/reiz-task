<script setup lang="ts">
import CustomCheckbox from '@/components/shared/CustomCheckbox.vue';
import DataTable from '@/components/shared/DataTable/DataTable.vue';
import DataTableCell from '@/components/shared/DataTable/DataTableCell.vue';
import DataTableRow from '@/components/shared/DataTable/DataTableRow.vue';
import type { Product } from '@/types/Product.ts';
const products: Product[] = Array(10).fill({
  title: 'iPhone 9',
  category: 'smartphones',
  brand: 'Samsung',
  price: '$100',
  stock: '50',
  rating: '$000'
})

export interface Row {
  title: string
  prop: keyof Product
}
const rows: Row[] = [
  {
    title: 'Category',
    prop: 'category'
  },
  {
    title: 'Brand',
    prop: 'brand'
  },
  {
    title: 'Price',
    prop: 'price'
  },
  {
    title: 'Stock',
    prop: 'stock'
  },
  {
    title: 'Rating',
    prop: 'rating'
  }
]
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
        <DataTableRow v-for="product in products" :key="product.title">
          <DataTableCell :styles="{padding: '5px'}">
            <CustomCheckbox />
          </DataTableCell>
          <DataTableCell cell-data="Title">
            <router-link to="/" class="link">{{ product.title }}</router-link>
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
}
.body-cell {
  font-weight: 400;
  opacity: 0.65;
}

.table-body {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

.link {
  color: var(--link-active-text-color);
  text-decoration: none;
}

@include md {
  .table-body {
    display: table-row-group;
  }
}
</style>
