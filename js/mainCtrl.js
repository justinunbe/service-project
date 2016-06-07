angular.module("quoteBook").controller("mainCtrl", function($scope, dataService){
$scope.chicken = dataService.getData();
$scope.deleteMe = function(testToDelete){
  dataService.removeData(textToDelete);
}
});
