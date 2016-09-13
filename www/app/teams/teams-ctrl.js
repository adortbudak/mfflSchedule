(function () {
    'use-strict';

    angular.module('mfApp').controller('TeamsCtrl',['mfApi',TeamsCtrl]);

    function TeamsCtrl(mfApi) {
        var vm = this;

        var data = mfApi.getLeagueData();

        vm.teams = data.teams;
        vm.divisions = data.divisions;

        console.log(vm.teams);

    }
})();
