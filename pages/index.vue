<script setup lang="ts">
import type { Todo } from '~/interface/todo';
const todos = ref<Todo[]>();

onMounted(async () => {
  try {
    const response = await useFetchApi<Todo[]>('GET', '/todos');

    console.log('Response:', response);
    todos.value = response;
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
});
</script>

<template>
  <div>
    <div class="text-primary py-1">Page: index</div>
    <div class="grid grid-cols-2 gap-3">
      <div v-for="todo in todos" :key="todo.id" class="flex rounded border p-3">
        <div class="flex-1 truncate capitalize">
          {{ todo.title }}
        </div>
        <PButton label="Go to Todo" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
