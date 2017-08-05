"use strict";



define('headerapp/app', ['exports', 'ember', 'headerapp/resolver', 'ember-load-initializers', 'headerapp/config/environment'], function (exports, _ember, _headerappResolver, _emberLoadInitializers, _headerappConfigEnvironment) {

  var App = _ember['default'].Application.extend({
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
define('headerapp/components/flash-message', ['exports', 'ember-cli-flash/components/flash-message'], function (exports, _emberCliFlashComponentsFlashMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashComponentsFlashMessage['default'];
    }
  });
});
define('headerapp/components/head-content', ['exports', 'ember', 'headerapp/templates/head'], function (exports, _ember, _headerappTemplatesHead) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: '',
    model: _ember['default'].inject.service('head-data'),
    layout: _headerappTemplatesHead['default']
  });
});
define('headerapp/components/head-layout', ['exports', 'ember', 'ember-cli-head/templates/components/head-layout'], function (exports, _ember, _emberCliHeadTemplatesComponentsHeadLayout) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: '',
    layout: _emberCliHeadTemplatesComponentsHeadLayout['default']
  });
});
define('headerapp/components/header-nav/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("headerapp/components/header-nav/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "oQShzFwz", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"HEADER HEADER HEADER\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "headerapp/components/header-nav/template.hbs" } });
});
define('headerapp/flash/object', ['exports', 'ember-cli-flash/flash/object'], function (exports, _emberCliFlashFlashObject) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashFlashObject['default'];
    }
  });
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
define('headerapp/initializers/flash-messages', ['exports', 'ember', 'headerapp/config/environment'], function (exports, _ember, _headerappConfigEnvironment) {
  exports.initialize = initialize;
  var deprecate = _ember['default'].deprecate;

  var merge = _ember['default'].assign || _ember['default'].merge;
  var INJECTION_FACTORIES_DEPRECATION_MESSAGE = '[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.';
  var addonDefaults = {
    timeout: 3000,
    extendedTimeout: 0,
    priority: 100,
    sticky: false,
    showProgress: false,
    type: 'info',
    types: ['success', 'info', 'warning', 'danger', 'alert', 'secondary'],
    injectionFactories: ['route', 'controller', 'view', 'component'],
    preventDuplicates: false
  };

  function initialize() {
    var application = arguments[1] || arguments[0];

    var _ref = _headerappConfigEnvironment['default'] || {};

    var flashMessageDefaults = _ref.flashMessageDefaults;

    var _ref2 = flashMessageDefaults || [];

    var injectionFactories = _ref2.injectionFactories;

    var options = merge(addonDefaults, flashMessageDefaults);
    var shouldShowDeprecation = !(injectionFactories && injectionFactories.length);

    application.register('config:flash-messages', options, { instantiate: false });
    application.inject('service:flash-messages', 'flashMessageDefaults', 'config:flash-messages');

    deprecate(INJECTION_FACTORIES_DEPRECATION_MESSAGE, shouldShowDeprecation, {
      id: 'ember-cli-flash.deprecate-injection-factories',
      until: '2.0.0'
    });

    options.injectionFactories.forEach(function (factory) {
      application.inject(factory, 'flashMessages', 'service:flash-messages');
    });
  }

  exports['default'] = {
    name: 'flash-messages',
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
define('headerapp/instance-initializers/head-browser', ['exports', 'headerapp/config/environment'], function (exports, _headerappConfigEnvironment) {
  exports.initialize = _initialize;

  function _initialize(owner) {
    if (_headerappConfigEnvironment['default']['ember-cli-head'] && _headerappConfigEnvironment['default']['ember-cli-head']['suppressBrowserRender']) {
      return true;
    }

    // clear fast booted head (if any)
    var startMeta = document.querySelector('meta[name="ember-cli-head-start"]');
    var endMeta = document.querySelector('meta[name="ember-cli-head-end"]');
    if (startMeta && endMeta) {
      var el = startMeta.nextSibling;
      while (el && el !== endMeta) {
        document.head.removeChild(el);
        el = startMeta.nextSibling;
      }
      document.head.removeChild(startMeta);
      document.head.removeChild(endMeta);
    }

    var component = owner.lookup('component:head-layout');
    component.appendTo(document.head);
  }

  exports['default'] = {
    name: 'head-browser',
    initialize: function initialize() {
      if (typeof FastBoot === 'undefined') {
        _initialize.apply(undefined, arguments);
      }
    }
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
define('headerapp/services/flash-messages', ['exports', 'ember-cli-flash/services/flash-messages'], function (exports, _emberCliFlashServicesFlashMessages) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashServicesFlashMessages['default'];
    }
  });
});
define('headerapp/services/head-data', ['exports', 'ember-cli-head/services/head-data'], function (exports, _emberCliHeadServicesHeadData) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliHeadServicesHeadData['default'];
    }
  });
});
define("headerapp/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "54dz1D10", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"header-nav\"]],false],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"book-ends\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "headerapp/templates/application.hbs" } });
});
define("headerapp/templates/details", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "SskTqMpc", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "headerapp/templates/details.hbs" } });
});
define("headerapp/templates/head", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "/2lh9S8D", "block": "{\"statements\":[],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "headerapp/templates/head.hbs" } });
});


define('headerapp/config/environment', ['ember'], function(Ember) {
  var exports = {'default': {"modulePrefix":"headerapp","environment":"development","rootURL":"/","locationType":"auto","EmberENV":{"FEATURES":{},"EXTEND_PROTOTYPES":{"Date":false}},"APP":{"name":"split-app","version":"0.0.0+d0a8ce88"},"exportApplicationGlobal":true}};Object.defineProperty(exports, '__esModule', {value: true});return exports;
});

if (!runningTests) {
  require("headerapp/app")["default"].create({"name":"split-app","version":"0.0.0+d0a8ce88"});
}
//# sourceMappingURL=headerapp.map
