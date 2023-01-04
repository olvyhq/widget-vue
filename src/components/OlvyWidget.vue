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
        showWidget(widgetAlias, widgetAliasOrID) {
            window.OlvyUtils.showWidget(widgetAlias, widgetAliasOrID)
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
    mounted() {
        try {
            if (document) {
                let olvyScript = document.createElement('script')
                olvyScript.setAttribute('src', 'https://app.olvy.co/scriptV2.js')
                document.head.appendChild(olvyScript)
            }
            if (window) {
                window.addEventListener('load', () => {
                    window.OlvyConfig = this.config
                    this.olvyUtils = window.OlvyUtils
                })
            }
        } catch (e) {
            console.log(e)
        }
    },
}
</script>
