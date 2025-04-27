<script setup lang="ts">
const head = 'title';

onMounted(() => {
  console.log('mounted');
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
