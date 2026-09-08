<template>
  <form @submit.prevent="handleSubmit" class="task-form">
    <input v-model="title" type="text" placeholder="Enter new task..." />
    <button type="submit">Add Task</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </form>
</template>

<script setup>
import { ref } from "vue";

// Define custom events emitted to parent (App.vue)
const emit = defineEmits(["add-task"]);

// Reactive input state and validation error message
const title = ref("");
const errorMessage = ref("");

// Handles form submission, trims whitespace, handles errors, and emits payload
const handleSubmit = () => {
  // Edge-case handling: Validate against empty or whitespace-only inputs
  if (!title.value.trim()) {
    errorMessage.value = "Task title cannot be empty";
    return;
  }

  // Clear previous errors and emit task object to parent component
  errorMessage.value = "";
  emit("add-task", { title: title.value.trim() });

  // Reset input field state
  title.value = "";
};
</script>
