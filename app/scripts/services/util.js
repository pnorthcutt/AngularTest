angular.module('service',[])
.factory('utilities',function(){
	function hello(){return "hello"}
	return {hello:hello}
});
