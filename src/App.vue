<template>
  <!-- Announcement widget -->
  <OlvyWidget :config="config" ref="announcement_widget">
    <div id="olvy-whats-new" class="button">Announcement Widget</div>
  </OlvyWidget>
  <!-- Feedback widget -->
  <OlvyWidget :config="feedback_config">
    <div id="olvy-feedback" class="button">Feedback Widget</div>
  </OlvyWidget>
  <!-- open widget by calling method in announcement widget -->
  <div @click="openWidget()" class="button">
    Open Announcement Widget By Calling Method
  </div>

</template>

<script>
import OlvyWidget from './components/OlvyWidget.vue'
export default {
  name: 'App',
  components: {
    OlvyWidget
  },

  data: () => ({
    config: {
      workspaceAlias: "olvysdktest",
      widgetId: "distracted_bhabha_iAzYw"
    },
    feedback_config: {
      workspaceAlias: "olvysdktest"
    }
  }),
  methods: {
    openWidget() {
      this.$refs.announcement_widget.showWidget(this.config.workspaceAlias, this.config.widgetId)
    }
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.button {
  background-color: rgb(162, 1, 82);
  filter: brightness(1);
  opacity: 1;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 5%) 0px 5px 20px 0px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin: 20px;
}
</style>
