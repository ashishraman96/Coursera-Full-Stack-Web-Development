'use strict';

angular.module('confusionApp')
          .constant("baseURL","http://localhost:3000/")
          .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            
                this.getDishes = function(){
                                        return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
                                    };
                this.getDish = function (index) {
                    
                   return $resource(baseURL+"dishes/"+index,null, {'getData': {method:'GET'}});
                };
    
                // implement a function named getPromotion
                // that returns a selected promotion.
    
            this.getPromotion = function(index) {
                    return $resource(baseURL+"promotions/:id",null,{'getData': {method:'GET'}});
                };
         
                         
        }])

        .factory('corporateFactory',['$resource', 'baseURL', function($resource,baseURL){
    
            var corpfac = {};
    
            corpfac.getLeaders= function()
            {
                return $resource(baseURL+"leadership/:id",null, {'getData': {method:'GET'}});
            };
            
            corpfac.getLeader=function(index){
                return $resource(baseURL+"leadership/"+index,null, {'getData': {method:'GET'}});
            };
            
            return corpfac;
        }])

        .factory('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {
            var feedFactory = {};

            feedFactory.getFeedback = function() {
            return $resource(baseURL + "feedback/:id", null,  {'save':{method:'POST' }});
            };

            return feedFactory;
}])

;
