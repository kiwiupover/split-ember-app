'use strict';

define('headerapp/tests/app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('headerapp/tests/components/book-ends/component.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/book-ends/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/book-ends/component.js should pass jshint.');
  });
});
define('headerapp/tests/components/header-nav/component.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/header-nav/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/header-nav/component.js should pass jshint.');
  });
});
define('headerapp/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('headerapp/tests/helpers/destroy-app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('headerapp/tests/helpers/flash-message', ['exports', 'ember-cli-flash/flash/object'], function (exports, _emberCliFlashFlashObject) {

  _emberCliFlashFlashObject['default'].reopen({ init: function init() {} });
});
define('headerapp/tests/helpers/flash-message.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/flash-message.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/flash-message.js should pass jshint.');
  });
});
define('headerapp/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'headerapp/tests/helpers/start-app', 'headerapp/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _headerappTestsHelpersStartApp, _headerappTestsHelpersDestroyApp) {
  var resolve = _ember['default'].RSVP.resolve;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _headerappTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _headerappTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('headerapp/tests/helpers/module-for-acceptance.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('headerapp/tests/helpers/resolver', ['exports', 'headerapp/resolver', 'headerapp/config/environment'], function (exports, _headerappResolver, _headerappConfigEnvironment) {

  var resolver = _headerappResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _headerappConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _headerappConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('headerapp/tests/helpers/resolver.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('headerapp/tests/helpers/start-app', ['exports', 'ember', 'headerapp/app', 'headerapp/config/environment'], function (exports, _ember, _headerappApp, _headerappConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _headerappConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _headerappApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('headerapp/tests/helpers/start-app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('headerapp/tests/integration/components/book-ends/component-test', ['exports', 'ember-qunit', 'htmlbars-inline-precompile'], function (exports, _emberQunit, _htmlbarsInlinePrecompile) {
  var _templateObject = _taggedTemplateLiteral(['{{book-ends}}'], ['{{book-ends}}']),
      _templateObject2 = _taggedTemplateLiteral(['\n    {{#book-ends}}\n      template block text\n    {{/book-ends}}\n  '], ['\n    {{#book-ends}}\n      template block text\n    {{/book-ends}}\n  ']);

  function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  (0, _emberQunit.moduleForComponent)('book-ends', 'Integration | Component | book ends', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render((0, _htmlbarsInlinePrecompile['default'])(_templateObject));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render((0, _htmlbarsInlinePrecompile['default'])(_templateObject2));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('headerapp/tests/integration/components/book-ends/component-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/book-ends/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/book-ends/component-test.js should pass jshint.');
  });
});
define('headerapp/tests/integration/components/header-nav/component-test', ['exports', 'ember-qunit', 'htmlbars-inline-precompile'], function (exports, _emberQunit, _htmlbarsInlinePrecompile) {
  var _templateObject = _taggedTemplateLiteral(['{{header-nav}}'], ['{{header-nav}}']),
      _templateObject2 = _taggedTemplateLiteral(['\n    {{#header-nav}}\n      template block text\n    {{/header-nav}}\n  '], ['\n    {{#header-nav}}\n      template block text\n    {{/header-nav}}\n  ']);

  function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  (0, _emberQunit.moduleForComponent)('header-nav', 'Integration | Component | header nav', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render((0, _htmlbarsInlinePrecompile['default'])(_templateObject));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render((0, _htmlbarsInlinePrecompile['default'])(_templateObject2));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('headerapp/tests/integration/components/header-nav/component-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/header-nav/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/header-nav/component-test.js should pass jshint.');
  });
});
define('headerapp/tests/resolver.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('headerapp/tests/router.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('headerapp/tests/routes/details.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | routes/details.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/details.js should pass jshint.');
  });
});
define('headerapp/tests/test-helper', ['exports', 'headerapp/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (exports, _headerappTestsHelpersResolver, _emberQunit, _emberCliQunit) {

  (0, _emberQunit.setResolver)(_headerappTestsHelpersResolver['default']);
  (0, _emberCliQunit.start)();
});
define('headerapp/tests/test-helper.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('headerapp/tests/unit/routes/details-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:details', 'Unit | Route | details', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('headerapp/tests/unit/routes/details-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/routes/details-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/details-test.js should pass jshint.');
  });
});
require('headerapp/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
