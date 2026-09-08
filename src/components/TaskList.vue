<template>
  <div class="task-list">
    <!-- Fallback message rendered when task array is empty -->
    <p v-if="tasks.length === 0" class="empty-message">
      No tasks available. Add one above!
    </p>

    <!-- Render task items iteratively -->
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle-task="$emit('toggle-task', $event)"
      @delete-task="$emit('delete-task', $event)"
    />
  </div>
</template>

<script setup>
import TaskItem from "./TaskItem.vue";

// Props validation for the task array
defineProps({
  tasks: {
    type: Array,
    required: true,
  },
});

// Re-emit events up to App.vue
defineEmits(["toggle-task", "delete-task"]);
</script>
