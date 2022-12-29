<template>
    <div>    
          <slot></slot>
    </div>
  </template>
  <script lang="js">
  export default {
    data :()=>({
        olvyUtils:{}
    }),
    props:{
        config:{
            type:Object,
            default:()=>({})
        }
    },
    methods:{
        showWidget(widgetAlias,widgetAliasOrID) {
            window.OlvyUtils.showWidget(widgetAlias,widgetAliasOrID)
        },
         hideWidget(workspaceAlias,widgetAliasOrID) {
           window.olvyUtils.hideWidget(workspaceAlias,widgetAliasOrID);
         },  
        setUser(workspaceAlias, userObject){
          window.olvyUtils.setUser(workspaceAlias, userObject);
        },
        setFeedbackMetaInfo (workspaceAlias, metaInfo)  {
            window.olvyUtils.setFeedbackMetaInfo(workspaceAlias,metaInfo);
      },
        refreshUnreadCount(workspaceAlias,widgetAliasOrID){
          window.olvyUtils.refreshUnreadCount(workspaceAlias,widgetAliasOrID);
        },
        getUnreadReleasesCount(workspaceAlias,widgetAliasOrID){
          window.olvyUtils.getUnreadReleasesCount(workspaceAlias,widgetAliasOrID);
        },
        removeUnreadIndicatorElement(workspaceAlias,widgetAliasOrID){
          window.olvyUtils.removeUnreadIndicatorElement(
            workspaceAlias,widgetAliasOrID
          );
        },
        addUnreadIndicatorElement(workspaceAlias,widgetAliasOrID, count){
          window.olvyUtils.addUnreadIndicatorElement(
            workspaceAlias,
            widgetAliasOrID,
            count
          );
        },
        getLastOpenedTimestamp(workspaceAlias,widgetAliasOrID){
            window.olvyUtils.getLastOpenedTimestamp(workspaceAlias,widgetAliasOrID);
        },
        refresh(workspaceAlias,widgetAliasOrID){
            window.olvyUtils.refresh(workspaceAlias,widgetAliasOrID);
        },
        teardown(workspaceAlias,widgetAliasOrID){
            window.olvyUtils.teardown(workspaceAlias,widgetAliasOrID);
        },
        createFeedback(workspaceAlias,params){
          if (window.OlvyConfig || typeof OlvyConfig !== "undefined") {
            window.olvyUtils.createFeedback(workspaceAlias,params);
          }
        },
    },
    mounted(){
        let olvyScript=document.createElement('script')
        olvyScript.setAttribute('src','http://localhost:3000/scriptV2.js')
       document.head.appendChild(olvyScript)
       window.addEventListener('load',()=>{
       window.OlvyConfig=this.config
       this.olvyUtils= window.OlvyUtils 
       })   
    },
  }
  </script>