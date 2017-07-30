"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('headerapp/app', ['exports', 'ember', 'headerapp/resolver', 'ember-load-initializers', 'headerapp/config/environment'], function (exports, _ember, _headerappResolver, _emberLoadInitializers, _headerappConfigEnvironment) {
  'use strict';

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    rootElement: '#ember-app',
    modulePrefix: _headerappConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _headerappConfigEnvironment['default'].podModulePrefix,
    Resolver: _headerappResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _headerappConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('split-app/config/environment', ['ember'], function(Ember) {
  var exports = {'default': {"modulePrefix":"split-app","environment":"development","rootURL":"/","locationType":"auto","EmberENV":{"FEATURES":{},"EXTEND_PROTOTYPES":{"Date":false}},"APP":{"name":"split-app","version":"0.0.0+c3cc4e14"},"exportApplicationGlobal":true}};Object.defineProperty(exports, '__esModule', {value: true});return exports;
});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("split-app/app")["default"].create({"name":"split-app","version":"0.0.0+c3cc4e14"});
}

/* jshint ignore:end */
//# sourceMappingURL=headerapp.map
