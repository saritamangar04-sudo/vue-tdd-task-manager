<template>
  <main class="app-container">
    <h1>TDD Task Manager</h1>
    <!-- Input component emits task payload object -->
    <TaskInput @add-task="addTask" />
    <!-- Task list component renders items and passes actions -->
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

// Centralized reactive state array for tasks
const tasks = ref([]);

// Handles adding a new task object received from TaskInput
const addTask = (taskData) => {
  tasks.value.push({
    id: Date.now(),
    title: taskData.title,
    completed: false,
  });
};

// Toggles completion status by ID
const toggleTask = (id) => {
  const task = tasks.value.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
  }
};

// Removes a task by ID
const deleteTask = (id) => {
  tasks.value = tasks.value.filter((t) => t.id !== id);
};
</script>
