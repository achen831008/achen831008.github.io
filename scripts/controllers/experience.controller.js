angular.module('myApp.experience',['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
        .when('/experience', {
                templateUrl : 'views/experience.html',
                controller  : 'experienceController'
        });
	}])

	.controller('experienceController', ['$scope', '$window', function($scope, $window) {
	    var vm = this;
        $scope.show = false;

        $scope.style = $window.innerWidth > 600;

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

        var vpec_intranet = {
            name: 'VPEC Intranet',
            techstack: 'VPEC Intranet is built using HTML, CSS, JavaScript, ASP, and SQL.',
            tools: 'IIS, Oracle Database, SQL Server, Notepad++',
            summary: 'VPEC Intranet is designed to improve organizational communication, internal service and management. There are various features implemented such as HR News Feed, IT News Feed, IT Service Request, Meeting Booking Request, and Frequently Asked Questions.'
        };

        var bdo_mms = {
            name: 'DFO Milke Management System',
            techstack: 'MMS is designed using Microsoft ASP.NET MVC framework in C#. Also, JavaScript, jQuery, and SQL Store Procedures are used to enhence various features for the application.',
            tools: 'MS Visual Studio, TFS, MS SQL Server, and MS Test Manager.',
            summary: 'This application is built not only to replace the existing DFO Milk Management System but also for the 9 Provinces across Canada. There is different features based on users type (Producers/Transporter/Processor) such as Quota Exchange, Milk Inspection, etc.'
        };

        var credentialManager = {
            name: 'Credential Manager',
            techstack: 'Credential Manager is a Cloud Web Form Application in Visual C#, and it is integrated with MS Azure.',
            tools: 'MS Visual Studio, MS Azure, and MS SQL Server',
            summary: 'This application is designed for storing various business credentials. User is able to see his or her own credentials stored under company; moreover, certain permission is assigned to each user based on his or her authority. Also, a DashBoard was designed for Administrators to have an overview of system and to control all users.'
        };

        var orderManager = {
            name: 'Order Manager',
            techstack: 'Order Manager is a Cloud Web Application in C#. It is integrated with various eCommerce APIs and Transportation APIs. The Electronic Data Interexchange process is designed by sending HTTP Get/Post Request and stored necessary data in MS Azure using T-SQL. Moreover, this application also accesses files on SFTP Server to check for XML feeds, and process it.',
            tools: 'Linux, MS Visual Studio, MS Azure, and MS SQL Server.',
            summary: 'This application is designed for processing order placement within one platform from various eCommerce sites and send notifications to transporters for shipments. There is various features designed such as analyzing profitability and top selling items, generating financial report, order dashboard.'
        };

        var skuManager = {
            name: 'SKU Manager',
            techstack: 'SKU Manager is a Cloud MS Access Form. VBA and SQL are mainly used for storing, updating, and deleting data to the cloud.',
            tools: 'MS Access, MS Azure, and MS SQL Server.',
            summary: 'SKU Manager is designed for managing data such as products specification, designs, color code, inventory, and barcode.'
        };

        var monopoly = {
            name: 'UW Monopoly',
            techstack: 'UW Monopoly is built using C++ Object Oriented Programming and Singliton Pattern Design',
            tools: 'Sublime, GitLab, Mac Terminal (Bash), and SSH',
            summary: 'This game follows the standard monopoly game rules; however, there is various features designed based on UW campus such as Timmy line up, and Goose Nesting.'
        };

        var chess = {
            name: 'Chess',
            techstack: 'Chess is implemented using C++ MVC pattern. Also, Xwindows lib was used to help visualizing the game movement.',
            tools: 'Sublime, GitLab, and Mac Terminal (Bash).',
            summary: ''
        };

        var ymachenSite = {
            name: 'ymachen.me',
            techstack: 'ymachen.me is a SPA with MVC pattern using HTML5, CSS3, jQuery, Angular, and Boostrap.',
            tools: 'Github, Linux, and Sublime',
            summary: ''
        };

        var finalytics = {
            name: 'Finalytics',
            techstack: 'Python, git, HTML5, CSS3, Bootstrap, jQuery, JavaScript, AJAX.',
            tools: 'Github, Linux, and Sublime',
            summary: ''
        };

        var wlp4Complier = {
            name: 'WLP4 Compiler',
            techstack: 'C++, MIPS',
            tools: 'Github, Linux, and Sublime',
            summary: 'Context-free language, building automata, etc.'
        };

        $scope.templateTitle = 'Experience';

        $scope.jobs = [{
        	company: 'DBRS Limited, Global Technology',
        	companyShort: 'dbrs',
        	job_title: 'Software Engineering',
        	companyLink: 'http://www.dbrs.com',
        	location: 'Toronto, Ontario, Canada',
        	mapUrl: 'http://maps.google.com/?q=181 University Avenue, Toronto, Ontario, Canada',
        	logo: '/assets/img/DBRS_logo.svg',
        	start: 'May 2016',
            end: 'May 2017',
        	description: dbrs_description,
            projects: []
        }, {
            company: 'Ashlin-BPG Marketing Inc.',
            companyShort: 'ashlin',
            job_title: 'eCommerce Developer',
            companyLink: 'http://www.ashlinbpg.com',
            location: 'Mississauga, Ontario, Canada',
            mapUrl: 'http://maps.google.com/?q=2351 Royal Windsor Dr, Mississauga, ON L5J 4S7',
            logo: '/assets/img/ashlin.png',
            start: 'September 2015',
            end: 'December 2015',
            description: ashlin_description,
            projects: [credentialManager, orderManager, skuManager]
        }, {
            company: 'BDO IT Solutions',
            companyShort: 'bdo',
            job_title: 'Solution Consultant',
            companyLink: 'http://www.bdo.ca',
            location: 'Mississauga, Ontario, Canada',
            mapUrl: 'http://maps.google.com/?q=6701 Financial Drive, Mississauga, Ontario, Canada L5N 7J7',
            logo: '/assets/img/BDO_logo.jpg',
            start: 'January 2015',
            end: 'April 2015',
            description: bdo_description,
            projects: [bdo_mms]
        }, {
            company: 'Visual Photonic Expitaxy Co., Ltd',
            companyShort: 'vpec',
            job_title: 'Web Developer',
            companyLink: 'http://www.vpec.com.tw',
            location: 'Taoyuan County, Taiwan',
            mapUrl: 'https://goo.gl/maps/2vETiRpCMwR2',
            logo: '/assets/img/VPEC_logo.jpg',
            start: 'May 2014',
            end: 'August 2014',
            description: vpec_description,
            projects: [vpec_intranet]
        }];

        $scope.others = [{
            organization: 'University of Waterloo',
            shortname: 'uw',
            role: 'Student',
            link: 'https://uwaterloo.ca/',
            location: 'Waterloo, Ontario, Canada',
            mapUrl: 'https://goo.gl/maps/8EM29cMNErP2',
            logo: '/assets/img/uw.jpg',
            start: 'September 2013',
            end: 'May 2018',
            description: 'As a student in Computing and Financial Management co-op honour program, I take various courses...',
            projects: [monopoly,chess,wlp4Complier]
        }, {
            organization: 'Hack the North 2016',
            shortname: 'htn',
            role: 'Hacker',
            link: 'https://hackthenorth.com/',
            location: 'Waterloo, Ontario, Canada',
            mapUrl: 'https://goo.gl/maps/8EM29cMNErP2',
            logo: '/assets/img/hackthenorth.png',
            start: 'September 2016',
            end: 'September 2016',
            description: 'I participate in 2016 hack the north, ...',
            projects: []
        }, {
            organization: 'PENNAPPS XIV',
            shortname: 'penn',
            role: 'Hacker',
            link: 'https://pennapps.com',
            location: 'Philadelphia, PA',
            mapUrl: 'https://goo.gl/maps/8EM29cMNErP2',
            logo: '/assets/img/pennapps.png',
            start: 'September 2016',
            end: 'September 2016',
            description: 'I participate in PENNAPPS XV, ...',
            projects: [finalytics]
        }, {
            organization: 'UW Taiwan Student Association',
            shortname: 'twsa',
            role: 'Event Planning Vice President',
            link: 'https://www.facebook.com/TWSA.UW',
            location: 'Waterloo, Ontario, Canada',
            mapUrl: 'https://goo.gl/maps/8EM29cMNErP2',
            logo: '/assets/img/twsa.jpg',
            start: 'September 2013',
            end: 'August 2015',
            description: 'As an executive in TWSA, I participate in ...',
            projects: []
        }];

        $scope.showDetail = function(job) {
            $scope.show = true;
            $scope.job = job;
        };

        $scope.hideDetail = function() {
            $scope.show = false;
        };

    }]);
