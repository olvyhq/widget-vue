<template>
 
  <OlvyWidget :config="config" ref="announcement_widget">
    <div id="olvy-whats-new">announcement test</div>
    </OlvyWidget>
    <div  @click="openWidget()">
      test button
    </div>
    <OlvyWidget :config="feedback_config">
    <div id="olvy-feedback">feedback test</div>
    </OlvyWidget>
</template>

<script>
import OlvyWidget from './components/OlvyWidget.vue'
export default {
  name: 'App',
  components: {
    OlvyWidget
  },
 
 data:()=>({
  config:{
  workspaceAlias: "olvysdktest",
  widgetId:"happy_almeida_vSLzb"
   },
   feedback_config:{
    workspaceAlias: "olvysdktest"
   }
 }),
 methods:{
  openWidget(){
    this.$refs.announcement_widget.showWidget(this.config.workspaceAlias,this.config.widgetId)
  }
 }, 
 mounted(){
 // this.$refs["announcement_widget"].showWidget(this.config.widgetId)
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
</style>
