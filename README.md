# Olvy-widget-vue

## Project setup
```
npm install @olvyhq/widget-vue@0.1.3
```

### Getting Started
```
On main.js

import { createApp } from 'vue'
import App from './App.vue'
import olvyWidget from '@olvyhq/widget-vue'
const app =createApp(App)
app.use(olvyWidget)
app.mount('#app')

```

### How to use in your component
```
 <olvy-widget :config="<Configuration>" >
    <div id="<Target-Element-Id>" </div>
   </olvy-widget>

Replace <Target-Element-Id> with your target element id and <Configuration> with your desired configuration
```
### Example
```
  <olvy-widget :config="{workspaceAlias: 'olvysdktest'}" >
    <div id="olvy-whats-new">Announcement Widget</div>
   </olvy-widget>

```



### Customize configuration
```
{
    widgetId:"",   // (optional)
    workspaceAlias:""  //(required)
}
```
### Methods
```
 showWidget(workspaceAlias,widgetAliasOrID) 
 hideWidget(workspaceAlias,widgetAliasOrID) 
 setUser(workspaceAlias, userObject) 
 setFeedbackMetaInfo (workspaceAlias, metaInfo) 
 refreshUnreadCount(workspaceAlias,widgetAliasOrID)
 getUnreadReleasesCount(workspaceAlias,widgetAliasOrID)
 removeUnreadIndicatorElement(workspaceAlias,widgetAliasOrID)
 addUnreadIndicatorElement(workspaceAlias,widgetAliasOrID, count)
 getLastOpenedTimestamp(workspaceAlias,widgetAliasOrID)
 refresh(workspaceAlias,widgetAliasOrID)
 teardown(workspaceAlias,widgetAliasOrID)
 createFeedback(workspaceAlias,params)

 workspaceAlias - your subdomain 
 widgetAliasorID - widget Id or alias ( you can find it on widget details page in olvy dashbaord )
```