<template>
  <div class="task-item">
    <!-- Toggle completion state on checkbox change -->
    <input
      type="checkbox"
      :checked="task.completed"
      @change="$emit('toggle-task', task.id)"
    />
    <!-- Render task title and apply completed class to title span -->
    <span class="task-title" :class="{ completed: task.completed }">
      {{ task.title }}
    </span>
    <!-- Emit delete action with target task ID -->
    <button class="delete-btn" @click="$emit('delete-task', task.id)">
      Delete
    </button>
  </div>
</template>

<script setup>
// Props definition with validation
defineProps({
  task: {
    type: Object,
    required: true,
  },
});

// Declare custom emitted events for parent component handling
defineEmits(["toggle-task", "delete-task"]);
</script>
