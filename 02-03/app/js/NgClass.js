var myClassModule = angular.module('MyClassModule',[]);
myClassModule.controller('HeaderController', ['$scope', function($scope){
		$scope.isError = false;
		$scope.isWarning = false;
		$scope.messageText = '';
		$scope.showError = function(){
			$scope.messageText = 'This is an error!';
			$scope.isError =  true;
			$scope.isWarning = false;
			console.log('error');
		}
		$scope.showWarning = function(){
			$scope.messageText = 'Just a warning,carry on.';
			$scope.isError = false;
			$scope.isWarning = true;
		}
	}
]);