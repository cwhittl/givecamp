'use strict';

define('djember-sample/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/basketitem.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/basketitem.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('application/adapter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/adapter.js should pass ESLint\n\n');
  });

  QUnit.test('application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'application/route.js should pass ESLint\n\n17:37 - Strings must use singlequote. (quotes)');
  });

  QUnit.test('application/serializer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/serializer.js should pass ESLint\n\n');
  });

  QUnit.test('authenticators/django.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'authenticators/django.js should pass ESLint\n\n9:3 - Unexpected var, use let or const instead. (no-var)\n18:5 - Unexpected var, use let or const instead. (no-var)\n76:9 - Strings must use singlequote. (quotes)\n77:9 - Strings must use singlequote. (quotes)\n78:9 - Strings must use singlequote. (quotes)');
  });

  QUnit.test('authorizers/django.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authorizers/django.js should pass ESLint\n\n');
  });

  QUnit.test('components/main-menu/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/main-menu/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/options-getter/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/options-getter/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/product-card/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/product-card/component.js should pass ESLint\n\n12:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/shopping-cart/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/shopping-cart/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/tab-content/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tab-content/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/tab-set/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tab-set/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/user-info/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/user-info/component.js should pass ESLint\n\n8:1 - Trailing spaces not allowed. (no-trailing-spaces)\n11:1 - Trailing spaces not allowed. (no-trailing-spaces)\n14:7 - Unexpected var, use let or const instead. (no-var)');
  });

  QUnit.test('djember/app/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember/app/route.js should pass ESLint\n\n');
  });

  QUnit.test('djember/form/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember/form/route.js should pass ESLint\n\n');
  });

  QUnit.test('djember/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember/index/route.js should pass ESLint\n\n');
  });

  QUnit.test('djember/list/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember/list/route.js should pass ESLint\n\n');
  });

  QUnit.test('djember/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember/route.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/pretty-print.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/pretty-print.js should pass ESLint\n\n');
  });

  QUnit.test('index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'index/route.js should pass ESLint\n\n117:17 - Unexpected console statement. (no-console)');
  });

  QUnit.test('initializers/django.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'initializers/django.js should pass ESLint\n\n5:10 - Gratuitous parentheses around expression. (no-extra-parens)\n16:32 - Strings must use singlequote. (quotes)\n17:1 - Trailing spaces not allowed. (no-trailing-spaces)');
  });

  QUnit.test('login/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'login/controller.js should pass ESLint\n\n');
  });

  QUnit.test('login/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'login/route.js should pass ESLint\n\n5:1 - Trailing spaces not allowed. (no-trailing-spaces)');
  });

  QUnit.test('logout/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'logout/controller.js should pass ESLint\n\n');
  });

  QUnit.test('logout/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'logout/route.js should pass ESLint\n\n5:1 - Trailing spaces not allowed. (no-trailing-spaces)');
  });

  QUnit.test('models/accounting/invoice.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/accounting/invoice.js should pass ESLint\n\n');
  });

  QUnit.test('models/accounting/invoiceline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/accounting/invoiceline.js should pass ESLint\n\n');
  });

  QUnit.test('models/base/accounting/invoice.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/base/accounting/invoice.js should pass ESLint\n\n');
  });

  QUnit.test('models/base/accounting/invoiceline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/base/accounting/invoiceline.js should pass ESLint\n\n');
  });

  QUnit.test('models/basketitem.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/basketitem.js should pass ESLint\n\n');
  });

  QUnit.test('models/userinfo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/userinfo.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('sections.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'sections.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/basketitem.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/basketitem.js should pass ESLint\n\n');
  });

  QUnit.test('services/cart.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/cart.js should pass ESLint\n\n');
  });

  QUnit.test('services/session.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/session.js should pass ESLint\n\n26:13 - Strings must use singlequote. (quotes)\n27:13 - Strings must use singlequote. (quotes)\n28:13 - Strings must use singlequote. (quotes)\n38:11 - Unexpected console statement. (no-console)');
  });

  QUnit.test('shop/basket/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shop/basket/route.js should pass ESLint\n\n');
  });

  QUnit.test('shop/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shop/index/route.js should pass ESLint\n\n');
  });

  QUnit.test('transitions.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'transitions.js should pass ESLint\n\n6:2 - Trailing spaces not allowed. (no-trailing-spaces)');
  });
});
define('djember-sample/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
    if (window.server) {
      window.server.shutdown();
    }
  }
});
define('djember-sample/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function (...args) {
      (true && !(false) && Ember.deprecate(`DEPRECATED \`import { ${name} } from '../../tests/helpers/ember-power-select';\` is deprecated. Please, replace it with \`import { ${name} } from 'ember-power-select/test-support/helpers';\``, false, { until: '1.11.0', id: `ember-power-select-test-support-${name}` }));

      return fn(...args);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('djember-sample/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _test) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;


  const TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    const authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _test.default);
    }
  }

  function authenticateSession(app, sessionData) {
    const { __container__: container } = app;
    const session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return app.testHelpers.wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    const session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return app.testHelpers.wait();
  }
});
define('djember-sample/tests/helpers/ember-sortable/test-helpers', ['ember-sortable/helpers/drag', 'ember-sortable/helpers/reorder'], function () {
  'use strict';
});
define('djember-sample/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'djember-sample/tests/helpers/start-app', 'djember-sample/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name, options = {}) {
    (0, _qunit.module)(name, {
      beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach() {
        let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(() => (0, _destroyApp.default)(this.application));
      }
    });
  };

  const { RSVP: { resolve } } = Ember;
});
define('djember-sample/tests/helpers/resolver', ['exports', 'djember-sample/resolver', 'djember-sample/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('djember-sample/tests/helpers/sl/register-test-helpers', ['exports', 'djember-sample/tests/helpers/sl/synchronous'], function (exports, _synchronous) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = function () {
        Ember.Test.registerHelper('contains', _synchronous.contains);
        Ember.Test.registerHelper('Ajax', _synchronous.AjaxHelper);
        Ember.Test.registerHelper('requires', _synchronous.requires);
        Ember.Test.registerHelper('globalLibraries', _synchronous.globalLibraries);
    };
});
define('djember-sample/tests/helpers/sl/synchronous', ['exports', 'djember-sample/tests/helpers/sl/synchronous/ajax', 'djember-sample/tests/helpers/sl/synchronous/contains', 'djember-sample/tests/helpers/sl/synchronous/requires', 'djember-sample/tests/helpers/sl/synchronous/global-libraries'], function (exports, _ajax, _contains, _requires, _globalLibraries) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.globalLibraries = exports.requires = exports.contains = exports.AjaxHelper = undefined;
    exports.AjaxHelper = _ajax.default;
    exports.contains = _contains.default;
    exports.requires = _requires.default;
    exports.globalLibraries = _globalLibraries;
});
define('djember-sample/tests/helpers/sl/synchronous/ajax', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    /**
     * @module
     */

    /**
     * Sets up the Ajax events for unit tests
     *
     * @class
     */
    class AjaxHelper {

        /**
         * Emulate the beginning of an AJAX request
         *
         * @function
         * @static
         * @param {String} [endpoint]
         * @returns {undefined}
         */
        static begin(endpoint) {
            Ember.run(() => {
                if (endpoint) {
                    Ember.$(document).trigger('ajaxSend', [null, { url: endpoint }]);
                } else {
                    Ember.$(document).trigger('ajaxStart');
                }
            });
        }

        /**
         * Emulate the conclusion of an AJAX request
         *
         * @function
         * @static
         * @param {String} [endpoint]
         * @returns {undefined}
         */
        static end(endpoint) {
            Ember.run(() => {
                if (endpoint) {
                    Ember.$(document).trigger('ajaxComplete', [null, { url: endpoint }]);
                } else {
                    Ember.$(document).trigger('ajaxStop');
                }
            });
        }
    }

    exports.default = AjaxHelper;
});
define('djember-sample/tests/helpers/sl/synchronous/contains', ['exports', 'djember-sample/tests/helpers/sl/utils/utils'], function (exports, _utils) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = function () {
        const index = 3 === arguments.length ? 1 : 0;
        const underTest = arguments[index];
        const testFor = arguments[index + 1];

        /* jshint ignore:start */
        Ember.assert('First non-optional argument must be an array, string or object', ('object' === Ember.typeOf(underTest) || 'string' === Ember.typeOf(underTest) || 'array' === Ember.typeOf(underTest)) && 'symbol' !== typeof underTest);

        Ember.assert('Second non-optional argument must be an array, string or object', ('object' === Ember.typeOf(testFor) || 'string' === Ember.typeOf(testFor) || 'array' === Ember.typeOf(testFor)) && 'symbol' !== typeof testFor);
        /* jshint ignore:end */

        return (0, _utils.doArraysIntersect)((0, _utils.convertToArray)(underTest), (0, _utils.convertToArray)(testFor));
    };
});
define('djember-sample/tests/helpers/sl/synchronous/global-libraries', ['exports', 'sinon'], function (exports, _sinon) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.emberJquerySpy = exports.jquerySpy = exports.jqueryAliasSpy = undefined;
    exports.setupSpies = setupSpies;
    exports.triggerEvents = triggerEvents;
    exports.called = called;
    exports.restoreSpies = restoreSpies;
    exports.resetSpies = resetSpies;
    let jqueryAliasSpy = exports.jqueryAliasSpy = undefined;
    let jquerySpy = exports.jquerySpy = undefined;
    let emberJquerySpy = exports.emberJquerySpy = undefined;

    function setupSpies() {
        exports.jqueryAliasSpy = jqueryAliasSpy = _sinon.default.spy(window, '$');
        exports.jquerySpy = jquerySpy = _sinon.default.spy(window, 'jQuery');
        exports.emberJquerySpy = emberJquerySpy = _sinon.default.spy(Ember, '$');
    }

    function triggerEvents(component) {
        Ember.run(() => {
            ['willInsertElement', 'didInsertElement', 'willClearRender', 'willDestroyElement'].map(event => {
                component.trigger(event);
            });
        });
    }

    function called() {
        return jqueryAliasSpy.called || jquerySpy.called || emberJquerySpy.called;
    }

    function restoreSpies() {
        window.$.restore();
        window.jQuery.restore();
        Ember.$.restore();
    }

    function resetSpies() {
        jqueryAliasSpy.reset();
        jquerySpy.reset();
        emberJquerySpy.reset();
    }
});
define('djember-sample/tests/helpers/sl/synchronous/requires', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    /**
     * @module
     */

    /**
     * Test that an argument passed to a function is of the required type(s).
     *
     * @function
     * @param {Function} methodUnderTest
     * @param {Array} requiredTypes
     * @returns {Object}
     */
    const requiresHelper = function (methodUnderTest, requiredTypes) {
        const typesToTest = {
            'number': {
                required: false,
                testValue: 123987465,
                message: 'Parameter was a number'
            },
            'string': {
                required: false,
                testValue: 'testString',
                message: 'Parameter was a string'
            },
            'array': {
                required: false,
                testValue: [],
                message: 'Parameter was an array'
            },
            'object': {
                required: false,
                testValue: {},
                message: 'Parameter was an object'
            },
            'function': {
                required: false,
                testValue() {},
                message: 'Parameter was a function'
            },
            'undefined': {
                required: false,
                testValue: undefined,
                message: 'Parameter was undefined'
            },
            'boolean': {
                required: false,
                testValue: true,
                message: 'Parameter was a boolean'
            },
            'null': {
                required: false,
                testValue: null,
                message: 'Parameter was null'
            }
        };

        Ember.assert('First argument must be a function', 'function' === Ember.typeOf(methodUnderTest));
        Ember.assert('Second argument must be an array', 'array' === Ember.typeOf(requiredTypes));

        // Set required parameter types
        requiredTypes.forEach(item => {
            typesToTest[item]['required'] = true;
        });

        const testsThatHaveFailed = [];
        let property;

        // Test each parameter type
        for (property in typesToTest) {
            if (typesToTest.hasOwnProperty(property)) {
                // Reset flag
                let assertionThrown;
                assertionThrown = false;

                // Assign cleaner object reference
                const parameter = typesToTest[property];

                // Test parameter
                try {
                    methodUnderTest(parameter['testValue']);
                } catch (error) {
                    assertionThrown = true;
                }

                let assertionPassed;
                assertionPassed = parameter['required'] ? !assertionThrown : assertionThrown;

                if (!assertionPassed) {
                    testsThatHaveFailed.push(parameter['message']);
                }
            }
        }

        return {
            requires: 0 === testsThatHaveFailed.length,
            messages: testsThatHaveFailed.join('; ')
        };
    };

    exports.default = requiresHelper;
});
define('djember-sample/tests/helpers/sl/utils/utils', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    /**
     * @module
     */

    /**
     * Converts provided parameter into an array
     *
     * @function
     * @param {Array|String|Object} underTest
     * @throws {ember.assert} If not provided an Array, String or Object
     * @returns {Array}
     */
    const convertToArray = function (underTest) {

        /* jshint ignore:start */
        Ember.assert('Array, String, or Object must be supplied', ('array' === Ember.typeOf(underTest) || 'string' === Ember.typeOf(underTest) || 'object' === Ember.typeOf(underTest)) && 'symbol' !== typeof underTest);
        /* jshint ignore:end */

        let returnArray = underTest;

        switch (Ember.typeOf(underTest)) {
            case 'array':
                returnArray = underTest;
                break;

            case 'string':
                returnArray = convertStringToArray(underTest);
                break;

            case 'object':
                returnArray = convertObjectKeysToArray(underTest);
                break;
        }

        return returnArray;
    };

    /**
     * Splits a string into an array of individual "words" as delineated by spaces
     *
     * Primarily exists to convert format of call to .prop( 'class' )
     *
     * @function
     * @param {String} underTest
     * @throws {ember.assert} If argument is not provided or is not a string
     * @returns {Array}
     */
    const convertStringToArray = function (underTest) {

        Ember.assert('String must be supplied', 'string' === Ember.typeOf(underTest));

        return underTest.split(' ');
    };

    /**
     * Returns an array containing all of the property names of an object
     *
     * Property names are only extracted from the object provided.  No recursion into nested objects occurs.
     *
     * @function
     * @param {Object} underTest
     * @throws {ember.assert} If argument is not provided or is not an object
     * @returns {Array}
     */
    const convertObjectKeysToArray = function (underTest) {

        /* jshint ignore:start */
        Ember.assert('Object must be supplied', 'object' === Ember.typeOf(underTest) && 'array' !== Ember.typeOf(underTest) && 'symbol' !== typeof underTest);
        /* jshint ignore:end */

        return Object.keys(underTest);
    };

    /**
     * Whether at least one element of the array exists in the other
     *
     * @function
     * @param {Array} underTest
     * @param {Array} testFor
     * @returns {Boolean}
     */
    const doArraysIntersect = function (underTest, testFor) {

        Ember.assert('Parameters must be Arrays', 'array' === Ember.typeOf(underTest) && 'array' === Ember.typeOf(testFor));

        return testFor.some(function (v) {
            return underTest.indexOf(v) >= 0;
        });
    };

    exports.convertToArray = convertToArray;
    exports.convertStringToArray = convertStringToArray;
    exports.convertObjectKeysToArray = convertObjectKeysToArray;
    exports.doArraysIntersect = doArraysIntersect;
});
define('djember-sample/tests/helpers/start-app', ['exports', 'djember-sample/tests/helpers/sl/register-test-helpers', 'djember-sample/app', 'djember-sample/config/environment'], function (exports, _registerTestHelpers, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    let attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(() => {
      let application = _app.default.create(attributes);
      application.setupForTesting();
      (0, _registerTestHelpers.default)();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('djember-sample/tests/templates.template.lint-test', [], function () {
  'use strict';

  QUnit.module('TemplateLint');

  QUnit.test('djember-sample/application/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'djember-sample/application/template.hbs should pass TemplateLint.\n\ndjember-sample/application/template.hbs\n  22:68  error  Self-closing a void element is redundant  self-closing-void-elements\n  24:58  error  Self-closing a void element is redundant  self-closing-void-elements\n  26:63  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('djember-sample/components/main-menu/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/components/main-menu/template.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/components/options-getter/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'djember-sample/components/options-getter/template.hbs should pass TemplateLint.\n\ndjember-sample/components/options-getter/template.hbs\n  3:0  error  Incorrect indentation for `{{pretty-print}}` beginning at L3:C0. Expected `{{pretty-print}}` to be at an indentation of 4 but was found at 0.  block-indentation\n');
  });

  QUnit.test('djember-sample/components/product-card/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'djember-sample/components/product-card/template.hbs should pass TemplateLint.\n\ndjember-sample/components/product-card/template.hbs\n  4:2  error  Self-closing a void element is redundant  self-closing-void-elements\n  4:7  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('djember-sample/components/shopping-cart/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/components/shopping-cart/template.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/components/tab-content/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/components/tab-content/template.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/components/tab-set/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/components/tab-set/template.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/components/user-info/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/components/user-info/template.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/djember/form/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/djember/form/template.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/djember/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/djember/index/template.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/djember/list/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/djember/list/template.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/djember/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/djember/template.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/index/template.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/login/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/login/template.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/logout/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/logout/template.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/shop/basket/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'djember-sample/shop/basket/template.hbs should pass TemplateLint.\n\ndjember-sample/shop/basket/template.hbs\n  29:4  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('djember-sample/shop/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/shop/index/template.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/accounting-endpoints.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/accounting-endpoints.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/actions-structure.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/actions-structure.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/app-structure.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/app-structure.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/backend-code.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/backend-code.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/base-invoice-js.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/base-invoice-js.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/bootstrap-code.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/bootstrap-code.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/crm-endpoints.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/crm-endpoints.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/djember/form/loading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/djember/form/loading.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/djember/list/loading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/djember/list/loading.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/djember/loading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/djember/loading.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/fields-structure.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/fields-structure.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/form-structure.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/form-structure.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/frontend-code.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/frontend-code.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/image-upload.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/image-upload.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/invoice-js.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/invoice-js.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/invoiceline-js.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/invoiceline-js.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/list-structure.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/list-structure.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/loading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/loading.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/models-structure.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/models-structure.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('djember-sample/templates/products-endpoints.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'djember-sample/templates/products-endpoints.hbs should pass TemplateLint.\n\n');
  });
});
define('djember-sample/tests/test-helper', ['djember-sample/app', 'djember-sample/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('djember-sample/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/module-for-acceptance.js should pass ESLint\n\n19:11 - \'afterEach\' is never reassigned. Use \'const\' instead. (prefer-const)\n20:44 - Expected block statement surrounding arrow body. (arrow-body-style)');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/start-app.js should pass ESLint\n\n11:9 - \'application\' is never reassigned. Use \'const\' instead. (prefer-const)');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/accounting/invoice-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/models/accounting/invoice-test.js should pass ESLint\n\n9:7 - \'model\' is never reassigned. Use \'const\' instead. (prefer-const)');
  });

  QUnit.test('unit/models/accounting/invoiceline-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/models/accounting/invoiceline-test.js should pass ESLint\n\n9:7 - \'model\' is never reassigned. Use \'const\' instead. (prefer-const)');
  });
});
define('djember-sample/tests/unit/models/accounting/invoice-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('accounting/invoice', 'Unit | Model | accounting/invoice', {
    // Specify the other units that are required for this test.
    needs: ['model:accounting/invoiceline', 'model:crm/company']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('djember-sample/tests/unit/models/accounting/invoiceline-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('accounting/invoiceline', 'Unit | Model | accounting/invoiceline', {
    // Specify the other units that are required for this test.
    needs: ['model:accounting/invoice', 'model:products/product']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('djember-sample/config/environment', [], function() {
  var prefix = 'djember-sample';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('djember-sample/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
