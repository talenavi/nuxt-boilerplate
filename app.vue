<script setup lang="ts">
const head = 'title';

onMounted(() => {
  console.log('mounted');
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
