'use strict';
angular.module('service',[])
.factory('utilities',function(){
	function hello(){return "hello";}
	function getFirst(name){
		return name.first;
	}
	
	return {hello:hello,getFirst:getFirst};
});
