import OlvyWidget from "./components/OlvyWidget.vue"

const olvyWidget = {
  install (appInstance) {
    if(appInstance.globalName == 'nuxt' && appInstance.vueApp) {
      console.log(".... nuxt instance.. ", appInstance);
      appInstance.vueApp.use(OlvyWidget, "OlvyWidget");
    } else {
      console.log("... vue instance..", appInstance);
      // adds component to vue instance
      appInstance.component("olvy-widget", OlvyWidget)
    }
  }
}
export default olvyWidget

