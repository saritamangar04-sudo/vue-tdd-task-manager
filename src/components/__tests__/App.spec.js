import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from "../../App.vue";

describe("App Integration", () => {
  it("allows adding, toggling, and deleting a task seamlessly", async () => {
    const wrapper = mount(App);

    // 1. Add Task
    const input = wrapper.find('input[type="text"]');
    await input.setValue("Complete Week 5 Project");
    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.text()).toContain("Complete Week 5 Project");

    // 2. Toggle Task
    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.trigger("change");
    expect(wrapper.find(".task-title").classes()).toContain("completed");

    // 3. Delete Task
    await wrapper.find(".delete-btn").trigger("click");
    expect(wrapper.text()).not.toContain("Complete Week 5 Project");
  });
});
