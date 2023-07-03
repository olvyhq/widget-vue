<template>
    <div>
        <slot></slot>
    </div>
</template>
<script lang="js">
export default {
    data: () => ({
        olvyUtils: null,
    }),
    props: {
        config: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        async getOlvyUtils(){
            if (window.OlvyUtils) {
                return window.OlvyUtils;
            } else {
                // Wait for the script to load before returning the utils object
                await this.olvyScriptLoader();

                // script adds utils to window, we just return utils after ensuring script load
                return window.OlvyUtils;
            }
        },
        async olvyScriptLoader(){
            // Create a Promise that resolves when the script is loaded
            return new Promise((resolve, reject) => {
                if (!window.OlvyUtils) {
                    const script = document.createElement("script");
                    script.src = "https://app.olvy.co/scriptV2.js";
                    script.onload = () => {
                        // The script is loaded, so resolve the Promise
                        resolve(true);
                    };
                    script.onerror = () => {
                        // There was an error loading the script, so reject the Promise
                        reject(new Error("Failed to load script."));
                    };
                    document.body.appendChild(script);
                } else {
                    resolve(true);
                }
            });
        },
        showWidget(workspaceAlias, widgetAliasOrID) {
            window.OlvyUtils.showWidget(workspaceAlias, widgetAliasOrID)
        },
        hideWidget(workspaceAlias, widgetAliasOrID) {
            window.OlvyUtils.hideWidget(workspaceAlias, widgetAliasOrID);
        },
        setUser(workspaceAlias, userObject) {
            window.OlvyUtils.setUser(workspaceAlias, userObject);
        },
        setFeedbackMetaInfo(workspaceAlias, metaInfo) {
            window.OlvyUtils.setFeedbackMetaInfo(workspaceAlias, metaInfo);
        },
        refreshUnreadCount(workspaceAlias, widgetAliasOrID) {
            window.OlvyUtils.refreshUnreadCount(workspaceAlias, widgetAliasOrID);
        },
        getUnreadReleasesCount(workspaceAlias, widgetAliasOrID) {
            window.OlvyUtils.getUnreadReleasesCount(workspaceAlias, widgetAliasOrID);
        },
        removeUnreadIndicatorElement(workspaceAlias, widgetAliasOrID) {
            window.OlvyUtils.removeUnreadIndicatorElement(
                workspaceAlias, widgetAliasOrID
            );
        },
        addUnreadIndicatorElement(workspaceAlias, widgetAliasOrID, count) {
            window.OlvyUtils.addUnreadIndicatorElement(
                workspaceAlias,
                widgetAliasOrID,
                count
            );
        },
        getLastOpenedTimestamp(workspaceAlias, widgetAliasOrID) {
            window.OlvyUtils.getLastOpenedTimestamp(workspaceAlias, widgetAliasOrID);
        },
        refresh(workspaceAlias, widgetAliasOrID) {
            window.OlvyUtils.refresh(workspaceAlias, widgetAliasOrID);
        },
        teardown(workspaceAlias, widgetAliasOrID) {
            window.OlvyUtils.teardown(workspaceAlias, widgetAliasOrID);
        },
        createFeedback(workspaceAlias, params) {
            window.OlvyUtils.createFeedback(workspaceAlias, params);
        },
    },
    async mounted() {
        try {
            if(window) {
                await this.getOlvyUtils();
                if(!window.OlvyInstances.length && this.config.workspaceAlias) {
                    // if no olvyInstances found, we create using config
                    new window.Olvy(this.config.workspaceAlias);
                }
            }
            // if (document) {
            //     let olvyScript = document.createElement('script')
            //     olvyScript.setAttribute('src', 'https://app.olvy.co/scriptV2.js')
            //     document.head.appendChild(olvyScript)
            // }
            // if (window) {
            //     window.addEventListener('load', () => {
            //         window.OlvyConfig = this.config
            //         this.olvyUtils = window.OlvyUtils
            //     })
            // }
        } catch (e) {
            console.log(e)
        }
    },
}
</script>
