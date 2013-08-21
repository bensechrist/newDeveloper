
/*
 * Do some configuration for RequireJS.
 * 
 * Paths defines aliases for modules. So, modules can simply say they need jquery and
 * not need to know where the library actually lives.
 *
 * The shim key allows libraries that aren't AMD-compatible to still work.
 */ 
require.config({
  paths: {
    jquery : "lib/jquery.min",
    underscore: "lib/underscore.min",
    backbone: "lib/backbone.min",
    text: "lib/requirejs.text",
  },
  shim: {
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    underscore: {
      exports: "_"
    }
  }
});

/**
 * Start the app by declaring an app dependency. When the app has loaded (and all of its
 * dependencies), we'll initialize it.
 */
require([
  'app'
], function(App) {
  App.initialize();
});
