<script setup lang="ts">
import type { StyleValue } from 'vue';

export interface DataTableCellProps {
  cellElement?: 'th' | 'td'
  cellData?: string;
  styles?: StyleValue;
}

const props = withDefaults(defineProps<DataTableCellProps>(), {
  cellElement: 'td'
});
</script>

<template>
  <th v-if="props.cellElement === 'th'" class="data-table-cell">
    <slot></slot>
  </th>

  <td v-if="props.cellElement === 'td'" class="data-table-cell" :data-cell="props.cellData || ''">
    <slot></slot>
  </td>
</template>

<style scoped lang="scss">
.data-table-cell {
  padding: 5px;
  font-weight: 500;
  line-height: normal;
  text-align: left;
}
th {
  display: none;
}

td {
  display: grid;
  grid-template-columns: 15ch auto;

  &::before {
    content: attr(data-cell);
    font-weight: 700;
    text-transform: capitalize;
  }
}

@include md {
  .data-table-cell {
    padding: 16px;
  }
  th, td {
    display: table-cell;
  }

  td::before {
    display: none;
  }
}

@include xl {
  .data-table-cell {
    padding: 24px;
  }
}
</style>
