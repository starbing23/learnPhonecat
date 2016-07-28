'use strict';

// Register `phoneDetail` component, along with its associated controller and template

angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$routeParams',
      function PhoneDetailController($http, $routeParams) {
        var self = this;
		self.setImg=function(img){
			self.mainImageUrl=img;
		};
        $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
          self.phone = response.data;
		  self.setImg(self.phone.images[0]);
        });
		
      }
    ]
  });