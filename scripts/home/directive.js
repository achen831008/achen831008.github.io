angular
    .module('app')
    .directive('scrollPosition', function($window) {
        return {
            scope: {
                scroll: '=scrollPosition'
            },
            link: function(scope, element, attrs) {
                var windowEl = angular.element($window);
                var handler = function() {
                    scope.scroll = windowEl.scrollTop();
                }

                windowEl.on('scroll', scope.$apply.bind(scope, handler));
                handler();
            }
        };
    })
    .directive('scrollToItem', function() {
        return {
            restrict: 'A',
            scope: {
                scrollTo: "@"
            },
            link: function(scope, $elm,attr) {
                $elm.on('click', function() {
                    $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top }, "slow");
                });
            }
        }
    });
