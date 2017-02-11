angular.module('myApp.about',['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
        .when('/about', {
                templateUrl : 'views/about.html',
                controller  : 'aboutController'
        });
	}])

	.controller('aboutController', ['$scope', function($scope) {
        var vm = this;

        var categories = [{
            icon: 'fa-university',
            description: 'Third year into Computing and Financial Management at University of Waterloo. Started working at DBRS limited as a software engineering for my fourth co-op internship.'
        }, {
            icon: 'fa-laptop',
            description: 'UI/UX design using HTML, CSS, JavaScript, jQuery. Experienced with C, C++, C#, JAVA, SQL, JSON, XML, ASP, and Shell Scripting.'
        }, {
            icon: 'fa-music',
            description: 'Passionate in playing violin and piano from a young age. Love to compete in music festival and share music around the world.'
        }, {
            icon: 'fa-dribbble',
            description: 'Passionate in playing sports such as Basketball, Tennis, Rugby, Ping Pong, and Volleyball.'
        }];

        $scope.templateTitle = 'About';
        $scope.categories = categories;
    }]);
