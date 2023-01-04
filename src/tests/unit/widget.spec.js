import { shallowMount, mount } from "@vue/test-utils";
import OlvyWidget from "@/components/OlvyWidget.vue";

describe("OlvyWidget.vue", () => {
  it("Testing olvy widget with configuration", async () => {
    const config = {
      workspaceAlias: "olvysdktest",
    };
    const wrapper = await mount(OlvyWidget, {
      props: { config },
      slots: {
        default: `<div id="olvy-whats-new">Announcement Widget</div>
        <div id="olvy-feedback">Feedback Widget</div>
        `,
      },
    });
    
    //To check if workspace alias is received

    expect(wrapper.props().config.workspaceAlias).toMatch(
      config.workspaceAlias
    );
    //To check if feedback widget target element exists

    expect(wrapper.text()).toMatch("Feedback Widget");

    //To check if announcement widget target element exists
    expect(wrapper.text()).toMatch("Announcement Widget");

    // expect(wrapper.vm.olvyUtils).not.toBe(null)
  });
});
