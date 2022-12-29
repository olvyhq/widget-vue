import OlvyWidget from "./components/OlvyWidget.vue"
function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component("olvy-widget", OlvyWidget);
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
	GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
	GlobalVue = global.vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

OlvyWidget.install = install;

export default OlvyWidget;