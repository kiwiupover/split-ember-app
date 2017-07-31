"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('split-app/app', ['exports', 'ember', 'split-app/resolver', 'ember-load-initializers', 'split-app/config/environment'], function (exports, _ember, _splitAppResolver, _emberLoadInitializers, _splitAppConfigEnvironment) {
  'use strict';

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    rootElement: '#ember-app',
    modulePrefix: _splitAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _splitAppConfigEnvironment['default'].podModulePrefix,
    Resolver: _splitAppResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _splitAppConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('split-app/components/book-ends/component', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    dave: 'Dave Laird'
  });
});
define("split-app/components/book-ends/template", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template({ "id": "SxFH/SgW", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Dave is: \"],[\"append\",[\"unknown\",[\"dave\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "components/book-ends/template.hbs" } });
});
define('split-app/router', ['exports', 'ember', 'split-app/config/environment'], function (exports, _ember, _splitAppConfigEnvironment) {
  'use strict';

  var Router = _ember['default'].Router.extend({
    location: 'none',
    rootURL: _splitAppConfigEnvironment['default'].rootURL
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define("split-app/templates/application", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template({ "id": "HSj3V4M2", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"book-ends\"]],false],[\"text\",\"\\nsa;dfjakslfdasfdasfhdkjlsahf\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "templates/application.hbs" } });
});
define('split-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('split-app/config/environment', ['ember'], function(Ember) {
  var exports = {'default': {"modulePrefix":"split-app","environment":"development","rootURL":"/","locationType":"auto","EmberENV":{"FEATURES":{},"EXTEND_PROTOTYPES":{"Date":false}},"APP":{"name":"split-app","version":"0.0.0+23b5f9e5"},"exportApplicationGlobal":true}};Object.defineProperty(exports, '__esModule', {value: true});return exports;
});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("split-app/app")["default"].create({"name":"split-app","version":"0.0.0+23b5f9e5"});
}

/* jshint ignore:end */
//# sourceMappingURL=headerapp.map
