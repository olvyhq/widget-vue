import OlvyWidget from "./components/OlvyWidget.vue"

// const olvyWidget = {
//   install (appInstance) {
//     if(appInstance.globalName == 'nuxt' && appInstance.vueApp) {
//       console.log(".... nuxt instance.. ", appInstance);
//       appInstance.vueApp.use(OlvyWidget, "OlvyWidget");
//     } else {
//       // adds component to vue instance
//       appInstance.component("olvy-widget", OlvyWidget)
//     }
//   }
// }
// export default olvyWidget

const install = (appInstance) => {
  if(appInstance.globalName == 'nuxt' && appInstance.vueApp) {
    console.log(".... nuxt instance.. ", appInstance);
    appInstance.vueApp.use(OlvyWidget, "OlvyWidget");
  } else {
    // adds component to vue instance
    appInstance.component("olvy-widget", OlvyWidget)
  }
}

export {install};
export { default as OlvyWidget } from "./components/OlvyWidget.vue";
export default install;
