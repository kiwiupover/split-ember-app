"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('lyrvapp/app', ['exports', 'ember', 'lyrvapp/resolver', 'ember-load-initializers'], function (exports, _ember, _lyrvappResolver, _emberLoadInitializers) {
  'use strict';

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    rootElement: '#lyrv-app',
    modulePrefix: 'lyrvapp',
    podModulePrefix: 'lyrvapp',
    Resolver: _lyrvappResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, 'lyrvapp');

  exports['default'] = App;
});
define('lyrvapp/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  exports['default'] = _emberResolver['default'];
});
define('lyrvapp/router', ['exports', 'ember', 'lyrvapp/config/environment'], function (exports, _ember, _lyrvappConfigEnvironment) {
  'use strict';

  var Router = _ember['default'].Router.extend({
    location: 'none',
    rootURL: _lyrvappConfigEnvironment['default'].rootURL
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define("lyrvapp/templates/application", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template({ "id": "lFDMjAPQ", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"book-ends\"]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"List your RV\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "templates/application.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('lyrvapp/config/environment', ['ember'], function(Ember) {
  var exports = {'default': {"modulePrefix":"split-app","environment":"development","rootURL":"/","locationType":"auto","EmberENV":{"FEATURES":{},"EXTEND_PROTOTYPES":{"Date":false}},"APP":{"name":"split-app","version":"0.0.0+210d3ffa"},"exportApplicationGlobal":true}};Object.defineProperty(exports, '__esModule', {value: true});return exports;
});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("lyrvapp/app")["default"].create({"name":"split-app","version":"0.0.0+210d3ffa"});
}

/* jshint ignore:end */
//# sourceMappingURL=lyrvapp.map
