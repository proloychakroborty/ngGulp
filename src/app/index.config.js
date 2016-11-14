(function() {
  'use strict';

  angular
    .module('psi')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    //$httpProvider.defaults.headers.common['Authorization'] = "Basic dXNlcjozNDY4YTljYS00OTg5LTRiN2EtYjk1NS02ZTc2ODNmYTJmZTU=";
  }

})();
