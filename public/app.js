angular.module('SimpleConvert', [])
    .controller('ConvertCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.rates = {};
        $http.get('http://api.fixer.io/latest')
            .then(function(res) {
                $scope.fromType;
                $scope.toType;
                $scope.fromValue = 1;
                $scope.rates = res.data.rates;
                $scope.Converter();
            });
        $scope.Converter = function() {
            $scope.toValue = $scope.fromValue * ($scope.toType * (1 / $scope.fromType));
            $scope.toValue = $scope.toValue;
        };
    }]);