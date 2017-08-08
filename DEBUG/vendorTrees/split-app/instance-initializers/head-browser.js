define('split-app/instance-initializers/head-browser', ['exports', 'split-app/config/environment'], function (exports, _splitAppConfigEnvironment) {
  exports.initialize = _initialize;

  function _initialize(owner) {
    if (_splitAppConfigEnvironment['default']['ember-cli-head'] && _splitAppConfigEnvironment['default']['ember-cli-head']['suppressBrowserRender']) {
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