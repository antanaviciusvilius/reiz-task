<script setup lang="ts">

export interface DataTableCellProps {
  cellElement?: 'th' | 'td'
  cellData?: string;
}

const props = withDefaults(defineProps<DataTableCellProps>(), {
  cellElement: 'td',
  cellData: '',
});
</script>

<template>
  <th v-if="props.cellElement === 'th'" class="data-table-cell">
    <slot />
  </th>

  <td v-if="props.cellElement === 'td'" class="data-table-cell" :data-cell="props.cellData || ''">
    <slot />
  </td>
</template>

<style scoped lang="scss">
.data-table-cell {
  padding: 5px;
  font-weight: 500;
  line-height: normal;
  text-align: left;
}

@include md {
  .data-table-cell {
    padding: 16px;
  }
}

@include xl {
  .data-table-cell {
    padding: 24px;
  }
}
</style>
