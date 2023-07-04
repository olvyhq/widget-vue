import OlvyWidget from "./components/OlvyWidget.vue"
import Vue from "vue";

const olvyWidget = {
  install (appInstance) {
    if(appInstance.globalName == 'nuxt' && appInstance.vueApp) {
      console.log(".... nuxt instance.. ", appInstance);
      appInstance.vueApp.use(OlvyWidget, "OlvyWidget");
    } else {
      console.log("... vue instance..", Vue);
      // adds component to vue instance
      Vue.component("olvy-widget", OlvyWidget)
    }
  }
}
export default olvyWidget

