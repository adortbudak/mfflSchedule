(function () {
    'use-strict';

    angular.module('mfApp').controller('LocationsCtrl',['mfApi',LocationsCtrl]);

    function LocationsCtrl(mfApi) {
        var vm = this;

        var data = mfApi.getLeagueData();

        vm.locations = data.locations;

        console.log(vm.locations);
    };

})();
