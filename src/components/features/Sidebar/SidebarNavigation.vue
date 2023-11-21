<script setup lang="ts">
import BagTickIcon from '@/components/icons/BagTickIcon.vue';
import CalendarTickIcon from '@/components/icons/CalendarTickIcon.vue';
import ClipboardTickIcon from '@/components/icons/ClipboardTickIcon.vue';
import DashboardIcon from '@/components/icons/DashboardIcon.vue';
import EmptyWalletIcon from '@/components/icons/EmptyWalletIcon.vue';
import QuestionIcon from '@/components/icons/QuestionIcon.vue';
import SMSIcon from '@/components/icons/SMSIcon.vue';
import SettingIcon from '@/components/icons/SettingIcon.vue';
import SidebarNavigationItem, { type SidebarNavigationItemProps } from './SidebarNavigationItem.vue';

const navItems: SidebarNavigationItemProps[] = [
  {
    icon: DashboardIcon,
    title: 'Dashboard',
    isActive: true,
  },
  {
    icon: ClipboardTickIcon,
    title: 'Lab Test',
    isActive: false,
  },
  {
    icon: CalendarTickIcon,
    title: 'Appointment',
    isActive: false,
  },
  {
    icon: BagTickIcon,
    title: 'Medicine Order',
    isActive: false,
  },
  {
    icon: SMSIcon,
    title: 'Message',
    isActive: false,
  },
  {
    icon: EmptyWalletIcon,
    title: 'Payment',
    isActive: false,
  },
  {
    icon: SettingIcon,
    title: 'Settings',
    isActive: false,
  },
];
</script>

<template>
  <nav class="sidebar-navigation">
    <ul class="sidebar-nav-list">
      <SidebarNavigationItem
        v-for="navItem in navItems"
        v-bind:key="navItem.title"
        :icon="navItem.icon"
        :title="navItem.title"
        :is-active="navItem.isActive"
      />

      <SidebarNavigationItem
        class="pull-down"
        :icon="QuestionIcon"
        title="Help"
        :is-active="false"
      />
    </ul>
  </nav>
</template>

<style scoped>
.sidebar-navigation {
  display: flex;
  flex: 1;
  .sidebar-nav-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0;
    flex: 1;
  }

  .pull-down {
    margin-top: auto;
  }
}
</style>
