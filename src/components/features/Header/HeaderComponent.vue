<script setup lang="ts">
import userPic from '@/assets/user-pic.png';
import HeaderAction from '@/components/features/Header/HeaderAction.vue';
import NotificationBingIcon from '@/components/icons/NotificationBingIcon.vue';
import HeaderSearchInput from './HeaderSearchInput.vue';
</script>

<template>
  <div class="header-container">
    <HeaderSearchInput placeholder="Search" class="search-input" />
    <div class="header-actions">
      <HeaderAction :icon="NotificationBingIcon" show-indicator/>
      <HeaderAction :styles="{borderRadius: '10px'}">
        <img :src="userPic" />
      </HeaderAction>
    </div>
  </div>
</template>

<style scoped>
  .header-container {
    padding: 56px 40px;
    display: flex;
    justify-content: space-between;
  }

  .search-input {
    max-width: 600px;
    width: 100%;
  }

  .header-actions {
    display: flex;
    gap: 20px;
  }
</style>
