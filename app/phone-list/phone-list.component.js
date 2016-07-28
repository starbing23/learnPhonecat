'use strict';

// Register `phoneList` component, along with its associated controller and template

angular.module('phoneList').
	component('phoneList',{
		templateUrl:"phone-list/phone-list.template.html",
		controller: function PhoneListController(){
				this.phones=[
				{name:"motorola", snippet:"cool",age:1,},
				{name:"Dell", snippet:"good", age:2,},
				{name:"Iphone", snippet:"Excellent", age:3,}];
				this.order="age";
		},
});