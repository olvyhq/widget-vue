
# @olvyhq/widget-vue

This vue component allows you to easily include Olvy widgets in your Vue applications. The component takes care of all the necessary set up and configuration, allowing you to simply specify which Olvy widget you want to use and any relevant options. 


![Logo](https://olvy-development.s3.amazonaws.com/public_images/olvy-vue.png)

## Demo

https://codesandbox.io/s/olvy-widget-vue-g6t0cv

## Installation

Install @olvyhq/widget-vue with npm

```bash
  npm install @olvyhq/widget-vue
```

    
## Usage/Examples

In main.js

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import OlvyWidget from '@olvyhq/widget-vue'
const app =createApp(App)
app.use(OlvyWidget)
app.mount('#app')
```
#### How to use 

```javascript
<olvy-widget :config="<Configuration>" >
    <div id="<Target-Element-Id>"> </div>
</olvy-widget>

//Replace <Target-Element-Id> with your target element id and <Configuration> with your configuration

```

#### Example

```javascript
<olvy-widget  :config="{workspaceAlias: 'olvysdktest'}" >
    <div id="olvy-whats-new">Announcement Widget</div>
</olvy-widget>
```
#### Configuration
```javascript
{
    widgetId:"",   // (optional)
    workspaceAlias:""  //(required)
}
````
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Optional**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |



## Methods

#### To show widget

```javascript
showWidget(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To hide widget

```javascript
hideWidget(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To set user

```javascript
setUser(workspaceAlias, userObject) 
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `userObject` | `object` | **Required**.  |

#### To set feedback meta info

```javascript
setFeedbackMetaInfo (workspaceAlias, metaInfo)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `metaInfo` | `object` | **Required**. |

#### To refresh unread count

```javascript
refreshUnreadCount(workspaceAlias,widgetAliasOrID) 
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To show unread releases count

```javascript
getUnreadReleasesCount(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To remove unread indicator element

```javascript
removeUnreadIndicatorElement(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To add unread indicator element

```javascript
addUnreadIndicatorElement(workspaceAlias,widgetAliasOrID, count) 
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To get last opened timestamp

```javascript
getLastOpenedTimestamp(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To refresh the widget

```javascript
refresh(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To teardown the widget

```javascript
teardown(workspaceAlias,widgetAliasOrID)
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To create feedback

```javascript
createFeedback(workspaceAlias,params)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `params` | `object` | **Required**.  |



## Tests

```bash
  npm run test:unit
```