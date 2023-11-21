<script setup lang="ts"></script>

<template>
  <div class="brand-logo">Sales.</div>
</template>

<style scoped lang="scss">
.brand-logo {
  color: var(--brand-logo-color);
  font-size: 24px;
  font-weight: 500;
  padding: 55px 10px 40px 10px;
}

@include lg {
  .brand-logo {
    padding: 55px 130px 40px 29px;
  }
}
</style>
