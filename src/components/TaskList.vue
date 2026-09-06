<template>
  <div class="task-list">
    <p v-if="!tasks.length" class="empty-msg">
      No tasks available. Add one above!
    </p>
    <TaskItem
      v-else
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

defineProps({
  tasks: {
    type: Array,
    required: true,
  },
});
defineEmits(["toggle-task", "delete-task"]);
</script>
