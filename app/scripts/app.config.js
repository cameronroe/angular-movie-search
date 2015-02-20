'use strict';

// ------------------------------------------------
// Imports
// ------------------------------------------------

/**
 * Services
 */
import Search from './services/search';

/**
 * Controllers
 */
import DetailsCtrl from './controllers/details';
import SearchCtrl from './controllers/search';

/**
 * Directives
 */
import SearchInput from './directives/search-input';

// ------------------------------------------------
// Module Registration
// ------------------------------------------------
var config = 'movieSearch.config';
var services = 'movieSearch.services';
var controllers = 'movieSearch.controllers';
var directives = 'movieSearch.directives';

/**
 * Config
 */
angular.module(config, [])
  .constant('config', {
    api: {
      url: 'http://api.rottentomatoes.com/api/public/v1.0/movies.json',
      key: 'vdm7ddbykynptbk84gtsq7s2'
    }
  });

/**
 * Services
 */
angular.module(services, [])
  .factory('Search', Search);

/**
 * Controllers
 */
angular.module(controllers, [])
  .controller('DetailsCtrl', DetailsCtrl)
  .controller('SearchCtrl', SearchCtrl);

/**
 * Directives
 */
angular.module(directives, [])
  .directive('searchInput', SearchInput);

export { services, controllers, directives, config };