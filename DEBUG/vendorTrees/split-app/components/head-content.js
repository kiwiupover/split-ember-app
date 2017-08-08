define('split-app/components/head-content', ['exports', 'ember', 'split-app/templates/head'], function (exports, _ember, _splitAppTemplatesHead) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: '',
    model: _ember['default'].inject.service('head-data'),
    layout: _splitAppTemplatesHead['default']
  });
});