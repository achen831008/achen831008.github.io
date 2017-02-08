angular.module('myApp.experience',['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
        .when('/experience', {
                templateUrl : 'views/experience.html',
                controller  : 'experienceController'
        });
	}])

	.controller('experienceController', ['$scope', function($scope) {
	    var vm = this;

	    var dbrs_description = [
	        'To Be Determined'
	    ];

	    var ashlin_description = [
	        'Individually designed, developed, and tested an EDI cloud application using C#, XML, JSON and T-SQL',
	        'Implemented and enhanced features of existing products using such as .NET, VBA and SQL',
	        'Increased the responsiveness of a core product\'s user interface, improving the overall user experience',
	        'Resolved electronic data interchanging issues of existing product',
	        'Contributed to migration project moving from MS Access to MS Azure'
	    ];

	    var bdo_description = [
	        'Excellent understanding of Agile software development and Software Development Life Cycle (SDLC)',
	        'Interacted with various stakeholders (Project Manager, Delivery Manager, Dev lead) and team members to ensure quality and on-time delivery of project',
	        'Developed test plans and test cases of complex nature from business requirement analysis',
	        'Captured software defects in the system by using end-to-end, integration, regression, and user acceptance testing approach',
	        'Used SQL skill to compare mock-up data with client\'s real data in Microsoft SQL Server'
	    ];

	    var vpec_description = [
	        'Designed, implemented and tested an Intranet with various features (HR News, Meeting Scheduler, Maintenance Order)',
	        'Built various web applications using HTML/CSS, PHP and JavaScript',
	        'Created and managed SQL relational database, views, and stored procedures',
	        'Developed a back-end system in Java to enhance IT department\'s maintenance performance',
	        'Investigated and resolved existing products issues'
	    ];

        $scope.experiences = [{
        	company: 'DBRS Limited',
        	companyShort: 'dbrs',
        	job_title: 'Software Engineering',
        	companyLink: 'http://www.dbrs.com',
        	location: 'Toronto, Ontario, Canada',
        	mapUrl: 'http://maps.google.com/?q=181 University Avenue, Toronto, Ontario, Canada',
        	logo: '/assets/img/DBRS_logo.svg',
        	time: 'May 2016 - Present',
        	description: dbrs_description
        }, {
            company: 'Ashlin-BPG Marketing Inc.',
            companyShort: 'ashlin',
            job_title: 'eCommerce Developer',
            companyLink: 'http://www.ashlinbpg.com',
            location: 'Mississauga, Ontario, Canada',
            mapUrl: 'http://maps.google.com/?q=2351 Royal Windsor Dr, Mississauga, ON L5J 4S7',
            logo: '/assets/img/ashlin.png',
            time: 'September 2015 - December 2015',
            description: ashlin_description
        }, {
            company: 'BDO Technology',
            companyShort: 'bdo',
            job_title: 'Solution Consultant',
            companyLink: 'http://www.bdo.ca',
            location: 'Mississauga, Ontario, Canada',
            mapUrl: 'http://maps.google.com/?q=6701 Financial Drive, Mississauga, Ontario, Canada L5N 7J7',
            logo: '/assets/img/BDO_logo.jpg',
            time: 'January 2015 - April 2015',
            description: bdo_description
        }, {
            company: 'Visual Photonic Expitaxy Co., Ltd',
            companyShort: 'vpec',
            job_title: 'Web Developer',
            companyLink: 'http://www.vpec.com.tw',
            location: 'Taoyuan County, Taiwan',
            mapUrl: 'http://maps.google.com/?q=No.16,Kung Yeh 1st Rd.,Ping-Jen Industrial Zone,Ping-Jen Dist.,Taoyuan City 324,Taiwan(R.O.C)',
            logo: '/assets/img/VPEC_logo.jpg',
            time: 'May 2014 - August 2014',
            description: vpec_description
        }];

    }]);
