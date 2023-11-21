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
      <HeaderAction :icon="NotificationBingIcon" show-indicator />
      <HeaderAction :styles="{ borderRadius: '10px' }">
        <img :src="userPic" alt="user picture" />
      </HeaderAction>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-container {
  padding: 10px;
  display: flex;
  position: fixed;
  width: 100%;
  background-color: var(--background-color);
  z-index: 1;
}

.search-input {
  width: 100%;
  display: none;
}

.header-actions {
  display: flex;
  gap: 20px;
  margin-left: auto;
}

@include sm {
  .search-input {
    max-width: 170px;
    display: flex;
  }
}

@include md {
  .header-container {
    padding: 56px 40px;
    position: unset;
    width: unset;
    background-color: unset;
  }

  .search-input {
    max-width: 250px;
  }
}

@include lg {
  .search-input {
    max-width: 400px;
  }
}

@include xl {
  .search-input {
    max-width: 655px;
  }
}
</style>
