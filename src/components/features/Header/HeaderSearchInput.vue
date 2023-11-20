<script setup lang="ts">
import SearchIcon from '@/components/icons/SearchIcon.vue';
import InputWrapper from '@/components/shared/InputWrapper.vue';
</script>

<template>
  <InputWrapper>
    <SearchIcon class="search-icon" placeholder="Search"/>
  </InputWrapper>
</template>

<style scoped lang="scss">
.search-icon {
  color: #ADA7A7;
}
</style>
