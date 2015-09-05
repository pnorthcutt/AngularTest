'use strict';
describe('utilities',function(){
beforeEach(module('service'));
var utilities;
beforeEach(inject(function(_utilities_){
	utilities=_utilities_;
}));

	it('should not be null',function(){
		expect(utilities).not.toBe(null);
	});
});