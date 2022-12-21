<script setup>
import { defineAsyncComponent } from 'vue';

const SideBar = defineAsyncComponent(() =>
  import('./components/Sidebar.vue')
);

const Header = defineAsyncComponent(() =>
  import('./components/Header.vue')
);
</script>

<template>
  <SideBar />
  <Header />
  <router-view />
</template>