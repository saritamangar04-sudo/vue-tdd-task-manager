import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TaskItem from "../TaskItem.vue";

describe("TaskItem.vue", () => {
  const sampleTask = { id: 1, title: "Write Unit Tests", completed: false };

  it("renders task title correctly", () => {
    const wrapper = mount(TaskItem, { props: { task: sampleTask } });
    expect(wrapper.text()).toContain("Write Unit Tests");
  });

  it("applies completed class when task is completed", () => {
    const wrapper = mount(TaskItem, {
      props: { task: { ...sampleTask, completed: true } },
    });
    expect(wrapper.find(".task-title").classes()).toContain("completed");
  });

  it("emits toggle-task when checkbox is clicked", async () => {
    const wrapper = mount(TaskItem, { props: { task: sampleTask } });
    await wrapper.find('input[type="checkbox"]').trigger("change");

    expect(wrapper.emitted("toggle-task")).toBeTruthy();
    expect(wrapper.emitted("toggle-task")[0]).toEqual([1]);
  });

  it("emits delete-task when delete button is clicked", async () => {
    const wrapper = mount(TaskItem, { props: { task: sampleTask } });
    await wrapper.find(".delete-btn").trigger("click");

    expect(wrapper.emitted("delete-task")).toBeTruthy();
    expect(wrapper.emitted("delete-task")[0]).toEqual([1]);
  });
});
