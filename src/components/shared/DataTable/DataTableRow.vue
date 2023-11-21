<script setup lang="ts"></script>

<template>
  <tr class="data-table-row">
    <slot />
  </tr>
</template>

<style scoped lang="scss">
.data-table-row {
  background-color: var(--container-background-color);
  box-shadow: 0px 1px 1px 2px #f2f2f2;
}
</style>
