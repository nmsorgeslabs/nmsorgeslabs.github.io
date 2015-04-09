angular.module('NMSioApp.controllers', []).
controller('nmsioController', function($scope) {
    $scope.projectsList = [
      {
    	  Project : {
    		  name:'Anxova',
    		  description:'The Anxova project'
    	  },
    	  openIssues:10
      },
      {
    	  Project : {
    		  name:'Maduixa',
    		  description:'The Maduixa project'
    	  },
    	  openIssues:6
      }
    ];
    
});
