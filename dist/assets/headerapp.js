"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('headerapp/app', ['exports', 'ember', 'headerapp/resolver', 'ember-load-initializers', 'headerapp/config/environment'], function (exports, _ember, _headerappResolver, _emberLoadInitializers, _headerappConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _headerappConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _headerappConfigEnvironment['default'].podModulePrefix,
    Resolver: _headerappResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _headerappConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('headerapp/components/book-ends/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("headerapp/components/book-ends/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "qLSUZsdx", "block": "{\"statements\":[[\"text\",\"jflaskfdafdajfd;lsajfds;lafdasjf;dsa;skda;sdjfsa\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "headerapp/components/book-ends/template.hbs" } });
});
define('headerapp/components/header-nav/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("headerapp/components/header-nav/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "oQShzFwz", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"HEADER HEADER HEADER\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "headerapp/components/header-nav/template.hbs" } });
});
define('headerapp/helpers/app-version', ['exports', 'ember', 'headerapp/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _headerappConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _headerappConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('headerapp/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('headerapp/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('headerapp/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'headerapp/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _headerappConfigEnvironment) {
  var _config$APP = _headerappConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('headerapp/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('headerapp/initializers/data-adapter', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('headerapp/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _emberDataSetupContainer, _emberData) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('headerapp/initializers/export-application-global', ['exports', 'ember', 'headerapp/config/environment'], function (exports, _ember, _headerappConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_headerappConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _headerappConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_headerappConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('headerapp/initializers/injectStore', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('headerapp/initializers/store', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('headerapp/initializers/transforms', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("headerapp/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _emberDataInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataInstanceInitializersInitializeStoreService["default"]
  };
});
define('headerapp/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('headerapp/router', ['exports', 'ember', 'headerapp/config/environment'], function (exports, _ember, _headerappConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: 'auto',
    rootURL: _headerappConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('details');
  });

  exports['default'] = Router;
});
define('headerapp/routes/details', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('headerapp/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("headerapp/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "54dz1D10", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"header-nav\"]],false],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"book-ends\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "headerapp/templates/application.hbs" } });
});
define("headerapp/templates/details", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "SskTqMpc", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "headerapp/templates/details.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('split-app/config/environment', ['ember'], function(Ember) {
  var exports = {'default': {"modulePrefix":"split-app","environment":"development","rootURL":"/","locationType":"auto","EmberENV":{"FEATURES":{},"EXTEND_PROTOTYPES":{"Date":false}},"APP":{"name":"split-app","version":"0.0.0+72d53e20"},"exportApplicationGlobal":true}};Object.defineProperty(exports, '__esModule', {value: true});return exports;
});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("split-app/app")["default"].create({"name":"split-app","version":"0.0.0+72d53e20"});
}

/* jshint ignore:end */
//# sourceMappingURL=headerapp.map
