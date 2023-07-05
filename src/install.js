import OlvyWidget from "./components/OlvyWidget.vue"

const install = (appInstance) => {
  if(appInstance.globalName == 'nuxt' && appInstance.vueApp) {
    appInstance.vueApp.use(OlvyWidget, "OlvyWidget");
  } else {
    // adds component to vue instance
    appInstance.component("olvy-widget", OlvyWidget)
  }
}

export {install};
export { default as OlvyWidget } from "./components/OlvyWidget.vue";
export default install;
