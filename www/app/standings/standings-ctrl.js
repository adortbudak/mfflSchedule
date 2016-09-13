(function () {
    'use-strict';

    angular.module('mfApp').controller('StandingsCtrl',['mfApi',StandingsCtrl]);

    function StandingsCtrl(mfApi) {
        var vm = this;

        var data = mfApi.getLeagueData();

        vm.standings = data.standings;
    }

})()
