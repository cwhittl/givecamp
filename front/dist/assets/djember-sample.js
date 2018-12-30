"use strict";



define('djember-sample/adapters/application', ['exports', 'djember-sample/adapters/drf'], function (exports, _drf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _drf.default;
});
define('djember-sample/adapters/basketitem', ['exports', 'ember-local-storage/adapters/adapter'], function (exports, _adapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _adapter.default;
    }
  });
});
define('djember-sample/adapters/drf', ['exports', 'ember-django-adapter/adapters/drf', 'djember-sample/config/environment'], function (exports, _drf, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _drf.default.extend({
    host: Ember.computed(function () {
      return _environment.default.APP.API_HOST;
    }),

    namespace: Ember.computed(function () {
      return _environment.default.APP.API_NAMESPACE;
    })
  });
});
define('djember-sample/app', ['exports', 'djember-sample/resolver', 'ember-load-initializers', 'djember-sample/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('djember-sample/application/adapter', ['exports', 'djember-sample/adapters/drf', 'ember-simple-auth/mixins/data-adapter-mixin'], function (exports, _drf, _dataAdapterMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _drf.default.extend(_dataAdapterMixin.default, {
    authorizer: 'authorizer:django',
    coalesceFindRequests: true
  });
});
define('djember-sample/application/route', ['exports', 'ember-simple-auth/mixins/application-route-mixin', 'djember-sample/sections'], function (exports, _applicationRouteMixin, _sections) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_applicationRouteMixin.default, {
    authenticator: 'authenticator:django',
    model() {
      return _sections.default;
    },
    actions: {
      authenticate(credentials) {
        const session = this.get('session');
        if (credentials.identification && credentials.password) {
          session.authenticate(this.get('authenticator'), credentials).then(() => {
            session.set('loginError', false);
          }, () => {
            session.set('loginError', "Invalid credentials. Please retry.");
          });
        }
      },
      invalidate() {
        this.get('session').invalidate();
      }
    }
  });
});
define('djember-sample/application/serializer', ['exports', 'djember-sample/serializers/drf'], function (exports, _drf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _drf.default.extend({});
});
define("djember-sample/application/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4058++qM", "block": "{\"symbols\":[\"flash\"],\"statements\":[[1,[20,\"ember-load-remover\"],false],[0,\"\\n\"],[6,\"nav\"],[10,\"class\",\"navbar navbar-default navbar-fixed-top main-nav material-nav\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"container-fluid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"navbar-header\"],[8],[0,\"\\n      \"],[1,[26,\"main-menu\",null,[[\"sections\"],[[22,[\"model\"]]]]],false],[0,\"\\n      \"],[6,\"a\"],[10,\"class\",\"navbar-brand\"],[11,\"href\",[27,[[26,\"href-to\",[\"index\"],null]]]],[8],[0,\"✨  Djember Sample ✨\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"navbar-right\"],[8],[0,\"\\n      \"],[1,[20,\"shopping-cart\"],false],[0,\"\\n      \"],[1,[26,\"user-info\",null,[[\"right\"],[true]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"main\"],[8],[0,\"\\n  \"],[1,[20,\"liquid-outlet\"],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"footer\"],[8],[0,\"\\n  \"],[6,\"nav\"],[10,\"class\",\"navbar navbar-inverse\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"navbar\"],[8],[0,\"\\n      \"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav navbar-right\"],[8],[0,\"\\n        \"],[6,\"li\"],[8],[6,\"span\"],[10,\"class\",\"separator\"],[8],[0,\"Built with\"],[9],[9],[0,\"\\n        \"],[6,\"li\"],[8],[6,\"a\"],[10,\"href\",\"http://www.djangoproject.com/\"],[10,\"target\",\"_blank\"],[8],[6,\"img\"],[10,\"class\",\"material-img\"],[10,\"src\",\"http://pixel-cookers.github.io/built-with-badges/django/django-short-flat.png\"],[10,\"border\",\"0\"],[10,\"alt\",\"Built with Django.\"],[10,\"title\",\"Built with Django.\"],[8],[9],[9],[9],[0,\"\\n        \"],[6,\"li\"],[8],[6,\"span\"],[10,\"class\",\"separator\"],[8],[0,\",\"],[9],[9],[0,\"\\n        \"],[6,\"li\"],[8],[6,\"a\"],[10,\"href\",\"http://emberjs.com/\"],[10,\"target\",\"_blank\"],[8],[6,\"img\"],[10,\"class\",\"material-img\"],[10,\"src\",\"http://pixel-cookers.github.io/built-with-badges/ember/ember-short-flat.png\"],[10,\"border\",\"0\"],[10,\"alt\",\"Built with Ember.\"],[10,\"title\",\"Built with Ember.\"],[8],[9],[9],[9],[0,\"\\n        \"],[6,\"li\"],[8],[6,\"span\"],[10,\"class\",\"separator\"],[8],[0,\"&\"],[9],[9],[0,\"\\n        \"],[6,\"li\"],[8],[6,\"a\"],[10,\"href\",\"http://getbootstrap.com/\"],[10,\"target\",\"_blank\"],[8],[6,\"img\"],[10,\"class\",\"material-img\"],[10,\"src\",\"http://pixel-cookers.github.io/built-with-badges/bootstrap/bootstrap-short-flat.png\"],[10,\"border\",\"0\"],[10,\"alt\",\"Built with Bootstrap.\"],[10,\"title\",\"Built with Ember.\"],[8],[9],[9],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[4,\"if\",[[26,\"gt\",[[22,[\"flashMessages\",\"queue\",\"length\"]],0],null]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"flash\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"flashMessages\",\"queue\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"flash-message\",null,[[\"flash\"],[[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"div\"],[10,\"id\",\"ember-basic-dropdown-wormhole\"],[8],[9],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/application/template.hbs" } });
});
define('djember-sample/authenticators/django', ['exports', 'ember-simple-auth/authenticators/base', 'djember-sample/config/environment', 'ember-network/fetch', 'ember-cli-js-cookie'], function (exports, _base, _environment, _fetch, _emberCliJsCookie) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function isSecureUrl(url) {
    var link = document.createElement('a');
    link.href = url;
    link.href = link.href;
    return link.protocol === 'https:';
  }

  exports.default = _base.default.extend({

    init() {
      var globalConfig = _environment.default['ember-simple-auth'] || {};
      this.serverAuthEndpoint = globalConfig.serverAuthEndpoint || '/rest-auth';
    },

    authenticate(credentials) {
      return new Ember.RSVP.Promise((resolve, reject) => {
        const data = { username: credentials.identification, password: credentials.password };
        this.makeRequest(`${this.serverAuthEndpoint}/login/`, data).then(response => {
          Ember.run(() => {
            resolve(response);
          });
        }, (xhr /*, status, error */) => {
          Ember.run(() => {
            reject(xhr.responseJSON || xhr.responseText);
          });
        });
      });
    },

    restore(data) {
      return new Ember.RSVP.Promise((resolve, reject) => {
        this.makeRequest(`${this.serverAuthEndpoint}/me/`, null, 'GET').then(() => /* response */{
          resolve(data);
        }, () => /* xhr , status, error */{
          reject();
          this.invalidate();
        });
      });
    },

    invalidate() /* data */{
      function success(resolve) {
        resolve();
      }
      return new Ember.RSVP.Promise((resolve /*, reject */) => {
        this.makeRequest(`${this.serverAuthEndpoint}/logout/`, {}).then(() => /* response */{
          Ember.run(() => {
            success(resolve);
          });
        }, () => /* xhr, status, error */{
          Ember.run(() => {
            success(resolve);
          });
        });
      });
    },

    makeRequest(url, data, method) {
      if (!isSecureUrl(url)) {
        Ember.Logger.warn('Credentials are transmitted via an insecure connection - use HTTPS to keep them secure.');
      }
      if (method === undefined) {
        method = 'POST';
      }
      const params = {
        method: method,
        headers: {
          "X-CSRFToken": _emberCliJsCookie.default.get('csrftoken'),
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      };
      if (method === 'POST') {
        params['body'] = JSON.stringify(data);
      } else if (method === 'GET' && window.$ !== undefined) {
        return new Ember.RSVP.Promise((resolve, reject) => {
          window.$.get(url, xhr => {
            resolve(xhr);
          }).fail(() => {
            reject();
          });
        });
      }

      return new Ember.RSVP.Promise((resolve, reject) => {
        (0, _fetch.default)(`${url}?format=json`, params).then(response => {
          if (response.status === 400) {
            response.json().then(json => {
              reject(json);
            });
          } else if (response.status > 400) {
            reject(response);
          } else {
            resolve(response);
          }
        }).catch(err => {
          reject(err);
        });
      });
    }
  });
});
define('djember-sample/authorizers/django', ['exports', 'ember-simple-auth/authorizers/base', 'ember-cli-js-cookie'], function (exports, _base, _emberCliJsCookie) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _base.default.extend({
    authorize(sessionData, block) {
      const csrftoken = _emberCliJsCookie.default.get('csrftoken');
      block('X-CSRFToken', csrftoken);
    }
  });
});
define("djember-sample/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (exports, _lfGetOutletState) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _lfGetOutletState.default;
    }
  });
});
define('djember-sample/components/action-wizard', ['exports', 'ember-cli-crudities/components/action-wizard'], function (exports, _actionWizard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _actionWizard.default;
    }
  });
});
define('djember-sample/components/app-breadcrumbs', ['exports', 'ember-cli-crudities/components/app-breadcrumbs'], function (exports, _appBreadcrumbs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _appBreadcrumbs.default;
    }
  });
});
define('djember-sample/components/app-dashboard', ['exports', 'ember-cli-crudities/components/app-dashboard'], function (exports, _appDashboard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _appDashboard.default;
    }
  });
});
define('djember-sample/components/app-menu', ['exports', 'ember-cli-crudities/components/app-menu'], function (exports, _appMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _appMenu.default;
    }
  });
});
define('djember-sample/components/base-collection', ['exports', 'ember-cli-crudities/components/base-collection'], function (exports, _baseCollection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _baseCollection.default;
    }
  });
});
define('djember-sample/components/base-widget', ['exports', 'ember-cli-crudities/components/base-widget'], function (exports, _baseWidget) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _baseWidget.default;
    }
  });
});
define('djember-sample/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
define('djember-sample/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _contentElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contentElement.default;
    }
  });
});
define('djember-sample/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('djember-sample/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('djember-sample/components/cf-buttons', ['exports', 'ember-cli-crudities/components/cf-buttons'], function (exports, _cfButtons) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cfButtons.default;
    }
  });
});
define('djember-sample/components/cf-conditional-formatting-block', ['exports', 'ember-cli-crudities/components/cf-conditional-formatting-block'], function (exports, _cfConditionalFormattingBlock) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cfConditionalFormattingBlock.default;
    }
  });
});
define('djember-sample/components/cf-custom-actions', ['exports', 'ember-cli-crudities/components/cf-custom-actions'], function (exports, _cfCustomActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cfCustomActions.default;
    }
  });
});
define('djember-sample/components/cf-form-errors', ['exports', 'ember-cli-crudities/components/cf-form-errors'], function (exports, _cfFormErrors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cfFormErrors.default;
    }
  });
});
define('djember-sample/components/cf-form', ['exports', 'ember-cli-crudities/components/cf-form'], function (exports, _cfForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cfForm.default;
    }
  });
});
define('djember-sample/components/change-form', ['exports', 'ember-cli-crudities/components/change-form'], function (exports, _changeForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _changeForm.default;
    }
  });
});
define('djember-sample/components/change-list', ['exports', 'ember-cli-crudities/components/change-list'], function (exports, _changeList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _changeList.default;
    }
  });
});
define('djember-sample/components/cl-aggregates', ['exports', 'ember-cli-crudities/components/cl-aggregates'], function (exports, _clAggregates) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _clAggregates.default;
    }
  });
});
define('djember-sample/components/cl-bulk-actions', ['exports', 'ember-cli-crudities/components/cl-bulk-actions'], function (exports, _clBulkActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _clBulkActions.default;
    }
  });
});
define('djember-sample/components/cl-headers', ['exports', 'ember-cli-crudities/components/cl-headers'], function (exports, _clHeaders) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _clHeaders.default;
    }
  });
});
define('djember-sample/components/cl-items', ['exports', 'ember-cli-crudities/components/cl-items'], function (exports, _clItems) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _clItems.default;
    }
  });
});
define('djember-sample/components/cl-legend', ['exports', 'ember-cli-crudities/components/cl-legend'], function (exports, _clLegend) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _clLegend.default;
    }
  });
});
define('djember-sample/components/cl-list-actions', ['exports', 'ember-cli-crudities/components/cl-list-actions'], function (exports, _clListActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _clListActions.default;
    }
  });
});
define('djember-sample/components/code-block', ['exports', 'ember-prism/components/code-block'], function (exports, _codeBlock) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _codeBlock.default;
});
define('djember-sample/components/code-inline', ['exports', 'ember-prism/components/code-inline'], function (exports, _codeInline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _codeInline.default;
});
define('djember-sample/components/conditional-display', ['exports', 'ember-cli-crudities/components/conditional-display'], function (exports, _conditionalDisplay) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _conditionalDisplay.default;
    }
  });
});
define('djember-sample/components/custom-action', ['exports', 'ember-cli-crudities/components/custom-action'], function (exports, _customAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _customAction.default;
    }
  });
});
define('djember-sample/components/download-or-link', ['exports', 'ember-cli-crudities/components/download-or-link'], function (exports, _downloadOrLink) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _downloadOrLink.default;
    }
  });
});
define('djember-sample/components/ember-load-remover', ['exports', 'ember-load/components/ember-load-remover'], function (exports, _emberLoadRemover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberLoadRemover.default;
    }
  });
});
define('djember-sample/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('djember-sample/components/flash-message', ['exports', 'ember-cli-flash/components/flash-message'], function (exports, _flashMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flashMessage.default;
    }
  });
});
define('djember-sample/components/foreignkey-base', ['exports', 'ember-cli-crudities/components/foreignkey-base'], function (exports, _foreignkeyBase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _foreignkeyBase.default;
    }
  });
});
define('djember-sample/components/form-action', ['exports', 'ember-cli-crudities/components/form-action'], function (exports, _formAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formAction.default;
    }
  });
});
define('djember-sample/components/form-checkbox', ['exports', 'ember-cli-crudities/components/form-checkbox'], function (exports, _formCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formCheckbox.default;
    }
  });
});
define('djember-sample/components/form-color', ['exports', 'ember-cli-crudities/components/form-color'], function (exports, _formColor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formColor.default;
    }
  });
});
define('djember-sample/components/form-date', ['exports', 'ember-cli-crudities/components/form-date'], function (exports, _formDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formDate.default;
    }
  });
});
define('djember-sample/components/form-datetime', ['exports', 'ember-cli-crudities/components/form-datetime'], function (exports, _formDatetime) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formDatetime.default;
    }
  });
});
define('djember-sample/components/form-duration', ['exports', 'ember-cli-crudities/components/form-duration'], function (exports, _formDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formDuration.default;
    }
  });
});
define('djember-sample/components/form-email', ['exports', 'ember-cli-crudities/components/form-email'], function (exports, _formEmail) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formEmail.default;
    }
  });
});
define('djember-sample/components/form-field', ['exports', 'ember-cli-crudities/components/form-field'], function (exports, _formField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formField.default;
    }
  });
});
define('djember-sample/components/form-fieldset', ['exports', 'ember-cli-crudities/components/form-fieldset'], function (exports, _formFieldset) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formFieldset.default;
    }
  });
});
define('djember-sample/components/form-file', ['exports', 'ember-cli-crudities/components/form-file'], function (exports, _formFile) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formFile.default;
    }
  });
});
define('djember-sample/components/form-foreignkey', ['exports', 'ember-cli-crudities/components/form-foreignkey'], function (exports, _formForeignkey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formForeignkey.default;
    }
  });
});
define('djember-sample/components/form-generic-foreignkey', ['exports', 'ember-cli-crudities/components/form-generic-foreignkey'], function (exports, _formGenericForeignkey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formGenericForeignkey.default;
    }
  });
});
define('djember-sample/components/form-image-url', ['exports', 'ember-cli-crudities/components/form-image-url'], function (exports, _formImageUrl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formImageUrl.default;
    }
  });
});
define('djember-sample/components/form-image', ['exports', 'ember-cli-crudities/components/form-image'], function (exports, _formImage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formImage.default;
    }
  });
});
define('djember-sample/components/form-input', ['exports', 'ember-cli-crudities/components/form-input'], function (exports, _formInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formInput.default;
    }
  });
});
define('djember-sample/components/form-json-fieldset', ['exports', 'ember-cli-crudities/components/form-json-fieldset'], function (exports, _formJsonFieldset) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formJsonFieldset.default;
    }
  });
});
define('djember-sample/components/form-manytomany-lists', ['exports', 'ember-cli-crudities/components/form-manytomany-lists'], function (exports, _formManytomanyLists) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formManytomanyLists.default;
    }
  });
});
define('djember-sample/components/form-manytomany-select', ['exports', 'ember-cli-crudities/components/form-manytomany-select'], function (exports, _formManytomanySelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formManytomanySelect.default;
    }
  });
});
define('djember-sample/components/form-markdown', ['exports', 'ember-cli-crudities/components/form-markdown'], function (exports, _formMarkdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formMarkdown.default;
    }
  });
});
define('djember-sample/components/form-month', ['exports', 'ember-cli-crudities/components/form-month'], function (exports, _formMonth) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formMonth.default;
    }
  });
});
define('djember-sample/components/form-null-boolean', ['exports', 'ember-cli-crudities/components/form-null-boolean'], function (exports, _formNullBoolean) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formNullBoolean.default;
    }
  });
});
define('djember-sample/components/form-number', ['exports', 'ember-cli-crudities/components/form-number'], function (exports, _formNumber) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formNumber.default;
    }
  });
});
define('djember-sample/components/form-secret', ['exports', 'ember-cli-crudities/components/form-secret'], function (exports, _formSecret) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formSecret.default;
    }
  });
});
define('djember-sample/components/form-select', ['exports', 'ember-cli-crudities/components/form-select'], function (exports, _formSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formSelect.default;
    }
  });
});
define('djember-sample/components/form-tabset', ['exports', 'ember-cli-crudities/components/form-tabset'], function (exports, _formTabset) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formTabset.default;
    }
  });
});
define('djember-sample/components/form-tel', ['exports', 'ember-cli-crudities/components/form-tel'], function (exports, _formTel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formTel.default;
    }
  });
});
define('djember-sample/components/form-text', ['exports', 'ember-cli-crudities/components/form-text'], function (exports, _formText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formText.default;
    }
  });
});
define('djember-sample/components/form-textarea', ['exports', 'ember-cli-crudities/components/form-textarea'], function (exports, _formTextarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formTextarea.default;
    }
  });
});
define('djember-sample/components/form-time', ['exports', 'ember-cli-crudities/components/form-time'], function (exports, _formTime) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formTime.default;
    }
  });
});
define('djember-sample/components/form-tomany-list-detail', ['exports', 'ember-cli-crudities/components/form-tomany-list-detail'], function (exports, _formTomanyListDetail) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formTomanyListDetail.default;
    }
  });
});
define('djember-sample/components/form-tomany-slide', ['exports', 'ember-cli-crudities/components/form-tomany-slide'], function (exports, _formTomanySlide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formTomanySlide.default;
    }
  });
});
define('djember-sample/components/form-tomany-stack', ['exports', 'ember-cli-crudities/components/form-tomany-stack'], function (exports, _formTomanyStack) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formTomanyStack.default;
    }
  });
});
define('djember-sample/components/form-tomany-table', ['exports', 'ember-cli-crudities/components/form-tomany-table'], function (exports, _formTomanyTable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formTomanyTable.default;
    }
  });
});
define('djember-sample/components/form-url', ['exports', 'ember-cli-crudities/components/form-url'], function (exports, _formUrl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formUrl.default;
    }
  });
});
define('djember-sample/components/form-week', ['exports', 'ember-cli-crudities/components/form-week'], function (exports, _formWeek) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formWeek.default;
    }
  });
});
define('djember-sample/components/from-elsewhere', ['exports', 'ember-elsewhere/components/from-elsewhere'], function (exports, _fromElsewhere) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fromElsewhere.default;
    }
  });
});
define("djember-sample/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _illiquidModel) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _illiquidModel.default;
    }
  });
});
define('djember-sample/components/is-loading', ['exports', 'ember-cli-crudities/components/is-loading'], function (exports, _isLoading) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isLoading.default;
    }
  });
});
define('djember-sample/components/liquid-append', ['exports', 'liquid-wormhole/components/liquid-append'], function (exports, _liquidAppend) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidAppend.default;
    }
  });
});
define("djember-sample/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidBind) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidBind.default;
    }
  });
});
define("djember-sample/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidChild) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidChild.default;
    }
  });
});
define("djember-sample/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidContainer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidContainer.default;
    }
  });
});
define('djember-sample/components/liquid-destination', ['exports', 'liquid-wormhole/components/liquid-destination'], function (exports, _liquidDestination) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidDestination.default;
    }
  });
});
define("djember-sample/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidIf) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidIf.default;
    }
  });
});
define("djember-sample/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidMeasured) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.default;
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.measure;
    }
  });
});
define("djember-sample/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidOutlet) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidOutlet.default;
    }
  });
});
define("djember-sample/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidSpacer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSpacer.default;
    }
  });
});
define('djember-sample/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidSync) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidSync.default;
    }
  });
});
define('djember-sample/components/liquid-tether', ['exports', 'liquid-tether/components/liquid-tether'], function (exports, _liquidTether) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidTether.default;
    }
  });
});
define("djember-sample/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidUnless) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidUnless.default;
    }
  });
});
define("djember-sample/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidVersions) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidVersions.default;
    }
  });
});
define('djember-sample/components/liquid-wormhole', ['exports', 'liquid-wormhole/components/liquid-wormhole'], function (exports, _liquidWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidWormhole.default;
    }
  });
});
define('djember-sample/components/list-filters', ['exports', 'ember-cli-crudities/components/list-filters'], function (exports, _listFilters) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _listFilters.default;
    }
  });
});
define('djember-sample/components/list-input', ['exports', 'ember-cli-crudities/components/list-input'], function (exports, _listInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _listInput.default;
    }
  });
});
define('djember-sample/components/list-pagination', ['exports', 'ember-cli-crudities/components/list-pagination'], function (exports, _listPagination) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _listPagination.default;
    }
  });
});
define('djember-sample/components/main-menu/component', ['exports', 'djember-sample/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { computed } = Ember;

  exports.default = Ember.Component.extend({
    sections: [],
    api_host: computed(() => {
      return _environment.default.APP.API_HOST;
    }),
    api_namespace: computed(() => {
      return _environment.default.APP.API_NAMESPACE;
    }),
    django_host: computed(() => {
      return `${window.location.protocol}//${window.location.host.split(':')[0]}`;
    })
  });
});
define("djember-sample/components/main-menu/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gShbYyuQ", "block": "{\"symbols\":[\"section\"],\"statements\":[[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"dropdown menu-dropdown\"],[8],[0,\"\\n  \"],[6,\"button\"],[10,\"class\",\"btn btn-hamburger\"],[10,\"data-toggle\",\"dropdown\"],[8],[0,\"\\n    \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"Toggle navigation\"],[9],[0,\"\\n    \"],[6,\"span\"],[10,\"class\",\"icon-bar\"],[8],[9],[0,\"\\n    \"],[6,\"span\"],[10,\"class\",\"icon-bar\"],[8],[9],[0,\"\\n    \"],[6,\"span\"],[10,\"class\",\"icon-bar\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"ul\"],[10,\"class\",\"dropdown-menu\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"sections\"]]],null,{\"statements\":[[0,\"      \"],[6,\"li\"],[8],[0,\"\\n\"],[4,\"link-to\",[[21,1,[\"route\"]]],null,{\"statements\":[[4,\"if\",[[21,1,[\"emoji\"]]],null,{\"statements\":[[0,\"            \"],[1,[21,1,[\"emoji\"]],false],[0,\"  \\n\"]],\"parameters\":[]},null],[0,\"          \"],[1,[21,1,[\"title\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[6,\"li\"],[8],[0,\"\\n      \"],[6,\"a\"],[11,\"href\",[27,[[20,\"django_host\"],\"/\",[20,\"api_namespace\"],\"/\"]]],[10,\"target\",\"_blank\"],[8],[0,\"\\n        📡  \\n        Django REST api\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/components/main-menu/template.hbs" } });
});
define('djember-sample/components/markdown-to-html', ['exports', 'ember-cli-showdown/components/markdown-to-html'], function (exports, _markdownToHtml) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _markdownToHtml.default;
    }
  });
});
define('djember-sample/components/multiple-from-elsewhere', ['exports', 'ember-elsewhere/components/multiple-from-elsewhere'], function (exports, _multipleFromElsewhere) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _multipleFromElsewhere.default;
    }
  });
});
define('djember-sample/components/options-getter/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define("djember-sample/components/options-getter/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "COEPomxo", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,[\"value\"]]],null,{\"statements\":[[4,\"code-block\",null,[[\"language\"],[\"javascript\"]],{\"statements\":[[1,[26,\"pretty-print\",[[22,[\"value\"]],[25],2],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/components/options-getter/template.hbs" } });
});
define('djember-sample/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _powerSelectMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
define('djember-sample/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('djember-sample/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _powerSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
define('djember-sample/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
define('djember-sample/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
define('djember-sample/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _placeholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
define('djember-sample/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
define('djember-sample/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _searchMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
define('djember-sample/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('djember-sample/components/product-card/component', ['exports', 'ember-cli-crudities/components/record-line'], function (exports, _recordLine) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _recordLine.default.extend({
    classNames: ['col-xs-12 col-sm-6 col-lg-4'],
    tagName: 'div',
    qty: 1,

    cart: Ember.inject.service(),

    addToCart(model /*, act */) {
      console.log(`Adding ${this.get('qty')} x ${model.get('name')} to cart`);
      const cart = this.get('cart');
      cart.append(model, this.get('qty'));
    }
  });
});
define("djember-sample/components/product-card/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qXdxlqqM", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"panel panel-default\"],[8],[0,\"\\n  \"],[6,\"h2\"],[8],[1,[22,[\"model\",\"name\"]],false],[9],[0,\"\\n  \"],[6,\"img\"],[11,\"src\",[22,[\"model\",\"picture\"]],null],[10,\"style\",\"max-width: 100%;\"],[8],[9],[0,\"\\n  \"],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\n  \"],[1,[26,\"markdown-to-html\",[[22,[\"model\",\"description\"]]],null],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"col-xs-5\"],[8],[0,\"\\n    \"],[1,[26,\"form-number\",null,[[\"model\",\"property\",\"value\"],[[21,0,[]],\"qty\",[22,[\"qty\"]]]]],false],[0,\"\\n  \"],[9],[0,\" \\n  \"],[6,\"div\"],[10,\"class\",\"col-xs-7\"],[8],[0,\"\\n    \"],[1,[26,\"custom-action\",null,[[\"act\",\"model\",\"expanded\",\"method\",\"request\",\"receiver\",\"disabled\",\"performing\"],[[26,\"hash\",null,[[\"type\",\"method\",\"icon_class\",\"text\"],[\"closureMethod\",\"addToCart\",\"fa fa-cart-plus\",\"Add to cart\"]]],[22,[\"model\"]],true,[22,[\"method\"]],[22,[\"rqst\"]],[21,0,[]],[22,[\"actionIsRunning\"]],[22,[\"performing\"]]]]],false],[0,\"\\n  \"],[9],[0,\" \\n  \"],[6,\"div\"],[10,\"class\",\"clearfix\"],[8],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"clearfix\"],[8],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/components/product-card/template.hbs" } });
});
define('djember-sample/components/record-line', ['exports', 'ember-cli-crudities/components/record-line'], function (exports, _recordLine) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _recordLine.default;
    }
  });
});
define('djember-sample/components/shopping-cart/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    cart: Ember.inject.service()
  });
});
define("djember-sample/components/shopping-cart/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "y3cm6eaF", "block": "{\"symbols\":[],\"statements\":[[6,\"a\"],[11,\"href\",[26,\"href-to\",[\"shop.basket\"],null],null],[8],[0,\"\\n  \"],[6,\"i\"],[10,\"class\",\"fa fa-shopping-basket fa-2x\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"cart\",\"count\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"class\",\"badge\"],[8],[1,[22,[\"cart\",\"count\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/components/shopping-cart/template.hbs" } });
});
define('djember-sample/components/simple-mde', ['exports', 'ember-simplemde/components/simple-mde'], function (exports, _simpleMde) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _simpleMde.default;
    }
  });
});
define('djember-sample/components/sortable-group', ['exports', 'ember-sortable/components/sortable-group'], function (exports, _sortableGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _sortableGroup.default;
});
define('djember-sample/components/sortable-item', ['exports', 'ember-sortable/components/sortable-item'], function (exports, _sortableItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _sortableItem.default;
});
define('djember-sample/components/tab-content/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    classNameBindings: ['active'],
    active: Ember.computed('tabset.active', 'tabId', function () {
      return this.get('tabset.active') === this.get('tabId');
    })
  });
});
define("djember-sample/components/tab-content/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mgxIyA5P", "block": "{\"symbols\":[\"&default\"],\"statements\":[[13,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/components/tab-content/template.hbs" } });
});
define('djember-sample/components/tab-set/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    didReceiveAttrs() {
      if (this.attrs.active === undefined) {
        const tabs = this.get('tabs');
        if (tabs && tabs.length > 0) {
          this.set('active', tabs[0].id);
        }
      }
    },

    actions: {
      switchTo(newActive) {
        this.set('active', newActive);
      }
    }
  });
});
define("djember-sample/components/tab-set/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "miWtDlBn", "block": "{\"symbols\":[\"tab\",\"&default\"],\"statements\":[[6,\"ul\"],[10,\"class\",\"nav nav-tabs\"],[10,\"role\",\"tablist\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"tabs\"]]],null,{\"statements\":[[0,\"    \"],[6,\"li\"],[10,\"role\",\"presentation\"],[11,\"class\",[27,[[26,\"if\",[[26,\"eq\",[[21,1,[\"id\"]],[22,[\"active\"]]],null],\"active\"],null]]]],[8],[0,\"\\n      \"],[6,\"a\"],[10,\"role\",\"tab\"],[3,\"action\",[[21,0,[]],\"switchTo\",[21,1,[\"id\"]]]],[8],[0,\"\\n\"],[4,\"if\",[[21,1,[\"emoji\"]]],null,{\"statements\":[[0,\"          \"],[1,[21,1,[\"emoji\"]],false],[0,\" \\n\"]],\"parameters\":[]},null],[0,\"        \"],[1,[21,1,[\"title\"]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[9],[0,\"\\n\"],[13,2,[[21,0,[]]]],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/components/tab-set/template.hbs" } });
});
define('djember-sample/components/to-elsewhere', ['exports', 'ember-elsewhere/components/to-elsewhere'], function (exports, _toElsewhere) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toElsewhere.default;
    }
  });
});
define('djember-sample/components/tomany-aggregate', ['exports', 'ember-cli-crudities/components/tomany-aggregate'], function (exports, _tomanyAggregate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tomanyAggregate.default;
    }
  });
});
define('djember-sample/components/tomany-base', ['exports', 'ember-cli-crudities/components/tomany-base'], function (exports, _tomanyBase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tomanyBase.default;
    }
  });
});
define('djember-sample/components/tomany-lines', ['exports', 'ember-cli-crudities/components/tomany-lines'], function (exports, _tomanyLines) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tomanyLines.default;
    }
  });
});
define('djember-sample/components/translatable-field', ['exports', 'ember-cli-crudities/components/translatable-field'], function (exports, _translatableField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _translatableField.default;
    }
  });
});
define('djember-sample/components/user-info/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    session: Ember.inject.service('session'),
    right: false,
    login: null,
    password: null,

    authenticateAction: 'authenticate',
    invalidateAction: 'invalidate',

    actions: {
      authenticate() {
        var credentials = {
          identification: this.get('login'),
          password: this.get('password')
        };
        this.sendAction('authenticateAction', credentials);
      },
      invalidate() {
        this.sendAction('invalidateAction');
      }
    }
  });
});
define("djember-sample/components/user-info/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cteLzMHx", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"if\",[[22,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"  \"],[6,\"span\"],[10,\"class\",\"user-info\"],[8],[0,\"Welcome \"],[1,[22,[\"session\",\"currentUser\",\"username\"]],false],[9],[0,\"\\n  \"],[6,\"button\"],[10,\"class\",\"btn btn-danger\"],[3,\"action\",[[21,0,[]],\"invalidate\"],[[\"on\"],[\"click\"]]],[8],[6,\"i\"],[10,\"class\",\"fa fa-sign-out\"],[8],[9],[0,\"  Sign out\"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"dropdown login-dropdown\"],[8],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"btn btn-success\"],[10,\"data-toggle\",\"dropdown\"],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"fa fa-user\"],[8],[9],[0,\"  Sign in\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[\"dropdown-menu \",[26,\"if\",[[22,[\"right\"]],\"from-right\"],null]]]],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"session\",\"loginError\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"alert alert-danger login-error\"],[8],[0,\"\\n          \"],[6,\"i\"],[10,\"class\",\"fa fa-exclamation\"],[8],[9],[0,\"  \"],[1,[22,[\"session\",\"loginError\"]],false],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[6,\"form\"],[10,\"class\",\"col-xs-12 form-horizontal login-form\"],[3,\"action\",[[21,0,[]],\"authenticate\"],[[\"on\"],[\"submit\"]]],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"controls\"],[8],[0,\"\\n            \"],[1,[26,\"input\",null,[[\"id\",\"placeholder\",\"value\",\"class\"],[\"login\",\"Username\",[22,[\"login\"]],\"form-control\"]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"controls\"],[8],[0,\"\\n            \"],[1,[26,\"input\",null,[[\"id\",\"placeholder\",\"value\",\"type\",\"class\"],[\"password\",\"Password\",[22,[\"password\"]],\"password\",\"form-control\"]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"button\"],[10,\"class\",\"btn btn-default login-submit\"],[10,\"type\",\"submit\"],[8],[6,\"i\"],[10,\"class\",\"fa fa-sign-in\"],[8],[9],[0,\"  Go\"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/components/user-info/template.hbs" } });
});
define('djember-sample/components/vertical-collection', ['exports', '@html-next/vertical-collection/components/vertical-collection/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('djember-sample/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('djember-sample/djember/app/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    templateName: 'djember.index',
    model(params) {
      return params.app_name;
    }
  });
});
define('djember-sample/djember/form/route', ['exports', 'ember-cli-crudities/mixins/change-route'], function (exports, _changeRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_changeRoute.default, {});
});
define("djember-sample/djember/form/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CQtFPJJA", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[26,\"change-form\",null,[[\"model_name\",\"id\",\"fieldsets\",\"saveTwice\",\"sortableBy\",\"changeListRoute\",\"changeFormRoute\",\"languages\",\"custom_actions\"],[[26,\"concat\",[[22,[\"model\",\"app_name\"]],\"/\",[22,[\"model\",\"model_name\"]]],null],[22,[\"model\",\"id\"]],[22,[\"model\",\"meta\",\"fieldsets\"]],[22,[\"model\",\"meta\",\"save_twice\"]],[22,[\"model\",\"meta\",\"sortable_by\"]],\"djember.list\",\"djember.form\",[22,[\"model\",\"meta\",\"languages\"]],[22,[\"model\",\"meta\",\"custom_actions\"]]]]],false],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/djember/form/template.hbs" } });
});
define('djember-sample/djember/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model() {
      return false;
    }
  });
});
define("djember-sample/djember/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "v/4FgpO0", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[26,\"app-dashboard\",null,[[\"changeListRoute\",\"changeFormRoute\",\"appRoute\",\"only\"],[\"djember.list\",\"djember.form\",\"djember.app\",[22,[\"model\"]]]]],false],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/djember/index/template.hbs" } });
});
define('djember-sample/djember/list/route', ['exports', 'ember-cli-crudities/mixins/change-route'], function (exports, _changeRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_changeRoute.default, {});
});
define("djember-sample/djember/list/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "De1gHWaX", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[26,\"change-list\",null,[[\"model_name\",\"label\",\"app_name\",\"fields\",\"list_display\",\"list_editable\",\"filter_fields\",\"ordering_fields\",\"search_enabled\",\"changeFormRoute\",\"sortableBy\",\"custom_actions\",\"bulk_actions\"],[[26,\"concat\",[[22,[\"model\",\"app_name\"]],\"/\",[22,[\"model\",\"model_name\"]]],null],[22,[\"model\",\"model_name\"]],[22,[\"model\",\"app_name\"]],[22,[\"model\",\"meta\",\"fields\"]],[22,[\"model\",\"meta\",\"list_display\"]],[22,[\"model\",\"meta\",\"list_editable\"]],[22,[\"model\",\"meta\",\"filter_fields\"]],[22,[\"model\",\"meta\",\"ordering_fields\"]],[22,[\"model\",\"meta\",\"search_enabled\"]],\"djember.form\",[22,[\"model\",\"meta\",\"sortable_by\"]],[22,[\"model\",\"meta\",\"custom_actions\"]],[22,[\"model\",\"meta\",\"bulk_actions\"]]]]],false],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/djember/list/template.hbs" } });
});
define('djember-sample/djember/route', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {});
});
define("djember-sample/djember/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "40/L6mEA", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[26,\"app-breadcrumbs\",null,[[\"mainLabel\",\"mainRoute\",\"appRoute\",\"changeListRoute\",\"changeFormRoute\"],[\"🐾 Ember admin\",\"djember\",\"djember.app\",\"djember.list\",\"djember.form\"]]],false],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"container-fluid\"],[8],[0,\"\\n  \"],[1,[20,\"liquid-outlet\"],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/djember/template.hbs" } });
});
define("djember-sample/ember-cli-dynamic-model/tests/addon.lint-test", [], function () {
  "use strict";
});
define("djember-sample/ember-cli-dynamic-model/tests/app.lint-test", [], function () {
  "use strict";
});
define("djember-sample/ember-cli-dynamic-model/tests/templates.template.lint-test", [], function () {
  "use strict";
});
define("djember-sample/ember-data-factory-guy/tests/addon.lint-test", [], function () {
  "use strict";
});
define("djember-sample/ember-data-factory-guy/tests/app.lint-test", [], function () {
  "use strict";
});
define("djember-sample/ember-data-factory-guy/tests/templates.template.lint-test", [], function () {
  "use strict";
});
define('djember-sample/flash/object', ['exports', 'ember-cli-flash/flash/object'], function (exports, _object) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _object.default;
    }
  });
});
define('djember-sample/helpers/abs', ['exports', 'ember-math-helpers/helpers/abs'], function (exports, _abs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _abs.default;
    }
  });
  Object.defineProperty(exports, 'abs', {
    enumerable: true,
    get: function () {
      return _abs.abs;
    }
  });
});
define('djember-sample/helpers/acos', ['exports', 'ember-math-helpers/helpers/acos'], function (exports, _acos) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _acos.default;
    }
  });
  Object.defineProperty(exports, 'acos', {
    enumerable: true,
    get: function () {
      return _acos.acos;
    }
  });
});
define('djember-sample/helpers/acosh', ['exports', 'ember-math-helpers/helpers/acosh'], function (exports, _acosh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _acosh.default;
    }
  });
  Object.defineProperty(exports, 'acosh', {
    enumerable: true,
    get: function () {
      return _acosh.acosh;
    }
  });
});
define('djember-sample/helpers/action-url', ['exports', 'ember-cli-crudities/helpers/action-url'], function (exports, _actionUrl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _actionUrl.default;
    }
  });
  Object.defineProperty(exports, 'actionUrl', {
    enumerable: true,
    get: function () {
      return _actionUrl.actionUrl;
    }
  });
});
define('djember-sample/helpers/add', ['exports', 'ember-math-helpers/helpers/add'], function (exports, _add) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _add.default;
    }
  });
  Object.defineProperty(exports, 'add', {
    enumerable: true,
    get: function () {
      return _add.add;
    }
  });
});
define('djember-sample/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('djember-sample/helpers/app-version', ['exports', 'djember-sample/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('djember-sample/helpers/append', ['exports', 'ember-composable-helpers/helpers/append'], function (exports, _append) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(exports, 'append', {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
});
define('djember-sample/helpers/array-contains', ['exports', 'ember-array-contains-helper/helpers/array-contains'], function (exports, _arrayContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _arrayContains.default;
    }
  });
  Object.defineProperty(exports, 'arrayContains', {
    enumerable: true,
    get: function () {
      return _arrayContains.arrayContains;
    }
  });
});
define('djember-sample/helpers/array', ['exports', 'ember-composable-helpers/helpers/array'], function (exports, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _array.default;
    }
  });
  Object.defineProperty(exports, 'array', {
    enumerable: true,
    get: function () {
      return _array.array;
    }
  });
});
define('djember-sample/helpers/asin', ['exports', 'ember-math-helpers/helpers/asin'], function (exports, _asin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _asin.default;
    }
  });
  Object.defineProperty(exports, 'asin', {
    enumerable: true,
    get: function () {
      return _asin.asin;
    }
  });
});
define('djember-sample/helpers/asinh', ['exports', 'ember-math-helpers/helpers/asinh'], function (exports, _asinh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _asinh.default;
    }
  });
  Object.defineProperty(exports, 'asinh', {
    enumerable: true,
    get: function () {
      return _asinh.asinh;
    }
  });
});
define('djember-sample/helpers/atan', ['exports', 'ember-math-helpers/helpers/atan'], function (exports, _atan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  Object.defineProperty(exports, 'atan', {
    enumerable: true,
    get: function () {
      return _atan.atan;
    }
  });
});
define('djember-sample/helpers/atan2', ['exports', 'ember-math-helpers/helpers/atan2'], function (exports, _atan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  Object.defineProperty(exports, 'atan2', {
    enumerable: true,
    get: function () {
      return _atan.atan2;
    }
  });
});
define('djember-sample/helpers/atanh', ['exports', 'ember-math-helpers/helpers/atanh'], function (exports, _atanh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _atanh.default;
    }
  });
  Object.defineProperty(exports, 'atanh', {
    enumerable: true,
    get: function () {
      return _atanh.atanh;
    }
  });
});
define('djember-sample/helpers/camelize', ['exports', 'ember-cli-string-helpers/helpers/camelize'], function (exports, _camelize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _camelize.default;
    }
  });
  Object.defineProperty(exports, 'camelize', {
    enumerable: true,
    get: function () {
      return _camelize.camelize;
    }
  });
});
define('djember-sample/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
define('djember-sample/helpers/capitalize', ['exports', 'ember-cli-string-helpers/helpers/capitalize'], function (exports, _capitalize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _capitalize.default;
    }
  });
  Object.defineProperty(exports, 'capitalize', {
    enumerable: true,
    get: function () {
      return _capitalize.capitalize;
    }
  });
});
define('djember-sample/helpers/cbrt', ['exports', 'ember-math-helpers/helpers/cbrt'], function (exports, _cbrt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cbrt.default;
    }
  });
  Object.defineProperty(exports, 'cbrt', {
    enumerable: true,
    get: function () {
      return _cbrt.cbrt;
    }
  });
});
define('djember-sample/helpers/ceil', ['exports', 'ember-math-helpers/helpers/ceil'], function (exports, _ceil) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ceil.default;
    }
  });
  Object.defineProperty(exports, 'ceil', {
    enumerable: true,
    get: function () {
      return _ceil.ceil;
    }
  });
});
define('djember-sample/helpers/chunk', ['exports', 'ember-composable-helpers/helpers/chunk'], function (exports, _chunk) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  Object.defineProperty(exports, 'chunk', {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
});
define('djember-sample/helpers/classify', ['exports', 'ember-cli-string-helpers/helpers/classify'], function (exports, _classify) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _classify.default;
    }
  });
  Object.defineProperty(exports, 'classify', {
    enumerable: true,
    get: function () {
      return _classify.classify;
    }
  });
});
define('djember-sample/helpers/clz32', ['exports', 'ember-math-helpers/helpers/clz32'], function (exports, _clz) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _clz.default;
    }
  });
  Object.defineProperty(exports, 'clz32', {
    enumerable: true,
    get: function () {
      return _clz.clz32;
    }
  });
});
define('djember-sample/helpers/compact', ['exports', 'ember-composable-helpers/helpers/compact'], function (exports, _compact) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
  Object.defineProperty(exports, 'compact', {
    enumerable: true,
    get: function () {
      return _compact.compact;
    }
  });
});
define('djember-sample/helpers/compute', ['exports', 'ember-composable-helpers/helpers/compute'], function (exports, _compute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  Object.defineProperty(exports, 'compute', {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
});
define('djember-sample/helpers/conditional-format', ['exports', 'ember-cli-crudities/helpers/conditional-format'], function (exports, _conditionalFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _conditionalFormat.default;
    }
  });
  Object.defineProperty(exports, 'conditionalFormat', {
    enumerable: true,
    get: function () {
      return _conditionalFormat.conditionalFormat;
    }
  });
});
define('djember-sample/helpers/contains', ['exports', 'ember-composable-helpers/helpers/contains'], function (exports, _contains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
define('djember-sample/helpers/cos', ['exports', 'ember-math-helpers/helpers/cos'], function (exports, _cos) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cos.default;
    }
  });
  Object.defineProperty(exports, 'cos', {
    enumerable: true,
    get: function () {
      return _cos.cos;
    }
  });
});
define('djember-sample/helpers/cosh', ['exports', 'ember-math-helpers/helpers/cosh'], function (exports, _cosh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cosh.default;
    }
  });
  Object.defineProperty(exports, 'cosh', {
    enumerable: true,
    get: function () {
      return _cosh.cosh;
    }
  });
});
define('djember-sample/helpers/dasherize', ['exports', 'ember-cli-string-helpers/helpers/dasherize'], function (exports, _dasherize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dasherize.default;
    }
  });
  Object.defineProperty(exports, 'dasherize', {
    enumerable: true,
    get: function () {
      return _dasherize.dasherize;
    }
  });
});
define('djember-sample/helpers/dec', ['exports', 'ember-composable-helpers/helpers/dec'], function (exports, _dec) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(exports, 'dec', {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
});
define('djember-sample/helpers/div', ['exports', 'ember-math-helpers/helpers/div'], function (exports, _div) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _div.default;
    }
  });
  Object.defineProperty(exports, 'div', {
    enumerable: true,
    get: function () {
      return _div.div;
    }
  });
});
define('djember-sample/helpers/drop', ['exports', 'ember-composable-helpers/helpers/drop'], function (exports, _drop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
  Object.defineProperty(exports, 'drop', {
    enumerable: true,
    get: function () {
      return _drop.drop;
    }
  });
});
define('djember-sample/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectIsGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
define('djember-sample/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectIsSelected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('djember-sample/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectTrueStringIfPresent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
define('djember-sample/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('djember-sample/helpers/evaluate-condition', ['exports', 'ember-cli-crudities/helpers/evaluate-condition'], function (exports, _evaluateCondition) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _evaluateCondition.default;
    }
  });
  Object.defineProperty(exports, 'evaluateCondition', {
    enumerable: true,
    get: function () {
      return _evaluateCondition.evaluateCondition;
    }
  });
});
define('djember-sample/helpers/exp', ['exports', 'ember-math-helpers/helpers/exp'], function (exports, _exp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _exp.default;
    }
  });
  Object.defineProperty(exports, 'exp', {
    enumerable: true,
    get: function () {
      return _exp.exp;
    }
  });
});
define('djember-sample/helpers/expm1', ['exports', 'ember-math-helpers/helpers/expm1'], function (exports, _expm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _expm.default;
    }
  });
  Object.defineProperty(exports, 'expm1', {
    enumerable: true,
    get: function () {
      return _expm.expm1;
    }
  });
});
define('djember-sample/helpers/filter-by', ['exports', 'ember-composable-helpers/helpers/filter-by'], function (exports, _filterBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
  Object.defineProperty(exports, 'filterBy', {
    enumerable: true,
    get: function () {
      return _filterBy.filterBy;
    }
  });
});
define('djember-sample/helpers/filter-for-field', ['exports', 'ember-cli-crudities/helpers/filter-for-field'], function (exports, _filterForField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filterForField.default;
    }
  });
  Object.defineProperty(exports, 'filterForField', {
    enumerable: true,
    get: function () {
      return _filterForField.filterForField;
    }
  });
});
define('djember-sample/helpers/filter', ['exports', 'ember-composable-helpers/helpers/filter'], function (exports, _filter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
  Object.defineProperty(exports, 'filter', {
    enumerable: true,
    get: function () {
      return _filter.filter;
    }
  });
});
define('djember-sample/helpers/find-by', ['exports', 'ember-composable-helpers/helpers/find-by'], function (exports, _findBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
  Object.defineProperty(exports, 'findBy', {
    enumerable: true,
    get: function () {
      return _findBy.findBy;
    }
  });
});
define('djember-sample/helpers/flatten', ['exports', 'ember-composable-helpers/helpers/flatten'], function (exports, _flatten) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
define('djember-sample/helpers/floor', ['exports', 'ember-math-helpers/helpers/floor'], function (exports, _floor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _floor.default;
    }
  });
  Object.defineProperty(exports, 'floor', {
    enumerable: true,
    get: function () {
      return _floor.floor;
    }
  });
});
define('djember-sample/helpers/fround', ['exports', 'ember-math-helpers/helpers/fround'], function (exports, _fround) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fround.default;
    }
  });
  Object.defineProperty(exports, 'fround', {
    enumerable: true,
    get: function () {
      return _fround.fround;
    }
  });
});
define('djember-sample/helpers/group-by', ['exports', 'ember-composable-helpers/helpers/group-by'], function (exports, _groupBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
  Object.defineProperty(exports, 'groupBy', {
    enumerable: true,
    get: function () {
      return _groupBy.groupBy;
    }
  });
});
define('djember-sample/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('djember-sample/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('djember-sample/helpers/has-next', ['exports', 'ember-composable-helpers/helpers/has-next'], function (exports, _hasNext) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(exports, 'hasNext', {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
define('djember-sample/helpers/has-previous', ['exports', 'ember-composable-helpers/helpers/has-previous'], function (exports, _hasPrevious) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(exports, 'hasPrevious', {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
define('djember-sample/helpers/href-to', ['exports', 'ember-href-to/helpers/href-to'], function (exports, _hrefTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hrefTo.default;
    }
  });
  Object.defineProperty(exports, 'hrefTo', {
    enumerable: true,
    get: function () {
      return _hrefTo.hrefTo;
    }
  });
});
define('djember-sample/helpers/html-safe', ['exports', 'ember-cli-string-helpers/helpers/html-safe'], function (exports, _htmlSafe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _htmlSafe.default;
    }
  });
  Object.defineProperty(exports, 'htmlSafe', {
    enumerable: true,
    get: function () {
      return _htmlSafe.htmlSafe;
    }
  });
});
define('djember-sample/helpers/humanize', ['exports', 'ember-cli-string-helpers/helpers/humanize'], function (exports, _humanize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _humanize.default;
    }
  });
  Object.defineProperty(exports, 'humanize', {
    enumerable: true,
    get: function () {
      return _humanize.humanize;
    }
  });
});
define('djember-sample/helpers/hypot', ['exports', 'ember-math-helpers/helpers/hypot'], function (exports, _hypot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hypot.default;
    }
  });
  Object.defineProperty(exports, 'hypot', {
    enumerable: true,
    get: function () {
      return _hypot.hypot;
    }
  });
});
define('djember-sample/helpers/imul', ['exports', 'ember-math-helpers/helpers/imul'], function (exports, _imul) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _imul.default;
    }
  });
  Object.defineProperty(exports, 'imul', {
    enumerable: true,
    get: function () {
      return _imul.imul;
    }
  });
});
define('djember-sample/helpers/inc', ['exports', 'ember-composable-helpers/helpers/inc'], function (exports, _inc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(exports, 'inc', {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
define('djember-sample/helpers/intersect', ['exports', 'ember-composable-helpers/helpers/intersect'], function (exports, _intersect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
  Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function () {
      return _intersect.intersect;
    }
  });
});
define('djember-sample/helpers/invoke', ['exports', 'ember-composable-helpers/helpers/invoke'], function (exports, _invoke) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(exports, 'invoke', {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
define('djember-sample/helpers/is-after', ['exports', 'ember-moment/helpers/is-after'], function (exports, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
define('djember-sample/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('djember-sample/helpers/is-before', ['exports', 'ember-moment/helpers/is-before'], function (exports, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
define('djember-sample/helpers/is-between', ['exports', 'ember-moment/helpers/is-between'], function (exports, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
define('djember-sample/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('djember-sample/helpers/is-same-or-after', ['exports', 'ember-moment/helpers/is-same-or-after'], function (exports, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
define('djember-sample/helpers/is-same-or-before', ['exports', 'ember-moment/helpers/is-same-or-before'], function (exports, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
define('djember-sample/helpers/is-same', ['exports', 'ember-moment/helpers/is-same'], function (exports, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
define('djember-sample/helpers/join', ['exports', 'ember-composable-helpers/helpers/join'], function (exports, _join) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
  Object.defineProperty(exports, 'join', {
    enumerable: true,
    get: function () {
      return _join.join;
    }
  });
});
define('djember-sample/helpers/lf-lock-model', ['exports', 'liquid-fire/helpers/lf-lock-model'], function (exports, _lfLockModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lfLockModel.default;
    }
  });
  Object.defineProperty(exports, 'lfLockModel', {
    enumerable: true,
    get: function () {
      return _lfLockModel.lfLockModel;
    }
  });
});
define('djember-sample/helpers/lf-or', ['exports', 'liquid-fire/helpers/lf-or'], function (exports, _lfOr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lfOr.default;
    }
  });
  Object.defineProperty(exports, 'lfOr', {
    enumerable: true,
    get: function () {
      return _lfOr.lfOr;
    }
  });
});
define('djember-sample/helpers/log-e', ['exports', 'ember-math-helpers/helpers/log-e'], function (exports, _logE) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _logE.default;
    }
  });
  Object.defineProperty(exports, 'logE', {
    enumerable: true,
    get: function () {
      return _logE.logE;
    }
  });
});
define('djember-sample/helpers/log10', ['exports', 'ember-math-helpers/helpers/log10'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  Object.defineProperty(exports, 'log10', {
    enumerable: true,
    get: function () {
      return _log.log10;
    }
  });
});
define('djember-sample/helpers/log1p', ['exports', 'ember-math-helpers/helpers/log1p'], function (exports, _log1p) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log1p.default;
    }
  });
  Object.defineProperty(exports, 'log1p', {
    enumerable: true,
    get: function () {
      return _log1p.log1p;
    }
  });
});
define('djember-sample/helpers/log2', ['exports', 'ember-math-helpers/helpers/log2'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  Object.defineProperty(exports, 'log2', {
    enumerable: true,
    get: function () {
      return _log.log2;
    }
  });
});
define('djember-sample/helpers/lowercase', ['exports', 'ember-cli-string-helpers/helpers/lowercase'], function (exports, _lowercase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lowercase.default;
    }
  });
  Object.defineProperty(exports, 'lowercase', {
    enumerable: true,
    get: function () {
      return _lowercase.lowercase;
    }
  });
});
define('djember-sample/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('djember-sample/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('djember-sample/helpers/map-by', ['exports', 'ember-composable-helpers/helpers/map-by'], function (exports, _mapBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
  Object.defineProperty(exports, 'mapBy', {
    enumerable: true,
    get: function () {
      return _mapBy.mapBy;
    }
  });
});
define('djember-sample/helpers/map', ['exports', 'ember-composable-helpers/helpers/map'], function (exports, _map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
  Object.defineProperty(exports, 'map', {
    enumerable: true,
    get: function () {
      return _map.map;
    }
  });
});
define('djember-sample/helpers/max', ['exports', 'ember-math-helpers/helpers/max'], function (exports, _max) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _max.default;
    }
  });
  Object.defineProperty(exports, 'max', {
    enumerable: true,
    get: function () {
      return _max.max;
    }
  });
});
define('djember-sample/helpers/min', ['exports', 'ember-math-helpers/helpers/min'], function (exports, _min) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _min.default;
    }
  });
  Object.defineProperty(exports, 'min', {
    enumerable: true,
    get: function () {
      return _min.min;
    }
  });
});
define('djember-sample/helpers/mod', ['exports', 'ember-math-helpers/helpers/mod'], function (exports, _mod) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mod.default;
    }
  });
  Object.defineProperty(exports, 'mod', {
    enumerable: true,
    get: function () {
      return _mod.mod;
    }
  });
});
define('djember-sample/helpers/moment-add', ['exports', 'ember-moment/helpers/moment-add'], function (exports, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
define('djember-sample/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
define('djember-sample/helpers/moment-diff', ['exports', 'ember-moment/helpers/moment-diff'], function (exports, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
define('djember-sample/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
define('djember-sample/helpers/moment-format', ['exports', 'ember-moment/helpers/moment-format'], function (exports, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
define('djember-sample/helpers/moment-from-now', ['exports', 'ember-moment/helpers/moment-from-now'], function (exports, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
define('djember-sample/helpers/moment-from', ['exports', 'ember-moment/helpers/moment-from'], function (exports, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
define('djember-sample/helpers/moment-subtract', ['exports', 'ember-moment/helpers/moment-subtract'], function (exports, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
define('djember-sample/helpers/moment-to-date', ['exports', 'ember-moment/helpers/moment-to-date'], function (exports, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
define('djember-sample/helpers/moment-to-now', ['exports', 'ember-moment/helpers/moment-to-now'], function (exports, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
define('djember-sample/helpers/moment-to', ['exports', 'ember-moment/helpers/moment-to'], function (exports, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
define('djember-sample/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('djember-sample/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
define('djember-sample/helpers/mult', ['exports', 'ember-math-helpers/helpers/mult'], function (exports, _mult) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mult.default;
    }
  });
  Object.defineProperty(exports, 'mult', {
    enumerable: true,
    get: function () {
      return _mult.mult;
    }
  });
});
define('djember-sample/helpers/next', ['exports', 'ember-composable-helpers/helpers/next'], function (exports, _next) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(exports, 'next', {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
define('djember-sample/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('djember-sample/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('djember-sample/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
define('djember-sample/helpers/object-at', ['exports', 'ember-composable-helpers/helpers/object-at'], function (exports, _objectAt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(exports, 'objectAt', {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
define('djember-sample/helpers/optional', ['exports', 'ember-composable-helpers/helpers/optional'], function (exports, _optional) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(exports, 'optional', {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
define('djember-sample/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('djember-sample/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
define('djember-sample/helpers/pipe-action', ['exports', 'ember-composable-helpers/helpers/pipe-action'], function (exports, _pipeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
define('djember-sample/helpers/pipe', ['exports', 'ember-composable-helpers/helpers/pipe'], function (exports, _pipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(exports, 'pipe', {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
define('djember-sample/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('djember-sample/helpers/pow', ['exports', 'ember-math-helpers/helpers/pow'], function (exports, _pow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pow.default;
    }
  });
  Object.defineProperty(exports, 'pow', {
    enumerable: true,
    get: function () {
      return _pow.pow;
    }
  });
});
define('djember-sample/helpers/pretty-print', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.prettyPrint = prettyPrint;
  function prettyPrint(params /*, hash*/) {
    return JSON.stringify(params[0], params[1], params[2]);
  }

  exports.default = Ember.Helper.helper(prettyPrint);
});
define('djember-sample/helpers/previous', ['exports', 'ember-composable-helpers/helpers/previous'], function (exports, _previous) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(exports, 'previous', {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
define('djember-sample/helpers/query-string', ['exports', 'ember-cli-crudities/helpers/query-string'], function (exports, _queryString) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _queryString.default;
    }
  });
  Object.defineProperty(exports, 'queryString', {
    enumerable: true,
    get: function () {
      return _queryString.queryString;
    }
  });
});
define('djember-sample/helpers/queue', ['exports', 'ember-composable-helpers/helpers/queue'], function (exports, _queue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(exports, 'queue', {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
define('djember-sample/helpers/random', ['exports', 'ember-math-helpers/helpers/random'], function (exports, _random) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _random.default;
    }
  });
  Object.defineProperty(exports, 'random', {
    enumerable: true,
    get: function () {
      return _random.random;
    }
  });
});
define('djember-sample/helpers/range', ['exports', 'ember-composable-helpers/helpers/range'], function (exports, _range) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(exports, 'range', {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
define('djember-sample/helpers/records-aggregate', ['exports', 'ember-cli-crudities/helpers/records-aggregate'], function (exports, _recordsAggregate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _recordsAggregate.default;
    }
  });
  Object.defineProperty(exports, 'recordsAggregate', {
    enumerable: true,
    get: function () {
      return _recordsAggregate.recordsAggregate;
    }
  });
});
define('djember-sample/helpers/reduce', ['exports', 'ember-composable-helpers/helpers/reduce'], function (exports, _reduce) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
  Object.defineProperty(exports, 'reduce', {
    enumerable: true,
    get: function () {
      return _reduce.reduce;
    }
  });
});
define('djember-sample/helpers/reject-by', ['exports', 'ember-composable-helpers/helpers/reject-by'], function (exports, _rejectBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
  Object.defineProperty(exports, 'rejectBy', {
    enumerable: true,
    get: function () {
      return _rejectBy.rejectBy;
    }
  });
});
define('djember-sample/helpers/repeat', ['exports', 'ember-composable-helpers/helpers/repeat'], function (exports, _repeat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(exports, 'repeat', {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
define('djember-sample/helpers/reverse', ['exports', 'ember-composable-helpers/helpers/reverse'], function (exports, _reverse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
  Object.defineProperty(exports, 'reverse', {
    enumerable: true,
    get: function () {
      return _reverse.reverse;
    }
  });
});
define('djember-sample/helpers/round', ['exports', 'ember-math-helpers/helpers/round'], function (exports, _round) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _round.default;
    }
  });
  Object.defineProperty(exports, 'round', {
    enumerable: true,
    get: function () {
      return _round.round;
    }
  });
});
define('djember-sample/helpers/shuffle', ['exports', 'ember-composable-helpers/helpers/shuffle'], function (exports, _shuffle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(exports, 'shuffle', {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
define('djember-sample/helpers/sign', ['exports', 'ember-math-helpers/helpers/sign'], function (exports, _sign) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sign.default;
    }
  });
  Object.defineProperty(exports, 'sign', {
    enumerable: true,
    get: function () {
      return _sign.sign;
    }
  });
});
define('djember-sample/helpers/simple-mde-preview', ['exports', 'ember-simplemde/helpers/simple-mde-preview'], function (exports, _simpleMdePreview) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _simpleMdePreview.default;
    }
  });
  Object.defineProperty(exports, 'simpleMdePreview', {
    enumerable: true,
    get: function () {
      return _simpleMdePreview.simpleMdePreview;
    }
  });
});
define('djember-sample/helpers/sin', ['exports', 'ember-math-helpers/helpers/sin'], function (exports, _sin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sin.default;
    }
  });
  Object.defineProperty(exports, 'sin', {
    enumerable: true,
    get: function () {
      return _sin.sin;
    }
  });
});
define('djember-sample/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('djember-sample/helpers/slice', ['exports', 'ember-composable-helpers/helpers/slice'], function (exports, _slice) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
  Object.defineProperty(exports, 'slice', {
    enumerable: true,
    get: function () {
      return _slice.slice;
    }
  });
});
define('djember-sample/helpers/sort-by', ['exports', 'ember-composable-helpers/helpers/sort-by'], function (exports, _sortBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
  Object.defineProperty(exports, 'sortBy', {
    enumerable: true,
    get: function () {
      return _sortBy.sortBy;
    }
  });
});
define('djember-sample/helpers/sqrt', ['exports', 'ember-math-helpers/helpers/sqrt'], function (exports, _sqrt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sqrt.default;
    }
  });
  Object.defineProperty(exports, 'sqrt', {
    enumerable: true,
    get: function () {
      return _sqrt.sqrt;
    }
  });
});
define('djember-sample/helpers/sub', ['exports', 'ember-math-helpers/helpers/sub'], function (exports, _sub) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sub.default;
    }
  });
  Object.defineProperty(exports, 'sub', {
    enumerable: true,
    get: function () {
      return _sub.sub;
    }
  });
});
define('djember-sample/helpers/take', ['exports', 'ember-composable-helpers/helpers/take'], function (exports, _take) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
  Object.defineProperty(exports, 'take', {
    enumerable: true,
    get: function () {
      return _take.take;
    }
  });
});
define('djember-sample/helpers/tan', ['exports', 'ember-math-helpers/helpers/tan'], function (exports, _tan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tan.default;
    }
  });
  Object.defineProperty(exports, 'tan', {
    enumerable: true,
    get: function () {
      return _tan.tan;
    }
  });
});
define('djember-sample/helpers/tanh', ['exports', 'ember-math-helpers/helpers/tanh'], function (exports, _tanh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tanh.default;
    }
  });
  Object.defineProperty(exports, 'tanh', {
    enumerable: true,
    get: function () {
      return _tanh.tanh;
    }
  });
});
define('djember-sample/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
define('djember-sample/helpers/titleize', ['exports', 'ember-cli-string-helpers/helpers/titleize'], function (exports, _titleize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
  Object.defineProperty(exports, 'titleize', {
    enumerable: true,
    get: function () {
      return _titleize.titleize;
    }
  });
});
define('djember-sample/helpers/toggle-action', ['exports', 'ember-composable-helpers/helpers/toggle-action'], function (exports, _toggleAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
define('djember-sample/helpers/toggle', ['exports', 'ember-composable-helpers/helpers/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(exports, 'toggle', {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
define('djember-sample/helpers/trim', ['exports', 'ember-cli-string-helpers/helpers/trim'], function (exports, _trim) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trim.default;
    }
  });
  Object.defineProperty(exports, 'trim', {
    enumerable: true,
    get: function () {
      return _trim.trim;
    }
  });
});
define('djember-sample/helpers/trunc', ['exports', 'ember-math-helpers/helpers/trunc'], function (exports, _trunc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trunc.default;
    }
  });
  Object.defineProperty(exports, 'trunc', {
    enumerable: true,
    get: function () {
      return _trunc.trunc;
    }
  });
});
define('djember-sample/helpers/truncate', ['exports', 'ember-cli-string-helpers/helpers/truncate'], function (exports, _truncate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _truncate.default;
    }
  });
  Object.defineProperty(exports, 'truncate', {
    enumerable: true,
    get: function () {
      return _truncate.truncate;
    }
  });
});
define('djember-sample/helpers/underscore', ['exports', 'ember-cli-string-helpers/helpers/underscore'], function (exports, _underscore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
define('djember-sample/helpers/union', ['exports', 'ember-composable-helpers/helpers/union'], function (exports, _union) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
  Object.defineProperty(exports, 'union', {
    enumerable: true,
    get: function () {
      return _union.union;
    }
  });
});
define('djember-sample/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('djember-sample/helpers/uppercase', ['exports', 'ember-cli-string-helpers/helpers/uppercase'], function (exports, _uppercase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uppercase.default;
    }
  });
  Object.defineProperty(exports, 'uppercase', {
    enumerable: true,
    get: function () {
      return _uppercase.uppercase;
    }
  });
});
define('djember-sample/helpers/utc', ['exports', 'ember-moment/helpers/utc'], function (exports, _utc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(exports, 'utc', {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
define('djember-sample/helpers/w', ['exports', 'ember-cli-string-helpers/helpers/w'], function (exports, _w) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _w.default;
    }
  });
  Object.defineProperty(exports, 'w', {
    enumerable: true,
    get: function () {
      return _w.w;
    }
  });
});
define('djember-sample/helpers/without', ['exports', 'ember-composable-helpers/helpers/without'], function (exports, _without) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(exports, 'without', {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
define('djember-sample/helpers/world-flag', ['exports', 'ember-world-flags/helpers/world-flag'], function (exports, _worldFlag) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _worldFlag.default;
});
define('djember-sample/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('djember-sample/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    jsons: {
      app: {
        url: '/api/v1/',
        only: ['applications', 'endpoints']
      },
      fields: {
        url: '/api/v1/crm/companies/',
        only: ['fields']
      },
      list: {
        url: '/api/v1/accounting/invoices/',
        only: ['list_display', 'filter_fields', 'ordering_fields', 'list_editable', 'sortable_by', 'search_enabled']
      },
      form: {
        url: '/api/v1/crm/companies/',
        only: ['fieldsets']
      },
      actions: {
        url: '/api/v1/accounting/invoices/',
        only: ['custom_actions', 'bulk_actions']
      }
    },

    value: {
      tabs: [{
        title: 'does it work?',
        id: 'work',
        emoji: '🌀'
      }, {
        title: 'was it built?',
        id: 'built',
        emoji: '🏫'
      }, {
        title: 'are images uploaded?',
        id: 'images',
        emoji: '📷'
      }],
      active: 'work',
      workTabs: [{
        title: 'Application structure',
        id: 'structure',
        emoji: '💿'
      }, {
        title: 'Models',
        id: 'models',
        emoji: '👒'
      }, {
        title: 'Fields information',
        id: 'fields',
        emoji: '🍀'
      }, {
        title: 'List structure',
        id: 'list',
        emoji: '📜'
      }, {
        title: 'Form structure',
        id: 'form',
        emoji: '📝'
      }, {
        title: 'Actions',
        id: 'actions',
        emoji: '🎬'
        // }, {
        //   title: 'Translatable fields',
        //   id: 'translation',
        //   emoji: '🏳'
        // }, {
        //   title: 'Conditional display',
        //   id: 'condition',
        //   emoji: '❓'
      }],
      builtTabs: [{
        title: 'Bootstrapping the application',
        id: 'bootstrap',
        emoji: '👢'
      }, {
        title: 'On the backend',
        id: 'backend',
        emoji: '🐍'
      }, {
        title: 'On the frontend',
        id: 'frontend',
        emoji: '🐹'
      }],
      jsons: {}
    },

    model() {
      const jsons = this.get('jsons');
      const promises = [];
      let k;
      for (k in jsons) {
        if (!jsons.hasOwnProperty(k)) {
          continue;
        }
        const kk = k;
        const only = jsons[kk].only;
        promises.push(new Ember.RSVP.Promise((resolve, reject) => {
          fetch(`${jsons[kk].url}?format=json`, { method: 'OPTIONS' }).then(response => {
            response.json().then(json => {
              if (only !== undefined) {
                const rv = {};
                only.forEach(key => {
                  rv[key] = json[key];
                });
                console.log(kk, rv);
                this.set(`value.jsons.${kk}`, rv);
              } else {
                this.set(`value.jsons.${kk}`, json);
              }
              resolve();
            }, reject);
          }, reject);
        }));
      }

      return new Ember.RSVP.Promise(resolve => {
        Ember.RSVP.allSettled(promises).then(() => {
          resolve(this.get('value'));
        });
      });
    }
  });
});
define("djember-sample/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "e86SO5S2", "block": "{\"symbols\":[\"tabset\",\"btabset\",\"wtabset\"],\"statements\":[[6,\"ol\"],[10,\"class\",\"breadcrumb home\"],[8],[0,\"\\n  \"],[6,\"li\"],[10,\"class\",\"active\"],[8],[0,\"🏡 Home\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"main\"],[10,\"class\",\"container-fluid home\"],[8],[0,\"\\n  \"],[6,\"h2\"],[10,\"class\",\"center\"],[8],[0,\"\\n    🎉 Welcome to the Djember Sample application 🎉\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"description\"],[8],[0,\"\\n    \"],[1,[26,\"markdown-to-html\",[\"\\nThis application is a sample application for 4 projects:\\n\\n- [ember-cli-dynamic-model](https://bitbucket.org/levit_scs/ember-cli-dynamic-model)\\n- [ember-cli-crudities](http://ember-cli-crudities.readthedocs.io/en/latest/)\\n- [DRF-schema-adapter](http://drf-schema-adapter.readthedocs.io/en/latest/)\\n- [DRF-Base64](https://bitbucket.org/levit_scs/drf_base64)\\n\\n### To test the application:\\n\\nPlease make sure to login first using:\"],null],false],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"pull-left oversize\"],[8],[0,\"\\n      🔐\\n    \"],[9],[0,\"\\n\\n    \"],[1,[26,\"markdown-to-html\",[\"\\n- User: `demo`\\n- Passphrase: `Passphrase for demo user account`\\n\\nThen checkout the `Ember admin` section of this site as well as the `Django API`\\n(make sure to click the `OPTIONS` button where-ever you can think of).\\n\\nFeel free to also try the sample webshop!\\n\\n### How...\"],null],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[4,\"tab-set\",null,[[\"tabs\",\"active\"],[[22,[\"model\",\"tabs\"]],[22,[\"model\",\"active\"]]]],{\"statements\":[[4,\"tab-content\",null,[[\"tabId\",\"tabset\"],[\"work\",[21,1,[]]]],{\"statements\":[[0,\"      \"],[1,[26,\"markdown-to-html\",[\"This demo is almost entirely a dynamic client.\\nWorking with a dynamic client means the client must receive all its information from the API.\\nThere are several types of information provided by the API:\"],null],false],[0,\"\\n\"],[4,\"tab-set\",null,[[\"tabs\"],[[22,[\"model\",\"workTabs\"]]]],{\"statements\":[[4,\"tab-content\",null,[[\"tabId\",\"tabset\"],[\"structure\",[21,3,[]]]],{\"statements\":[[0,\"          \"],[14,\"app-structure\",[1,3]],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"tab-content\",null,[[\"tabId\",\"tabset\"],[\"models\",[21,3,[]]]],{\"statements\":[[0,\"          \"],[14,\"models-structure\",[1,3]],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"tab-content\",null,[[\"tabId\",\"tabset\"],[\"fields\",[21,3,[]]]],{\"statements\":[[0,\"          \"],[14,\"fields-structure\",[1,3]],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"tab-content\",null,[[\"tabId\",\"tabset\"],[\"list\",[21,3,[]]]],{\"statements\":[[0,\"          \"],[14,\"list-structure\",[1,3]],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"tab-content\",null,[[\"tabId\",\"tabset\"],[\"form\",[21,3,[]]]],{\"statements\":[[0,\"          \"],[14,\"form-structure\",[1,3]],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"tab-content\",null,[[\"tabId\",\"tabset\"],[\"actions\",[21,3,[]]]],{\"statements\":[[0,\"          \"],[14,\"actions-structure\",[1,3]],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[3]},null]],\"parameters\":[]},null],[4,\"tab-content\",null,[[\"tabId\",\"tabset\"],[\"built\",[21,1,[]]]],{\"statements\":[[0,\"      \"],[1,[26,\"markdown-to-html\",[\"This sample application was built in only a few steps.\"],null],false],[0,\"\\n\"],[4,\"tab-set\",null,[[\"tabs\"],[[22,[\"model\",\"builtTabs\"]]]],{\"statements\":[[4,\"tab-content\",null,[[\"tabId\",\"tabset\"],[\"bootstrap\",[21,2,[]]]],{\"statements\":[[0,\"          \"],[14,\"bootstrap-code\",[1,2]],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"tab-content\",null,[[\"tabId\",\"tabset\"],[\"backend\",[21,2,[]]]],{\"statements\":[[0,\"          \"],[14,\"backend-code\",[1,2]],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"tab-content\",null,[[\"tabId\",\"tabset\"],[\"frontend\",[21,2,[]]]],{\"statements\":[[0,\"          \"],[14,\"frontend-code\",[1,2]],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null]],\"parameters\":[]},null],[4,\"tab-content\",null,[[\"tabId\",\"tabset\"],[\"images\",[21,1,[]]]],{\"statements\":[[0,\"      \"],[14,\"image-upload\",[1]],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"  \"],[6,\"div\"],[10,\"class\",\"clearfix\"],[8],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"pull-left oversize align-right\"],[8],[0,\"\\n    👋\"],[6,\"br\"],[8],[9],[0,\"\\n    ☺️🖥\\n  \"],[9],[0,\"\\n  \"],[6,\"p\"],[8],[9],[0,\"\\n  And that was it!\\n  \"],[6,\"br\"],[8],[9],[0,\"\\n  \"],[6,\"br\"],[8],[9],[0,\"\\n  \"],[6,\"br\"],[8],[9],[0,\"\\n  Happy coding everyone!\\n\"],[9],[0,\"\\n\"]],\"hasEval\":true}", "meta": { "moduleName": "djember-sample/index/template.hbs" } });
});
define('djember-sample/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'djember-sample/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('djember-sample/initializers/component-styles', ['exports', 'ember-component-css/initializers/component-styles', 'djember-sample/mixins/style-namespacing-extras'], function (exports, _componentStyles, _styleNamespacingExtras) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = exports.default = undefined;
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _componentStyles.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _componentStyles.initialize;
    }
  });


  // eslint-disable-next-line ember/new-module-imports
  Ember.Component.reopen(_styleNamespacingExtras.default);
});
define('djember-sample/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('djember-sample/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize() {}
  };
});
define('djember-sample/initializers/debug', ['exports', '@html-next/vertical-collection/-debug'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'vertical-collection-debug',
    initialize() {}
  };
});
define('djember-sample/initializers/django', ['exports', 'ember-cli-js-cookie'], function (exports, _emberCliJsCookie) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;


  function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method)
    );
  }

  function initialize() /* application */{
    // just in case someone wants to use window.$
    // instead of fetch
    if (window.$) {
      let csrftoken = _emberCliJsCookie.default.get('csrftoken');
      window.$.ajaxSetup({
        beforeSend(xhr, settings) {
          if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
          }
        },
        complete() /* xhr, status */{
          const tmp_csrftoken = _emberCliJsCookie.default.get('csrftoken');
          if (tmp_csrftoken !== undefined && tmp_csrftoken.length) {
            csrftoken = tmp_csrftoken;
          }
          const tmp_sessionid = _emberCliJsCookie.default.get('sessionid');
          if (tmp_sessionid !== undefined && tmp_sessionid) {
            _emberCliJsCookie.default.set('sessionid', tmp_sessionid);
          }
        }
      });
    }
  }

  exports.default = {
    name: 'django',
    initialize
  };
});
define('djember-sample/initializers/ember-cli-mirage', ['exports', 'djember-sample/config/environment', 'djember-sample/mirage/config', 'ember-cli-mirage/get-rfc232-test-context', 'ember-cli-mirage/start-mirage'], function (exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;
  exports.default = {
    name: 'ember-cli-mirage',
    initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, { instantiate: false });
      }
      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, { instantiate: false });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};
      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage(env = _environment.default) {
    return (0, _startMirage.default)(null, { env, baseConfig: _config.default, testConfig: _config.testConfig });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }
    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    let defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('djember-sample/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
define('djember-sample/initializers/ember-data-factory-guy', ['exports', 'ember-data-factory-guy/utils/manual-setup'], function (exports, _manualSetup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data-factory-guy',
    after: 'ember-data',

    initialize: function (application) {
      if (arguments.length > 1) {
        application = arguments[1];
      }
      let container = application.__container__;
      if (container) {
        // in fastboot container is null
        (0, _manualSetup.default)(container);
      }
    }
  };
});
define('djember-sample/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('djember-sample/initializers/ember-simple-auth', ['exports', 'djember-sample/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service', 'ember-simple-auth/initializers/setup-session-restoration'], function (exports, _environment, _configuration, _setupSession, _setupSessionService, _setupSessionRestoration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize(registry) {
      const config = _environment.default['ember-simple-auth'] || {};
      config.rootURL = _environment.default.rootURL || _environment.default.baseURL;
      _configuration.default.load(config);

      (0, _setupSession.default)(registry);
      (0, _setupSessionService.default)(registry);
      (0, _setupSessionRestoration.default)(registry);
    }
  };
});
define('djember-sample/initializers/export-application-global', ['exports', 'djember-sample/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
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

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('djember-sample/initializers/flash-messages', ['exports', 'djember-sample/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;


  const { deprecate } = Ember;
  const merge = Ember.assign || Ember.merge;
  const INJECTION_FACTORIES_DEPRECATION_MESSAGE = '[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.';
  const addonDefaults = {
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
    const application = arguments[1] || arguments[0];
    const { flashMessageDefaults } = _environment.default || {};
    const { injectionFactories } = flashMessageDefaults || [];
    const options = merge(addonDefaults, flashMessageDefaults);
    const shouldShowDeprecation = !(injectionFactories && injectionFactories.length);

    application.register('config:flash-messages', options, { instantiate: false });
    application.inject('service:flash-messages', 'flashMessageDefaults', 'config:flash-messages');

    deprecate(INJECTION_FACTORIES_DEPRECATION_MESSAGE, shouldShowDeprecation, {
      id: 'ember-cli-flash.deprecate-injection-factories',
      until: '2.0.0'
    });

    options.injectionFactories.forEach(factory => {
      application.inject(factory, 'flashMessages', 'service:flash-messages');
    });
  }

  exports.default = {
    name: 'flash-messages',
    initialize
  };
});
define('djember-sample/initializers/hide-loading-screen', ['exports', 'djember-sample/instance-initializers/hide-loading-screen'], function (exports, _hideLoadingScreen) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;


  const { VERSION } = Ember;

  const EMBER_VERSION_REGEX = /^([0-9]+)\.([0-9]+)\.([0-9]+)(?:(?:\-(alpha|beta)\.([0-9]+)(?:\.([0-9]+))?)?)?(?:\+(canary))?(?:\.([0-9abcdef]+))?(?:\-([A-Za-z0-9\.\-]+))?(?:\+([A-Za-z0-9\.\-]+))?$/;

  /**
   * VERSION_INFO[i] is as follows:
   *
   * 0  complete version string
   * 1  major version
   * 2  minor version
   * 3  trivial version
   * 4  pre-release type (optional: "alpha" or "beta" or undefined for stable releases)
   * 5  pre-release version (optional)
   * 6  pre-release sub-version (optional)
   * 7  canary (optional: "canary", or undefined for stable releases)
   * 8  SHA (optional)
   *
   * @private
   */
  const VERSION_INFO = EMBER_VERSION_REGEX.exec(VERSION);
  const isPre111 = parseInt(VERSION_INFO[1], 10) < 2 && parseInt(VERSION_INFO[2], 10) < 12;

  function initialize() {
    if (isPre111) {
      let [registry, application] = arguments;
      _hideLoadingScreen.default.initialize(registry, application);
    }
  }

  exports.default = {
    name: 'hide-loading-screen',
    initialize
  };
});
define('djember-sample/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize() {}
  };
});
define("djember-sample/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals", "liquid-fire/velocity-ext"], function (exports, _emberInternals) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  (0, _emberInternals.initialize)();

  exports.default = {
    name: 'liquid-fire',
    initialize: function () {}
  };
});
define('djember-sample/initializers/local-storage-adapter', ['exports', 'ember-local-storage/initializers/local-storage-adapter'], function (exports, _localStorageAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _localStorageAdapter.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _localStorageAdapter.initialize;
    }
  });
});
define('djember-sample/initializers/route-styles', ['exports', 'ember-component-css/initializers/route-styles'], function (exports, _routeStyles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routeStyles.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _routeStyles.initialize;
    }
  });
});
define('djember-sample/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize() {}
  };
});
define('djember-sample/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize() {}
  };
});
define('djember-sample/instance-initializers/ember-cli-mirage-autostart', ['exports', 'ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart'], function (exports, _emberCliMirageAutostart) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
define("djember-sample/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('djember-sample/instance-initializers/ember-href-to', ['exports', 'ember-href-to/href-to'], function (exports, _hrefTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function closestLink(el) {
    if (el.closest) {
      return el.closest('a');
    } else {
      el = el.parentElement;
      while (el && el.tagName !== 'A') {
        el = el.parentElement;
      }
      return el;
    }
  }
  exports.default = {
    name: 'ember-href-to',
    initialize(applicationInstance) {
      // we only want this to run in the browser, not in fastboot
      if (typeof FastBoot === "undefined") {
        let hrefToClickHandler = function _hrefToClickHandler(e) {
          let link = e.target.tagName === 'A' ? e.target : closestLink(e.target);
          if (link) {
            let hrefTo = new _hrefTo.default(applicationInstance, e, link);
            hrefTo.maybeHandle();
          }
        };

        document.body.addEventListener('click', hrefToClickHandler);

        // Teardown on app destruction: clean up the event listener to avoid
        // memory leaks.
        applicationInstance.reopen({
          willDestroy() {
            document.body.removeEventListener('click', hrefToClickHandler);
            return this._super(...arguments);
          }
        });
      }
    }
  };
});
define('djember-sample/instance-initializers/ember-simple-auth', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize() {}
  };
});
define('djember-sample/instance-initializers/hide-loading-screen', ['exports', 'djember-sample/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;


  const userConfig = _environment.default['ember-load'] || {};

  function initialize() {
    const instance = arguments[1] || arguments[0];
    const container = !!arguments[1] ? arguments[0] : instance.container;

    if (Ember.View) {
      let ApplicationView = container.lookupFactory ? container.lookupFactory('view:application') : instance.resolveRegistration('view:application');

      ApplicationView = ApplicationView.reopen({
        didInsertElement() {
          this._super(...arguments);

          var loadingIndicatorClass = userConfig.loadingIndicatorClass || 'ember-load-indicator';

          Ember.$(`.${loadingIndicatorClass}`).remove();
        }
      });
    }
  }

  exports.default = {
    name: 'hide-loading-screen-instance',
    initialize
  };
});
define('djember-sample/login/controller', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define('djember-sample/login/route', ['exports', 'ember-simple-auth/mixins/unauthenticated-route-mixin'], function (exports, _unauthenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_unauthenticatedRouteMixin.default, {});
});
define("djember-sample/login/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YS0DcUaO", "block": "{\"symbols\":[],\"statements\":[[6,\"p\"],[10,\"class\",\"alert alert-danger\"],[8],[6,\"i\"],[10,\"class\",\"fa fa-exclamation-circle\"],[8],[9],[0,\"  Please sign in to see this page.\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/login/template.hbs" } });
});
define('djember-sample/logout/controller', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define('djember-sample/logout/route', ['exports', 'simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_authenticatedRouteMixin.default, {});
});
define("djember-sample/logout/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Bz55TJOz", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[20,\"outlet\"],false],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/logout/template.hbs" } });
});
define("djember-sample/mirage/config", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
    */
  };
});
define("djember-sample/mirage/scenarios/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () /* server */{

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */

    // server.createList('post', 10);
  };
});
define('djember-sample/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.JSONAPISerializer.extend({});
});
define('djember-sample/mixins/style-namespacing-extras', ['exports', 'ember-component-css/mixins/style-namespacing-extras'], function (exports, _styleNamespacingExtras) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _styleNamespacingExtras.default;
    }
  });
});
define('djember-sample/models/accounting/invoice', ['exports', 'djember-sample/models/base/accounting/invoice'], function (exports, _invoice) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _invoice.default.extend({
    total: 0,
    onLinesChange: function () {
      this.get('lines').then(lines => {
        let total = 0;
        lines.map(line => {
          total += line.get('total');
        });
        this.set('total', total);
      });
    }.observes('lines', 'lines.length', 'lines.@each.total'),

    open() {
      this.set('state', 'open');
      return this.save();
    },
    makeDraft() {
      this.set('state', 'draft');
      return this.save();
    }
  });
});
define('djember-sample/models/accounting/invoiceline', ['exports', 'djember-sample/models/base/accounting/invoiceline'], function (exports, _invoiceline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _invoiceline.default.extend({
    total: Ember.computed('quantity', 'product', 'product.price', function () {
      return parseInt(this.get('quantity') || 0) * parseFloat(this.get('product.price') || 0.0);
    })
  });
});
define('djember-sample/models/base/accounting/invoice', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _model, _attr, _relationships) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _model.default.extend({

    date: (0, _attr.default)('nullable'),

    invoice_type: (0, _attr.default)('string'),

    state: (0, _attr.default)('string'),

    __str__: (0, _attr.default)('string'),

    lines: (0, _relationships.hasMany)('accounting/invoiceline', {
      async: true,
      inverse: 'invoice'
    }),

    related_party: (0, _relationships.belongsTo)('crm/company', {
      async: true,
      inverse: 'invoices'
    })

  });
});
define('djember-sample/models/base/accounting/invoiceline', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _model, _attr, _relationships) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _model.default.extend({

    quantity: (0, _attr.default)('number'),

    position: (0, _attr.default)('number'),

    __str__: (0, _attr.default)('string'),

    invoice: (0, _relationships.belongsTo)('accounting/invoice', {
      async: true,
      inverse: 'lines'
    }),

    product: (0, _relationships.belongsTo)('products/product', {
      async: true,
      inverse: null
    })

  });
});
define('djember-sample/models/basketitem', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _model, _attr, _relationships) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _model.default.extend({
    qty: (0, _attr.default)('number'),
    product: (0, _relationships.belongsTo)('products/product', {
      async: true,
      inverse: null
    }),
    total: Ember.computed('qty', 'product', 'product.price', function () {
      return parseInt(this.get('qty')) * parseFloat(this.get('product.price'));
    }),
    __str__: Ember.computed('product', 'product.name', 'qty', function () {
      return `${this.get('qty')} x ${this.get('product.name')}`;
    })
  });
});
define('djember-sample/models/userinfo', ['exports', 'ember-data/model', 'ember-data/attr'], function (exports, _model, _attr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _model.default.extend({
    username: (0, _attr.default)('string'),
    first_name: (0, _attr.default)('string'),
    last_name: (0, _attr.default)('string'),
    email: (0, _attr.default)('string')
  });
});
define('djember-sample/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('djember-sample/router', ['exports', 'djember-sample/config/environment', 'djember-sample/sections'], function (exports, _environment, _sections) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType
  });

  exports.default = Router.map(function () {
    _sections.default.forEach(section => {
      if (section.route !== 'djember' && section.route !== 'shop') {
        const opts = section.opts || {};
        this.route(section.route, opts);
      }
    });
    this.route('login');
    this.route('logout');
    this.route('djember', function () {
      this.route('app', { path: '/:app_name' });
      this.route('list', { path: '/:app_name/:model_name' });
      this.route('form', { path: '/:app_name/:model_name/:id' });
    });
    this.route('shop', function () {
      this.route('basket');
    });
  });
});
define('djember-sample/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { Route } = Ember;

  // Ensure the application route exists for ember-simple-auth's `setup-session-restoration` initializer
  exports.default = Route.extend();
});
define('djember-sample/sections', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{
    title: 'Home',
    route: 'index',
    opts: {
      path: '/'
    },
    emoji: '🏡'
  }, {
    title: 'Ember admin',
    route: 'djember',
    emoji: '🐾'
  }, {
    title: 'Sample webshop',
    route: 'shop',
    emoji: '🏪'
  }];
});
define('djember-sample/serializers/application', ['exports', 'djember-sample/serializers/drf'], function (exports, _drf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _drf.default;
});
define('djember-sample/serializers/basketitem', ['exports', 'ember-local-storage/serializers/serializer'], function (exports, _serializer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _serializer.default;
    }
  });
});
define('djember-sample/serializers/drf', ['exports', 'ember-django-adapter/serializers/drf'], function (exports, _drf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _drf.default;
});
define('djember-sample/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('djember-sample/services/cart', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    store: Ember.inject.service(),
    modelLoader: Ember.inject.service(),

    items: [],

    last_update: undefined,
    set_updated() {
      this.set('last_update', new Date());
    },

    append(product, qty) {
      qty = parseInt(qty);
      this.get('store').query('basketitem', { filter: { product: product.get('id') } }).then(items => {
        let item = items.get('firstObject');
        if (item) {
          item.set('qty', item.get('qty') + qty);
        } else {
          item = this.get('store').createRecord('basketitem', {
            product,
            qty
          });
        }
        item.save();
        this.set_updated();
      }, err => {
        console.error(err);
      });
    },

    count: Ember.computed('last_update', 'items.@each.qty', 'items.length', 'items', function () {
      return this.get('items').reduce(function (sum, item) {
        return sum + parseInt(item.get('qty'));
      }, 0);
    }),

    init() {
      const modelLoader = this.get('modelLoader');
      modelLoader.ensure_model('products', 'product').then(() => {
        this.get('store').findAll('basketitem').then(items => {
          items.map(item => {
            item.get('product');
            // .catch((err) => {
            //   console.warn(err, 'destroying', item);
            //   item.destroyRecord();
            // });
          });
          this.set('items', items);
          this.set_updated();
        });
      });
    }
  });
});
define('djember-sample/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _cookies) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _cookies.default;
});
define('djember-sample/services/ember-elsewhere', ['exports', 'ember-elsewhere/services/ember-elsewhere'], function (exports, _emberElsewhere) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberElsewhere.default;
    }
  });
});
define('djember-sample/services/ember-load-config', ['exports', 'ember-load/services/ember-load-config', 'djember-sample/config/environment'], function (exports, _emberLoadConfig, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const userConfig = _environment.default['ember-load'] || {};

  exports.default = _emberLoadConfig.default.extend({
    loadingIndicatorClass: userConfig.loadingIndicatorClass
  });
});
define('djember-sample/services/filter-memory', ['exports', 'ember-cli-crudities/services/filter-memory'], function (exports, _filterMemory) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filterMemory.default;
    }
  });
});
define('djember-sample/services/flash-messages', ['exports', 'ember-cli-flash/services/flash-messages'], function (exports, _flashMessages) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flashMessages.default;
    }
  });
});
define("djember-sample/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _transitionMap) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _transitionMap.default;
});
define('djember-sample/services/liquid-wormhole', ['exports', 'liquid-wormhole/services/liquid-wormhole'], function (exports, _liquidWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidWormhole.default;
    }
  });
});
define('djember-sample/services/model-loader', ['exports', 'ember-cli-dynamic-model/services/model-loader'], function (exports, _modelLoader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modelLoader.default;
    }
  });
});
define('djember-sample/services/moment', ['exports', 'ember-moment/services/moment', 'djember-sample/config/environment'], function (exports, _moment, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { get } = Ember;

  exports.default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });
});
define('djember-sample/services/session', ['exports', 'djember-sample/config/environment', 'ember-simple-auth/services/session', 'ember-network/fetch', 'ember-cli-js-cookie'], function (exports, _environment, _session, _fetch, _emberCliJsCookie) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { observer } = Ember;

  exports.default = _session.default.extend({
    currentUser: null,
    loginError: false,
    setCurrentUser: observer('isAuthenticated', function () {
      if (this.get('isAuthenticated')) {
        const globalConfig = _environment.default['ember-simple-auth'] || {};
        const serverAuthEndpoint = globalConfig.serverAuthEndpoint || '/rest-auth';
        const url = `${serverAuthEndpoint}/me/?format=json`;
        if (window.$ !== undefined) {
          window.$.get(url, xhr => {
            this.set('currentUser', xhr);
          }).fail(() => {
            this.set('isAuthenticated', false);
          });
        } else {
          const params = {
            headers: {
              "X-CSRFToken": _emberCliJsCookie.default.get('csrftoken'),
              "Content-Type": 'application/json',
              "Accept": 'application/json'
            }
          };
          (0, _fetch.default)(url, params).then(response => {
            return response.json();
          }, () => {
            this.set('isAuthenticated', false);
          }).then(json => {
            this.set('currentUser', json);
          }, () => {
            console.log('failed parsing reponse for current user');
            this.set('isAuthenticated', false);
          });
        }
      } else {
        this.set('currentUser', '');
      }
    })
  });
});
define('djember-sample/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _textMeasurer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
define('djember-sample/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _adaptive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _adaptive.default.extend();
});
define('djember-sample/shop/basket/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    modelLoader: Ember.inject.service(),

    model() {
      const modelLoader = this.get('modelLoader');
      return new Ember.RSVP.Promise((resolve, reject) => {
        modelLoader.ensure_model('products', 'category').then(() => {
          resolve({
            model: this.get('store').findAll('basketitem'),
            meta: {
              fields: [{
                name: 'qty',
                label: 'Quantity',
                widget: 'number',
                required: true
              }, {
                name: 'product.name',
                label: 'Product'
              }, {
                name: 'product.price',
                label: 'Unit price'
              }, {
                name: 'total',
                label: 'total',
                widget: 'number',
                extra: {
                  'decimals': 2
                }
              }],
              list_display: ['qty', 'product.name', 'product.price', 'total'],
              list_editable: ['qty'],
              aggregates: [{
                label: 'Total',
                type: 'sum',
                property_path: 'total',
                decimals: 2
              }]
            }
          });
        }, reject);
      });
    },
    actions: {
      clearbasket() {
        this.get('store').findAll('basketitem').then(records => {
          records.map(item => {
            item.destroyRecord();
          });
        });
      }
    }
  });
});
define("djember-sample/shop/basket/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/u0R3yqN", "block": "{\"symbols\":[],\"statements\":[[6,\"ol\"],[10,\"class\",\"breadcrumb home\"],[8],[0,\"\\n  \"],[6,\"li\"],[8],[6,\"a\"],[11,\"href\",[26,\"href-to\",[\"shop\"],null],null],[8],[0,\"🏪 Sample webshop\"],[9],[9],[0,\"\\n  \"],[6,\"li\"],[10,\"class\",\"active\"],[8],[0,\"Basket\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"col-sm-8 col-md-6\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"model\",\"length\"]]],null,{\"statements\":[[0,\"      \"],[6,\"h2\"],[8],[0,\"Your basket is empty\"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[26,\"change-list\",null,[[\"model\",\"model_name\",\"fetchMeta\",\"title\",\"fields\",\"list_display\",\"list_editable\",\"aggregates\",\"allowBulk\",\"showPagination\",\"class\"],[[22,[\"model\",\"model\"]],\"local/basket item\",false,\"My basket\",[22,[\"model\",\"meta\",\"fields\"]],[22,[\"model\",\"meta\",\"list_display\"]],[22,[\"model\",\"meta\",\"list_editable\"]],[22,[\"model\",\"meta\",\"aggregates\"]],false,false,\"basket\"]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"col-sm-4 col-md-6 panel panel-warning\"],[8],[0,\"\\n    \"],[6,\"h3\"],[10,\"class\",\"text-warning\"],[8],[0,\"We are sorry but this is a sample shop and you cannot order.\"],[9],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"btn btn-danger pull-right\"],[3,\"action\",[[21,0,[]],\"clearbasket\"]],[8],[0,\"Clear basket\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"clearfix\"],[8],[9],[0,\"\\n    \"],[6,\"br\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/shop/basket/template.hbs" } });
});
define('djember-sample/shop/index/route', ['exports', 'ember-cli-crudities/mixins/change-route'], function (exports, _changeRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_changeRoute.default, {
    model() {
      return this._super({ app_name: 'products', model_name: 'product' });
    }
  });
});
define("djember-sample/shop/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VnAIZxBg", "block": "{\"symbols\":[\"parent\",\"record\"],\"statements\":[[6,\"ol\"],[10,\"class\",\"breadcrumb home\"],[8],[0,\"\\n  \"],[6,\"li\"],[10,\"class\",\"active\"],[8],[0,\"🏪 Sample webshop\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n\"],[4,\"change-list\",null,[[\"model_name\",\"label\",\"app_name\",\"fields\",\"list_display\",\"filter_fields\",\"search_enabled\",\"custom_actions\"],[\"products/product\",[22,[\"model\",\"model_name\"]],[22,[\"model\",\"app_name\"]],[22,[\"model\",\"meta\",\"fields\"]],[22,[\"model\",\"meta\",\"list_display\"]],[22,[\"model\",\"meta\",\"filter_fields\"]],[22,[\"model\",\"meta\",\"search_enabled\"]],[22,[\"model\",\"meta\",\"custom_actions\"]]]],{\"statements\":[[4,\"if\",[[21,1,[\"showFilters\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"list-filters\",null,[[\"parent\"],[[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[6,\"div\"],[11,\"class\",[27,[[21,1,[\"inputClass\"]],\" \",[21,1,[\"listClassName\"]],\" flex\"]]],[8],[0,\"\\n\"],[4,\"liquid-if\",[[21,1,[\"model\",\"isFulfilled\"]]],null,{\"statements\":[[4,\"each\",[[21,1,[\"model\"]]],null,{\"statements\":[[0,\"          \"],[1,[26,\"product-card\",null,[[\"model\",\"receiver\",\"custom_actions\"],[[21,2,[]],[21,1,[]],[21,1,[\"custom_actions\"]]]]],false],[0,\"\\n\"]],\"parameters\":[2]},{\"statements\":[[0,\"          \"],[6,\"p\"],[8],[0,\"Sorry, no results found\"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"],[10,\"style\",\"text-align: center;\"],[8],[0,\"\\n          \"],[6,\"i\"],[10,\"class\",\"fa fa-spinner fa-spin fa-5x\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/shop/index/template.hbs" } });
});
define("djember-sample/templates/accounting-endpoints", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TR5if2lD", "block": "{\"symbols\":[],\"statements\":[[0,\"from django.urls import reverse\\nfrom django.contrib.contenttypes.models import ContentType\\nfrom django.shortcuts import get_object_or_404\\n\\nfrom rest_framework.response import Response\\n\\nfrom levit_report.models import Document\\n\\nfrom drf_auto_endpoint.endpoints import Endpoint\\nfrom drf_auto_endpoint.decorators import custom_action\\nfrom drf_auto_endpoint.router import router, register\\n\\nfrom .models import Invoice, InvoiceLine\\n\\n\\n@register\\nclass InvoiceEndpoint(Endpoint):\\n\\n    model = Invoice\\n    list_display = ['id', 'invoice_type', 'related_party', 'total', 'state', ]\\n    filter_fields = ['related_party_id', 'state', ]\\n\\n    custom_actions = [\\n        {\\n            'type': 'modelMethod',\\n            'method': 'makeDraft',\\n            'icon_class': 'fa fa-fire',\\n            'btn_class': 'btn btn-warning',\\n            'text': 'Make draft',\\n            'display_condition': {\\n                'operator': 'eq',\\n                'value': 'open',\\n                'property_path': 'state',\\n            },\\n        }, {\\n            'type': 'modelMethod',\\n            'method': 'open',\\n            'icon_class': 'fa fa-check',\\n            'btn_class': 'btn btn-default',\\n            'text': 'Open',\\n            'display_condition': {\\n                'operator': 'in',\\n                'value': ['draft', 'paid'],\\n                'property_path': 'state',\\n            },\\n            'allowBulk': True,\\n        }\\n    ]\\n\\n    @custom_action(method='POST', icon_class='fa fa-money', btn_class='btn btn-success', text='Pay',\\n                   pushPayload=True, allowBulk=True,\\n                   display_condition={'operator': 'eq', 'value': 'open', 'property_path': 'state', })\\n    def pay(self, request, pk):\\n        obj = get_object_or_404(self.model, pk=pk)\\n        obj.state = 'paid'\\n        obj.save()\\n        serializer = self.get_serializer(obj)\\n        rv = {}\\n        rv[self.get_url()] = [serializer.data, ]\\n        return Response(rv)\\n\\n    def get_custom_actions(self):\\n        ct = ContentType.objects.get_for_model(self.model)\\n        return [{\\n            'type': 'download',\\n            'url': reverse('print', kwargs={ 'slug': report.slug, 'object_id': ':id'}),\\n            'icon_class': 'fa fa-download',\\n            'btn_class': 'btn btn-primary',\\n            'text': 'Download {}'.format(report.name),\\n        } for report in ct.reports.all()] + super(InvoiceEndpoint, self).get_custom_actions()\\n\\n    def get_bulk_actions(self):\\n        ct = ContentType.objects.get_for_model(self.model)\\n        return [{\\n            'type': 'download',\\n            'url': reverse('print', kwargs={ 'slug': report.slug}),\\n            'icon_class': 'fa fa-download',\\n            'btn_class': 'btn btn-primary',\\n            'text': 'Download {}'.format(report.name),\\n        } for report in ct.reports.all()]\\n\\n\\nrouter.register(InvoiceLine, list_me=False)\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/accounting-endpoints.hbs" } });
});
define("djember-sample/templates/actions-structure", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "v/UJ2HJh", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"col-sm-6 col-xs-12 description\"],[8],[0,\"\\n  \"],[1,[26,\"markdown-to-html\",[\"\\nActions are also provided by that same `OPTIONS` call. There are 2 types of actions:\\n\\n- `custom_actions`: Those are actions that will be available on each record. If they\\n  have an active `allowBulk` flag, those actions will also be available as bulk actions.\\n- `bulk_actions`: Those are actions that will be available for (several) selected\\n  record.\\n  \"],null],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"col-sm-6 col-xs-12\"],[8],[0,\"\\n  \"],[1,[26,\"options-getter\",null,[[\"value\"],[[22,[\"model\",\"jsons\",\"actions\"]]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/actions-structure.hbs" } });
});
define("djember-sample/templates/app-structure", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zzLfA3fT", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"col-sm-6 col-xs-12\"],[8],[0,\"\\n  \"],[1,[26,\"markdown-to-html\",[\"\\n  The application structure is provided to the client by the Root API; more specifically,\\n  if you make an `OPTIONS` call to the API's root, you'll receive the information\\n  on the right.\\n\\n  This particular dynamic client doesn't use the `endpoints` information, only the\\n  `applications` information.\\n\\n  This is how the [dashboard](/djember) is built.\\n  \"],null],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"col-sm-6 col-xs-12\"],[8],[0,\"\\n  \"],[1,[26,\"options-getter\",null,[[\"value\"],[[22,[\"model\",\"jsons\",\"app\"]]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/app-structure.hbs" } });
});
define("djember-sample/templates/backend-code", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "nRbbl+wA", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"description\"],[8],[0,\"\\n  \"],[1,[26,\"markdown-to-html\",[\"\\n- 3 new applications and 7 new models were created in Django: \\n  [crm/models.py](https://github.com/drf-forms/ember_sample/blob/master/back/crm/models.py),\\n  [products/models.py](https://github.com/drf-forms/ember_sample/blob/master/back/products/models.py) and \\n  [accounting/models.py](https://github.com/drf-forms/ember_sample/blob/master/back/accounting/models.py)\\n- Translations for `products` models where created (using [django-modeltranslation](http://django-modeltranslation.readthedocs.io/en/latest/))\\n\\t[products.translation.py](https://github.com/drf-forms/ember_sample/blob/master/back/products/translation.py)\\n- A few custom endpoints were created for some of the models in each applications:\\n- Endpoints for each model were registered\\n  \"],null],false],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-md-6 col-sm-12\"],[8],[0,\"\\n      \"],[1,[26,\"markdown-to-html\",[\"  - `accounting`\"],null],false],[0,\"\\n\"],[4,\"code-block\",null,[[\"language\"],[\"python\"]],{\"statements\":[[14,\"accounting-endpoints\",[]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-md-6 col-sm-12\"],[8],[0,\"\\n      \"],[1,[26,\"markdown-to-html\",[\" - `crm`\"],null],false],[0,\"\\n\"],[4,\"code-block\",null,[[\"language\"],[\"python\"]],{\"statements\":[[14,\"crm-endpoints\",[]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-md-6 col-sm-12\"],[8],[0,\"\\n      \"],[1,[26,\"markdown-to-html\",[\"  - `products`\"],null],false],[0,\"\\n\"],[4,\"code-block\",null,[[\"language\"],[\"python\"]],{\"statements\":[[14,\"products-endpoints\",[]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[1,[26,\"markdown-to-html\",[\"\\n- If you are curious about the form structures, you can also take a look at the\\n  fieldsets definitions which have been declared in separate `json` files (for\\n  readability's sake):\\n  [crm](https://github.com/drf-forms/ember_sample/blob/master/back/crm/fieldsets.json),\\n  [products](https://github.com/drf-forms/ember_sample/blob/master/back/products/fieldsets.json),\\n  [accounting](https://github.com/drf-forms/ember_sample/blob/master/back/accounting/fieldsets.json).\\n- Finally, before moving-on to the frontend, 2 endpoints were statically exported to\\n  frontend models (so that they can be customized) like this:\\n\\n  `./manage.py export accounting/invoices`\\n\\n  `./manage.py export accounting/invoicelines`\\n  \"],null],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":true}", "meta": { "moduleName": "djember-sample/templates/backend-code.hbs" } });
});
define("djember-sample/templates/base-invoice-js", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "z7Z5LdkU", "block": "{\"symbols\":[],\"statements\":[[0,\"/* eslint-disable */\\n// This base model was auto-generated by export_app\\n// PLEASE DO NOT EDIT\\n// you can make changes in app/models/accounting/invoice.js\\n// or regenerate this file by running\\n// `./manage.py export accounting/invoices`\\n\\nimport Model from 'ember-data/model';\\n\\nimport attr from 'ember-data/attr';\\n\\n\\nimport { belongsTo, hasMany } from 'ember-data/relationships';\\n\\n\\nexport default Model.extend({\\n  \\n    date: attr('nullable'),\\n  \\n    invoice_type: attr('string'),\\n  \\n    state: attr('string'),\\n  \\n    __str__: attr('string'),\\n  \\n  \\n    lines: hasMany('accounting/invoiceline', {\\n      async: true,\\n      inverse: 'invoice',\\n    }),\\n  \\n    related_party: belongsTo('crm/company', {\\n      async: true,\\n      inverse: 'invoices',\\n    }),\\n  \\n});\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/base-invoice-js.hbs" } });
});
define("djember-sample/templates/bootstrap-code", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "p05YcLV3", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"markdown-to-html\",[\"\\nThis application was bootstrapped using the\\n[cc-djember-experience cookiecutter](https://bitbucket.org/levit_scs/cc_djember_experience).\\n\\nThis gave us a ready-to-use Django API with an Ember frontend, including authentication and 4 routes in the [`djember` directory](https://github.com/drf-forms/ember_sample/blob/master/front/app/djember/).\\n\\n- `index`: This route is used for the dashboard and use the `app-dasboard` component from `ember-cli-crudities`\\n- `app`: This is a \\\"sub-dashboard\\\" route constructed in the same way as `index`\\n- `list`: This route is used to view a list of records of the same type. It uses `ember-cli-crudities`'s `change-route` mixin as well as its `change-list` component.\\n- `form`: This route is used to view and edit the details of a record. It uses `ember-cli-crudities`'s `change-route` mixin as well as its `change-form` component.\\n\"],null],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/bootstrap-code.hbs" } });
});
define("djember-sample/templates/components/code-block", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yxDuscim", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"code\"],[11,\"class\",[20,\"languageClass\"],null],[8],[13,1],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/components/code-block.hbs" } });
});
define("djember-sample/templates/crm-endpoints", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "STs5YYdz", "block": "{\"symbols\":[],\"statements\":[[0,\"from drf_auto_endpoint.endpoints import Endpoint\\nfrom drf_auto_endpoint.router import router, register\\n\\nfrom .models import Company, Contact, ContactMechanism, Segment\\n\\n\\n@register\\nclass ContactEndpoint(Endpoint):\\n    model = Contact\\n    fields = ['__str__', 'id', 'short_name', 'long_name', 'company', 'contactmechanisms',\\n              'default_mechanism']\\n    list_display = ['long_name', 'company', ]\\n    search_fields = ['long_name', 'short_name', ]\\n    filter_fields = ['company_id', ]\\n    oredering_fields = ['long_name', ]\\n\\n\\n@register\\nclass CompanyEndpoint(Endpoint):\\n    model = Company\\n    list_display = ['name', 'is_supplier', 'is_client', ]\\n    list_editable = ['is_supplier', 'is_client', ]\\n    search_fields = ['name', ]\\n    filter_fields = ['is_supplier', 'is_client', ]\\n    ordering_fields = ['name', ]\\n    save_twice = True\\n\\n\\nrouter.register(ContactMechanism, list_me=False)\\nrouter.register(Segment)\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/crm-endpoints.hbs" } });
});
define("djember-sample/templates/djember/form/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uc5z3mrK", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"loading\"],[8],[0,\"\\n  \"],[6,\"span\"],[10,\"class\",\"fa fa-spin fa-spinner fa-5x\"],[8],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/djember/form/loading.hbs" } });
});
define("djember-sample/templates/djember/list/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "aoh+BkwT", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"loading\"],[8],[0,\"\\n  \"],[6,\"span\"],[10,\"class\",\"fa fa-spin fa-spinner fa-5x\"],[8],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/djember/list/loading.hbs" } });
});
define("djember-sample/templates/djember/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "iIYOpkVm", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"loading\"],[8],[0,\"\\n  \"],[6,\"span\"],[10,\"class\",\"fa fa-spin fa-spinner fa-5x\"],[8],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/djember/loading.hbs" } });
});
define("djember-sample/templates/fields-structure", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "s1Sibh//", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"col-sm-6 col-xs-12\"],[8],[0,\"\\n  \"],[1,[26,\"markdown-to-html\",[\"\\nAs you might have noticed from the statically exported model, there isn't nearly as\\nmuch information about field types in an Ember model as there is in a Django model. So\\nwhere does the client get this information?\\n\\nFields information is provided by the api. If you do an `OPTIONS` call on any of the\\napi endpoints, you'll receive fields information like the one on the right. This\\ninformation is extracted from the endpoint's serializer and is much more complete\\nthan the one from the Ember model. This is the information used to render each field\\nwidget.\\n  \"],null],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"col-sm-6 col-xs-12\"],[8],[0,\"\\n  \"],[1,[26,\"options-getter\",null,[[\"value\"],[[22,[\"model\",\"jsons\",\"fields\"]]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/fields-structure.hbs" } });
});
define("djember-sample/templates/form-structure", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cPnwy/ws", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"col-sm-6 col-xs-12 description\"],[8],[0,\"\\n  \"],[1,[26,\"markdown-to-html\",[\"\\nAs `app-dashboard` and `change-list`, the `change-form` component gets its struture\\ninformation from an `OPTIONS` call the to endpoint it is related to.\\n\\nThis call returns a `fieldsets` information which tells the component about the form\\nstructure. The value of `fieldsets` is pretty similar to the same property on a Django\\nAdmin class with two major differences:\\n\\n- `ember-cli-crudities` fieldsets are nestable \\n- when specifying the list of fields in a fieldset, you can also use it to override\\n  default field parameters or provide extra parameters (like the class of the widget\\n  or how to limit foreign-key choosable values)\\n\\nIn the same manner as with the `change-list`, the `change-form` component then puts\\nthis structure information together with the fields information it got from the same\\n`OPTIONS` call to deduce how to display the form.\\n\\nField information about related models fields depends on another `OPTIONS` call to the\\nendpoint corresponding to that model.\\n  \"],null],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"col-sm-6 col-xs-12\"],[8],[0,\"\\n  \"],[1,[26,\"options-getter\",null,[[\"value\"],[[22,[\"model\",\"jsons\",\"form\"]]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/form-structure.hbs" } });
});
define("djember-sample/templates/frontend-code", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tOI4TcaT", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"description\"],[8],[0,\"\\n  \"],[1,[26,\"markdown-to-html\",[\"\\n### For the admin\\n\\n- The models exported from the backend were customized in order to benefit from live update\\n  \"],null],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-md-6 col-sm-12\"],[8],[0,\"\\n\"],[4,\"code-block\",null,[[\"language\"],[\"javascript\"]],{\"statements\":[[14,\"invoiceline-js\",[]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-md-6 col-sm-12\"],[8],[0,\"\\n\"],[4,\"code-block\",null,[[\"language\"],[\"javascript\"]],{\"statements\":[[14,\"invoice-js\",[]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[1,[26,\"markdown-to-html\",[\"\\n### For the webshop\\n\\nAside from creating components and services as in any other Ember application:\\n\\n- A [`shop/index`](https://github.com/drf-forms/ember_sample/blob/master/front/app/shop/index/)\\n  route was created. It uses `ember-cli-crudities`'s `change-route` mixin and `change-list` component. In the case, the `change-list` component is used in its block form.\\n- A [`shop/basket`](https://github.com/drf-forms/ember_sample/blob/master/front/app/shop/basket/)\\n  route was created. It uses `ember-cli-crudities`'s `change-list` component. In this\\n  case with a model stored in `local store` therefore the meta-information cannot be\\n  pulled from the backend and is provided directly in `route.js`.\\n\"],null],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":true}", "meta": { "moduleName": "djember-sample/templates/frontend-code.hbs" } });
});
define("djember-sample/templates/image-upload", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2R9F05NF", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"description\"],[8],[0,\"\\n  \"],[1,[26,\"markdown-to-html\",[\"\\n- when an image is dragged or selected to the image widget (`form-image` component) in\\n  the product form, the widget reads and publishes it as `base64-encoded` data, allowing\\n  for direct preview in the browser\\n- when the form is saved, this data is sent \\\"as-is\\\" to the API, making it possible to\\n  use `application/json` encoding instead of having to resort to `multi-part form`\\n- on the API side, **DRF-Base64** is able to decode this `base64-encoded` string and \\n  turns it back into a \\\"real\\\" file.\\n  \"],null],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/image-upload.hbs" } });
});
define("djember-sample/templates/invoice-js", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zFSpzM4T", "block": "{\"symbols\":[],\"statements\":[[0,\"import BaseModel from '../base/accounting/invoice';\\n\\nexport default BaseModel.extend({\\n  total: 0,\\n  onLinesChange: function() {\\n    this.get('lines').then((lines) => {\\n      let total = 0;\\n      lines.map((line) => {\\n        total += line.get('total');\\n      });\\n      this.set('total', total);\\n    });\\n  }.observes('lines', 'lines.length', 'lines.@each.total'),\\n\\n  open() {\\n    this.set('state', 'open');\\n    return this.save();\\n  },\\n  makeDraft() {\\n    this.set('state', 'draft');\\n    return this.save();\\n  },\\n});\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/invoice-js.hbs" } });
});
define("djember-sample/templates/invoiceline-js", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ctjB9Fo4", "block": "{\"symbols\":[],\"statements\":[[0,\"import Ember from 'ember';\\nimport BaseModel from '../base/accounting/invoiceline';\\n\\nexport default BaseModel.extend({\\n  total: Ember.computed('quantity', 'product', 'product.price', function() {\\n    return parseInt(this.get('quantity') || 0) * parseFloat(this.get('product.price') || 0.0);\\n  }),\\n});\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/invoiceline-js.hbs" } });
});
define("djember-sample/templates/list-structure", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "92Latkz8", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"col-sm-6 col-xs-12\"],[8],[0,\"\\n  \"],[1,[26,\"markdown-to-html\",[\"\\nThe `change-list` component also gets its structure information from an `OPTIONS` call\\nto the related endpoint.\\n\\nThis call returns information quite similar to what you would configure in a Django\\nAdmin class (`list_display`, `list_editable`, `ordering_fields`, `sortable_by`, ...).\\n\\nThe `change-list` component then puts this information together with the fields\\ninformation (it received it from the same call) to build the records list.\\n\\nThe \\\"Filters\\\" pane is also built from information received from this call (\\n`filter_fields` and `search_enabled`).\\n\\nFinally the `change-list` also receives actions from that call, there are 2 kinds of\\nactions: `custom_actions` and `bulk_actions`. `Custom_actions` are actions that will be\\nperformed on a per-record basis; they can also be performed in bulk if `allow_bulk` is\\n`true`. `Bulk_actions` are actions that can only be performed in bullk mode.\\n  \"],null],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"col-sm-6 col-xs-12\"],[8],[0,\"\\n  \"],[1,[26,\"options-getter\",null,[[\"value\"],[[22,[\"model\",\"jsons\",\"list\"]]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/list-structure.hbs" } });
});
define("djember-sample/templates/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zV+MKYVe", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"loading\"],[8],[0,\"\\n  \"],[6,\"span\"],[10,\"class\",\"fa fa-spin fa-spinner fa-5x\"],[8],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/loading.hbs" } });
});
define("djember-sample/templates/models-structure", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YnK2nZe+", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"col-sm-6 col-xs-12\"],[8],[0,\"\\n  \"],[1,[26,\"markdown-to-html\",[\"\\nEmber uses models with attributes representing each field. This information is not\\nprovided by the API per-say, it is still provided by the backend though.\\n\\nEach endpoint's structure is dynamically extracted from its backend serializer and\\nconverted to an Ember model. Each model is served by the backend at\\n`/models/<endpoint>.js`, if you care to look at a few examples, here are some links:\\n\\n  - [/models/products/products.js](/models/products/products.js)\\n  - [/models/products/categories.js](/models/products/categories.js)\\n  - [/models/crm/companies.js](/models/crm/companies.js)\\n\\nAs you can notice, this isn't very human-readable... But remember we said this was an\\n**almost** fully dynamic client? We've also statically exported 2 models in order to \\ncustomize them. When statically exporting an Ember model, 3 files are generated:\\n\\n  - A base file, susceptible to be overwritten and which shouldn't be edited\\n  - A model file inheriting from the base file (this is where the customization happens).\\n  - A test file (same as if the model was generated by ember-cli)\\n\\nOn the right, you can see what a statically exported Ember base model looks like, it's\\nmuch more readable than the dynamically exported ones.\\n\"],null],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"col-sm-6 col-xs-12\"],[8],[0,\"\\n\"],[4,\"code-block\",null,[[\"language\"],[\"javascript\"]],{\"statements\":[[14,\"base-invoice-js\",[]],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"]],\"hasEval\":true}", "meta": { "moduleName": "djember-sample/templates/models-structure.hbs" } });
});
define("djember-sample/templates/products-endpoints", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "D4OJkuqf", "block": "{\"symbols\":[],\"statements\":[[0,\"from drf_auto_endpoint.endpoints import Endpoint\\nfrom drf_auto_endpoint.router import router, register\\n\\nfrom .models import Product, Category\\n\\n\\n@register\\nclass ProductEndpoint(Endpoint):\\n    model = Product\\n\\n    page_size = 10\\n    list_display = ['picture', 'name', 'category', 'sale_type', 'price' ]\\n    search_fields = ['name', ]\\n    filter_fields = ['category_id', ]\\n    ordering_fields = ['name', ]\\n\\nrouter.register(Category)\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "djember-sample/templates/products-endpoints.hbs" } });
});
define('djember-sample/tests/mirage/mirage.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | mirage');

  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});
define('djember-sample/transforms/duration', ['exports', 'ember-cli-crudities/transforms/duration'], function (exports, _duration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _duration.default;
    }
  });
});
define('djember-sample/transforms/nullable', ['exports', 'ember-cli-crudities/transforms/nullable'], function (exports, _nullable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nullable.default;
    }
  });
});
define('djember-sample/transitions', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    this.transition(this.use('fade', { duration: 150 }), this.debug());
  };
});
define('djember-sample/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _crossFade) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _crossFade.default;
    }
  });
});
define('djember-sample/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _default) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
});
define('djember-sample/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _explode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _explode.default;
    }
  });
});
define('djember-sample/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _fade) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fade.default;
    }
  });
});
define('djember-sample/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _flexGrow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexGrow.default;
    }
  });
});
define('djember-sample/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _flyTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flyTo.default;
    }
  });
});
define('djember-sample/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _moveOver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moveOver.default;
    }
  });
});
define('djember-sample/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _scale) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scale.default;
    }
  });
});
define('djember-sample/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _scrollThen) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scrollThen.default;
    }
  });
});
define('djember-sample/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _toDown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toDown.default;
    }
  });
});
define('djember-sample/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _toLeft) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toLeft.default;
    }
  });
});
define('djember-sample/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _toRight) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toRight.default;
    }
  });
});
define('djember-sample/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _toUp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toUp.default;
    }
  });
});
define('djember-sample/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _wait) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _wait.default;
    }
  });
});
define('djember-sample/transitions/wormhole', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = wormhole;
  function wormhole({ use }) {
    let oldWormholeElement, newWormholeElement;

    if (this.oldElement) {
      oldWormholeElement = this.oldElement.find('.liquid-wormhole-element:last-child');

      this.oldElement = null;

      if (oldWormholeElement.length > 0) {
        const newChild = oldWormholeElement.clone();
        newChild.addClass('liquid-wormhole-temp-element');

        oldWormholeElement.css({ visibility: 'hidden' });

        const offset = oldWormholeElement.offset();

        newChild.css({
          position: 'absolute',
          top: offset.top,
          left: offset.left,
          bottom: '',
          right: '',
          margin: '0px',
          transform: ''
        });

        newChild.appendTo(oldWormholeElement.parent());
        this.oldElement = newChild;
      }
    }

    if (this.newElement) {
      newWormholeElement = this.newElement.find('.liquid-wormhole-element:last-child');

      this.newElement = null;

      if (newWormholeElement.length > 0) {
        const newChild = newWormholeElement.clone();

        newWormholeElement.css({ visibility: 'hidden' });

        const offset = newWormholeElement.offset();

        newChild.css({
          position: 'absolute',
          top: offset.top,
          left: offset.left,
          bottom: '',
          right: '',
          margin: '0px',
          transform: ''
        });

        newChild.appendTo(newWormholeElement.parent());
        this.newElement = newChild;
      }
    }

    var animation;
    if (typeof use.handler === 'function') {
      animation = use.handler;
    } else {
      animation = context.lookup(use.name);
    }

    return animation.apply(this, use.args).finally(() => {
      if (this.oldElement && oldWormholeElement) {
        this.oldElement.remove();
        oldWormholeElement.css({ visibility: 'visible' });
      }
      if (this.newElement && newWormholeElement) {
        this.newElement.remove();
        newWormholeElement.css({ visibility: 'visible' });
      }
    });
  };
});
define('djember-sample/utils/conditional-format', ['exports', 'ember-cli-crudities/utils/conditional-format'], function (exports, _conditionalFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _conditionalFormat.default;
    }
  });
});
define('djember-sample/utils/duration', ['exports', 'ember-cli-crudities/utils/duration'], function (exports, _duration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _duration.default;
    }
  });
});
define('djember-sample/utils/evaluator', ['exports', 'ember-cli-crudities/utils/evaluator'], function (exports, _evaluator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _evaluator.default;
    }
  });
});
define('djember-sample/utils/records-aggregates', ['exports', 'ember-cli-crudities/utils/records-aggregates'], function (exports, _recordsAggregates) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _recordsAggregates.default;
    }
  });
});
define('djember-sample/utils/titleize', ['exports', 'ember-cli-string-helpers/utils/titleize'], function (exports, _titleize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
});
define('djember-sample/utils/validation', ['exports', 'ember-cli-crudities/utils/validation'], function (exports, _validation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _validation.default;
    }
  });
});
define('djember-sample/views/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
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

if (!runningTests) {
  require("djember-sample/app")["default"].create({"API_NAMESPACE":"api/v1","API_HOST":"","LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"name":"djember-sample","version":"0.0.0+83943c8a","API_ADD_TRAILING_SLASHES":true});
}
//# sourceMappingURL=djember-sample.map
