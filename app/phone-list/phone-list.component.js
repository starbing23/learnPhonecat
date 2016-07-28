'use strict';

// Register `phoneList` component, along with its associated controller and template

angular.module('phoneList').
	component('phoneList',{
		templateUrl:"phone-list/phone-list.template.html",
		controller: function PhoneListController(){
				this.phones=[
				{name:"motorola", snippet:"cool"},
				{name:"Dell", snippet:"good"},
				{name:"Iphone", snippet:"Excellent"}];
		},
});