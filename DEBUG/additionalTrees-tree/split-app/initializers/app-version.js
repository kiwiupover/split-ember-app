define('split-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'split-app/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _splitAppConfigEnvironment) {
  var _config$APP = _splitAppConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});