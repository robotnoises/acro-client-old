System.register(['angular2/platform/browser', 'angular2/router', 'angular2/core', './components/components.app'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, core_1, components_app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (components_app_1_1) {
                components_app_1 = components_app_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(components_app_1.AppComponent, [
                router_1.ROUTER_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map