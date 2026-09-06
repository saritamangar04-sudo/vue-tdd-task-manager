import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TaskList from "../TaskList.vue";
import TaskItem from "../TaskItem.vue";

describe("TaskList.vue", () => {
  it("displays empty state message when tasks array is empty", () => {
    const wrapper = mount(TaskList, { props: { tasks: [] } });
    expect(wrapper.text()).toContain("No tasks available. Add one above!");
  });

  it("renders correct number of TaskItem components", () => {
    const tasks = [
      { id: 1, title: "Task 1", completed: false },
      { id: 2, title: "Task 2", completed: true },
    ];
    const wrapper = mount(TaskList, { props: { tasks } });
    const items = wrapper.findAllComponents(TaskItem);
    expect(items.length).toBe(2);
  });
});
