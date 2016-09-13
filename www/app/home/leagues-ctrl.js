(function () {
    'use-strict';

    angular.module('mfApp').controller('LeaguesCtrl',['$state','mfApi',LeaguesCtrl]);

    function LeaguesCtrl($state,mfApi) {
        var vm = this;

        var leagues = mfApi.getLeagues();

        vm.leagues = leagues;

        vm.selectLeague = function (leagueId) {
            //TODO: select correct league
            $state.go("app.teams");
        };

    }
})();
