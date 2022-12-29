<template>
 
  <OlvyWidget :config="config">
    <div id="olvy-whats-new">announcement test</div>
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
   }
 })
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
