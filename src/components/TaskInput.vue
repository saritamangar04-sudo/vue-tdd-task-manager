<template>
  <form @submit.prevent="handleSubmit" class="task-form">
    <input v-model="title" type="text" placeholder="Enter new task..." />
    <button type="submit">Add Task</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </form>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["add-task"]);
const title = ref("");
const errorMessage = ref("");

const handleSubmit = () => {
  if (!title.value.trim()) {
    errorMessage.value = "Task title cannot be empty";
    return;
  }
  errorMessage.value = "";
  emit("add-task", { title: title.value.trim() });
  title.value = "";
};
</script>
