<template>
  <main class="app-container">
    <h1>Vue TDD Task Manager</h1>
    <TaskInput @add-task="addTask" />
    <TaskList
      :tasks="tasks"
      @toggle-task="toggleTask"
      @delete-task="deleteTask"
    />
  </main>
</template>

<script setup>
import { ref } from "vue";
import TaskInput from "./components/TaskInput.vue";
import TaskList from "./components/TaskList.vue";

const tasks = ref([]);

const addTask = ({ title }) => {
  tasks.value.push({
    id: Date.now(),
    title,
    completed: false,
  });
};

const toggleTask = (id) => {
  const task = tasks.value.find((t) => t.id === id);
  if (task) task.completed = !task.completed;
};

const deleteTask = (id) => {
  tasks.value = tasks.value.filter((t) => t.id !== id);
};
</script>

<style scoped>
.app-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
}
</style>
