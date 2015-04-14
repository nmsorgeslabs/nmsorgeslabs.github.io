// Config TODO move to a common json config file
var user = "nmsorgeslabs"

angular.module('NMSioApp.controllers', []).
controller('nmsioController', function($scope,$http, $log) {
	
	// Hardcoded project list for testing
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
    
    // Get github repos
    $http.get("https://api.github.com/users/nmsorgeslabs/repos")
    .success(function(response) {$scope.githubRepos = response;});
    
}).controller('nmsioRepoController',function($scope,$http,$log,$routeParams){
	$scope.repoName = $routeParams.projectName;
	
});


