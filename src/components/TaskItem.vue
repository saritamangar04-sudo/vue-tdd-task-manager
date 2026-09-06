<template>
  <div class="task-item">
    <input
      type="checkbox"
      :checked="task.completed"
      @change="$emit('toggle-task', task.id)"
    />
    <span :class="['task-title', { completed: task.completed }]">
      {{ task.title }}
    </span>
    <button class="delete-btn" @click="$emit('delete-task', task.id)">
      Delete
    </button>
  </div>
</template>

<script setup>
defineProps({
  task: {
    type: Object,
    required: true,
  },
});
defineEmits(["toggle-task", "delete-task"]);
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: #888;
}
</style>
