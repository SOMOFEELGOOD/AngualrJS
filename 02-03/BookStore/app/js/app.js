//作为总入口（启动点）的模块
var bookStoreApp = angular.module('bookStoreApp', ['ngRoute', 'ngAnimate', 'bookStoreCtrls', 'bookStoreServices', 'bookStoreDirectives']);

//设置路由规则
bookStoreApp.config(function($routeProvider){
	$routeProvider.when('/hello', {
		templateUrl:'tpls/hello.html',
		controller:'HelloCtrl'
	}).when('/list', {
		templateUrl:'tpls/bookList.html',
		controller:'BookListCtrl'
	}).otherwise({
		redirectTo:'/hello'
	});
});