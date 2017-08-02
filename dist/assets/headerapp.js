"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('headerapp/app', ['exports', 'ember', 'headerapp/resolver', 'ember-load-initializers'], function (exports, _ember, _headerappResolver, _emberLoadInitializers) {
  'use strict';

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    rootElement: '#ember-app',
    modulePrefix: 'headerapp',
    podModulePrefix: 'headerapp',
    Resolver: _headerappResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, 'headerapp');

  exports['default'] = App;
});
define('headerapp/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  exports['default'] = _emberResolver['default'];
});
define('headerapp/router', ['exports', 'ember', 'headerapp/config/environment'], function (exports, _ember, _headerappConfigEnvironment) {
  'use strict';

  var Router = _ember['default'].Router.extend({
    location: 'none',
    rootURL: _headerappConfigEnvironment['default'].rootURL
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define("headerapp/templates/application", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template({ "id": "HSj3V4M2", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"book-ends\"]],false],[\"text\",\"\\nsa;dfjakslfdasfdasfhdkjlsahf\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "templates/application.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('headerapp/config/environment', ['ember'], function(Ember) {
  var exports = {'default': {"modulePrefix":"split-app","environment":"development","rootURL":"/","locationType":"auto","EmberENV":{"FEATURES":{},"EXTEND_PROTOTYPES":{"Date":false}},"APP":{"name":"split-app","version":"0.0.0+210d3ffa"},"exportApplicationGlobal":true}};Object.defineProperty(exports, '__esModule', {value: true});return exports;
});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("headerapp/app")["default"].create({"name":"split-app","version":"0.0.0+210d3ffa"});
}

/* jshint ignore:end */
//# sourceMappingURL=headerapp.map
