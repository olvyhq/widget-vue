
<template>
    <div>
      <slot></slot>
    </div>
  </template>
  
  <script lang="ts">
  
import { defineComponent, PropType } from 'vue';


declare interface OlvyUtils {
  showWidget(widgetAlias: string, widgetAliasOrID: string): void;
  hideWidget(workspaceAlias: string, widgetAliasOrID: string): void;
  setUser(workspaceAlias: string, userObject: Record<string, unknown>): void;
  setFeedbackMetaInfo(workspaceAlias: string, metaInfo: Record<string, unknown>): void;
  refreshUnreadCount(workspaceAlias: string, widgetAliasOrID: string): void;
  getUnreadReleasesCount(workspaceAlias: string, widgetAliasOrID: string): void;
  removeUnreadIndicatorElement(workspaceAlias: string, widgetAliasOrID: string): void;
  addUnreadIndicatorElement(workspaceAlias: string, widgetAliasOrID: string, count: number): void;
  getLastOpenedTimestamp(workspaceAlias: string, widgetAliasOrID: string): void;
  refresh(workspaceAlias: string, widgetAliasOrID: string): void;
  teardown(workspaceAlias: string, widgetAliasOrID: string): void;
  createFeedback(workspaceAlias: string, params: Record<string, unknown>): void;
  loadScript(url: string): Promise<void>;
}

declare global {
  interface Window {
    OlvyUtils: any;
    OlvyConfig: any;
  }
}


export default defineComponent({
    
    
  name: 'olvy-widget',
  data: () => ({
    olvyUtils: null as OlvyUtils | null,
    
  }),
  props: {
    config: {
      type: Object as PropType<Record<string, unknown>>,
      default: () => ({}),
    },
  },
  methods: {
    showWidget(widgetAlias: string, widgetAliasOrID: string): void {
      if (this.olvyUtils) {
        this.olvyUtils.showWidget(widgetAlias, widgetAliasOrID);
      }
    },
    hideWidget(workspaceAlias: string, widgetAliasOrID: string): void {
      if (this.olvyUtils) {
        this.olvyUtils.hideWidget(workspaceAlias, widgetAliasOrID);
      }
    },
    setUser(workspaceAlias: string, userObject: Record<string, unknown>): void {
      if (this.olvyUtils) {
        this.olvyUtils.setUser(workspaceAlias, userObject);
      }
    },
    setFeedbackMetaInfo(workspaceAlias: string, metaInfo: Record<string, unknown>): void {
      if (this.olvyUtils) {
        this.olvyUtils.setFeedbackMetaInfo(workspaceAlias, metaInfo);
      }
    },
    refreshUnreadCount(workspaceAlias: string, widgetAliasOrID: string): void {
      if (this.olvyUtils) {
        this.olvyUtils.refreshUnreadCount(workspaceAlias, widgetAliasOrID);
      }
    },
    getUnreadReleasesCount(workspaceAlias: string, widgetAliasOrID: string): void {
      if (this.olvyUtils) {
        this.olvyUtils.getUnreadReleasesCount(workspaceAlias, widgetAliasOrID);
      }
    },
    removeUnreadIndicatorElement(workspaceAlias: string, widgetAliasOrID: string): void {
      if (this.olvyUtils) {
        this.olvyUtils.removeUnreadIndicatorElement(workspaceAlias, widgetAliasOrID);
      }
    },
    addUnreadIndicatorElement(workspaceAlias: string, widgetAliasOrID: string, count: number): void {
      if (this.olvyUtils) {
        this.olvyUtils.addUnreadIndicatorElement(workspaceAlias, widgetAliasOrID, count);
      }
    },
    getLastOpenedTimestamp(workspaceAlias: string, widgetAliasOrID: string): void {
      if (this.olvyUtils) {
        this.olvyUtils.getLastOpenedTimestamp(workspaceAlias,widgetAliasOrID)
      }
    },
    refresh(workspaceAlias: string, widgetAliasOrID: string) {
        if (this.olvyUtils) {
        this.olvyUtils.refresh(workspaceAlias,widgetAliasOrID)
      }
        },
        teardown(workspaceAlias: string, widgetAliasOrID: string) {
              if (this.olvyUtils) {
            this.olvyUtils.teardown(workspaceAlias, widgetAliasOrID);
              }
        },
        createFeedback(workspaceAlias:string, params:any) {
              if (this.olvyUtils) {
            this.olvyUtils.createFeedback(workspaceAlias, params);
              }
        },
        async loadScript(url: string): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        if (!window.OlvyUtils) {
          const script = document.createElement('script');
          script.src = url;
          script.async = true;
          script.onload = (event: Event) => {
            console.log(event)
            resolve();
          };
          script.onerror = reject;
          document.head.appendChild(script);
        }
      });
    },

},

 async mounted() {
    await this.loadScript('https://app.olvy.co/scriptV2.js');
    window.OlvyConfig = this.config
    this.olvyUtils = window.OlvyUtils
    console.log("mounted")
 }
})
</script>

