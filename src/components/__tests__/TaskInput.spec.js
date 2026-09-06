import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TaskInput from "../TaskInput.vue";

describe("TaskInput.vue", () => {
  it("renders input field and submit button", () => {
    const wrapper = mount(TaskInput);
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("shows error message when submitting empty title", async () => {
    const wrapper = mount(TaskInput);
    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.text()).toContain("Task title cannot be empty");
    expect(wrapper.emitted("add-task")).toBeFalsy();
  });

  it("emits add-task event with valid title and clears input", async () => {
    const wrapper = mount(TaskInput);
    const input = wrapper.find('input[type="text"]');

    await input.setValue("Learn TDD in Vue");
    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.emitted("add-task")).toBeTruthy();
    expect(wrapper.emitted("add-task")[0]).toEqual([
      { title: "Learn TDD in Vue" },
    ]);
    expect(input.element.value).toBe("");
  });
});
