'use strict';

// Register `phoneDetail` component, along with its associated controller and template

angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['Phone', '$routeParams',
      function PhoneDetailController(Phone, $routeParams) {
        var self = this;
		self.phone=Phone.get({phoneId:$routeParams.phoneId},function(phone){
			self.setImg(phone.images[0]);
		});
		self.setImg=function(img){
			self.mainImageUrl=img;
		};		
      }
    ]
  });