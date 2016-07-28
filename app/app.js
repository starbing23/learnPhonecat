var phoneCatApp=angular.module("phoneCatApp", []);
phoneCatApp.controller('PhoneListController', function phoneCatList($scope){
	$scope.phones=[
	{name:"motorola", snippet:"cool"},
	{name:"Dell", snippet:"good"},
	{name:"Iphone", snippet:"Excellent"}];
});