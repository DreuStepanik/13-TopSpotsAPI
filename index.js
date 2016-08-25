//Initiate the angular module
angular.module('app' , []);
angular.module('app').controller('HomeController', function($scope, $http) { 
// Simple GET request
		$http.get('http://localhost:50015/api/TopSpotsAPI').then(function (response) {
    // this callback will be called asynchronously
    // when the response is available
    	$scope.posts = response.data;
  	
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

});