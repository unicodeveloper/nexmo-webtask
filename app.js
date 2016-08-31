var app = angular.module('csa', []);

app.controller('MessageController', ['$scope','$http', function($scope, $http) {

    $scope.countryList = [
        { name: 'Nigeria (+234)', value: '234' },
        { name: 'United Kingdom (+44)', value: '44' },
        { name: 'United States (+1)', value: '1' }
    ];

    $scope.sendMessage = function() {
        $scope.successMessage = false;
        $scope.errorMessage = false;

        var phoneNo = $scope.countryCode + $scope.mobile;
        var message = $scope.message;

        if ( $scope.mobile.charAt(0) === '0') {
            var phoneNo = $scope.countryCode + $scope.mobile.slice(1);
        }

        $http({
            method: 'GET',
            url: 'https://webtask.it.auth0.com/api/run/wt-prosperotemuyiwa-gmail_com-0/sms?phoneno=' + phoneNo + '&message=' + message
        }).then( function(response) {
            $scope.successMessage = true;
            console.log( $scope.successMessage, response.data);
        }, function(err) {
            $scope.errorMessage = true;
            console.log( err, $scope.errorMessage);
        });

       console.log("Sending this message now", phoneNo);
    };

}]);
