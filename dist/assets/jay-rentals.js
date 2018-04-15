"use strict";



define('jay-rentals/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    namespace: 'api'
  });
});
define('jay-rentals/app', ['exports', 'jay-rentals/resolver', 'ember-load-initializers', 'jay-rentals/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
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
define('jay-rentals/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
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
define('jay-rentals/helpers/app-version', ['exports', 'jay-rentals/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;


  const {
    APP: {
      version
    }
  } = _environment.default;

  function appVersion(_, hash = {}) {
    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('jay-rentals/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('jay-rentals/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('jay-rentals/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'jay-rentals/config/environment'], function (exports, _initializerFactory, _environment) {
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
define('jay-rentals/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
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
define('jay-rentals/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('jay-rentals/initializers/export-application-global', ['exports', 'jay-rentals/config/environment'], function (exports, _environment) {
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
define("jay-rentals/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('jay-rentals/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('jay-rentals/router', ['exports', 'jay-rentals/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('contact');
    this.route('rentals');
  });

  exports.default = Router;
});
define('jay-rentals/routes/about', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('jay-rentals/routes/contact', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('jay-rentals/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    beforeModel() {
      this.replaceWith('rentals');
    }
  });
});
define('jay-rentals/routes/rentals', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model() {
      return [{
        id: 'grand-old-mansion',
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        category: 'Estate',
        bedrooms: 15,
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
      }, {
        id: 'urban-living',
        title: 'Urban Living',
        owner: 'Mike TV',
        city: 'Seattle',
        category: 'Condo',
        bedrooms: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
        description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
      }, {
        id: 'downtown-charm',
        title: 'Downtown Charm',
        owner: 'Violet Beauregarde',
        city: 'Portland',
        category: 'Apartment',
        bedrooms: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
        description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
      }];
    }
  });
});
define('jay-rentals/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
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
define("jay-rentals/templates/about", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7BarC7bF", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"right tomster\"],[7],[8],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"About Super Rentals\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n    The Super Rentals website is a delightful project created to explore Ember.\\n    By building a property rental site, we can simultaneously imagine traveling\\n    AND building Ember applications.\\n  \"],[8],[0,\"\\n\"],[4,\"link-to\",[\"contact\"],[[\"class\"],[\"button\"]],{\"statements\":[[0,\"    Contack Us\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "jay-rentals/templates/about.hbs" } });
});
define("jay-rentals/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pUwH6WXk", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"      \"],[6,\"h1\"],[7],[0,\"\\n        \"],[6,\"em\"],[7],[0,\"SuperRentals\"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[6,\"div\"],[9,\"class\",\"links\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"about\"],[[\"class\"],[\"menu-about\"]],{\"statements\":[[0,\"        About\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"contact\"],[[\"class\"],[\"menu-contact\"]],{\"statements\":[[0,\"        Contact\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"body\"],[7],[0,\"\\n    \"],[1,[18,\"outlet\"],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "jay-rentals/templates/application.hbs" } });
});
define("jay-rentals/templates/contact", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bXmPsTGy", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"right tomster\"],[7],[8],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"Contact Us\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"Super Rentals Representatives would love to help you\"],[6,\"br\"],[7],[8],[0,\"choose a destination or answer\\n    any questions you may have.\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n    Super Rentals HQ\\n    \"],[6,\"address\"],[7],[0,\"\\n      1212 Test Address Avenue\"],[6,\"br\"],[7],[8],[0,\"\\n      Testington, OR 97233\\n    \"],[8],[0,\"\\n    \"],[6,\"a\"],[9,\"href\",\"tel:503.555.1212\"],[7],[0,\"+1 (503) 555-1212\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"a\"],[9,\"href\",\"mailto:superrentalsrep@emberjs.com\"],[7],[0,\"superrentalsrep@emberjs.com\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[4,\"link-to\",[\"about\"],[[\"class\"],[\"button\"]],{\"statements\":[[0,\"    About\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "jay-rentals/templates/contact.hbs" } });
});
define("jay-rentals/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "irKznM86", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "jay-rentals/templates/index.hbs" } });
});
define("jay-rentals/templates/rentals", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uheHSjUN", "block": "{\"symbols\":[\"rental\"],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"right tomster\"],[7],[8],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"Welcome!\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"We hope you find exactly what you're looking for in a place to stay.\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"about\"],[[\"class\"],[\"button\"]],{\"statements\":[[0,\"    About Us\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[6,\"article\"],[9,\"class\",\"listing\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[1,[19,1,[\"title\"]],false],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail owner\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Owner:\"],[8],[0,\" \"],[1,[19,1,[\"owner\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail type\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Type:\"],[8],[0,\" \"],[1,[19,1,[\"category\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail location\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Location:\"],[8],[0,\" \"],[1,[19,1,[\"city\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail bedrooms\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Number of bedrooms:\"],[8],[0,\" \"],[1,[19,1,[\"bedrooms\"]],false],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "jay-rentals/templates/rentals.hbs" } });
});


define('jay-rentals/config/environment', [], function() {
  var prefix = 'jay-rentals';
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
  require("jay-rentals/app")["default"].create({"name":"jay-rentals","version":"0.0.0+e47bf8d6"});
}
//# sourceMappingURL=jay-rentals.map
