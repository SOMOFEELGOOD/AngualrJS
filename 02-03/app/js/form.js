var userInfoModule = angular.module('UserInfoModule', []);
userInfoModule.controller('UsreInfoCtrl', ['$scope', function($scope){
	$scope.userInfo =  {
		email:'2345678@qq.com',
		password:'111111',
		autoLogin:true
	}
	$scope.getFormData = function(){
		console.log(this.userInfo);
	}
	$scope.setFormData = function(){
		$scope.userInfo =  {
			email:'238@qq.com',
			assword:'1111',
			autoLogin:false
		}
	}
	$scope.resetForm = function(){
		$scope.userInfo =  {
			email:'2345678@qq.com',
			password:'111111',
			autoLogin:true
		}
	}
}]);