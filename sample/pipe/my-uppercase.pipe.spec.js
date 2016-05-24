System.register(['./my-uppercase.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var my_uppercase_pipe_1;
    return {
        setters:[
            function (my_uppercase_pipe_1_1) {
                my_uppercase_pipe_1 = my_uppercase_pipe_1_1;
            }],
        execute: function() {
            describe('MyUppercasePipe', function () {
                var pipe;
                beforeEach(function () {
                    pipe = new my_uppercase_pipe_1.MyUppercasePipe();
                });
                it('transforms "abc" to "ABC"', function () {
                    expect(pipe.transform('abc')).toEqual('ABC');
                });
                it('transforms "abc def" to "ABC DEF"', function () {
                    expect(pipe.transform('abc def')).toEqual('ABC DEF');
                });
                it('leaves "ABC DEF" unchanged', function () {
                    expect(pipe.transform('ABC DEF')).toEqual('ABC DEF');
                });
            });
        }
    }
});
//# sourceMappingURL=my-uppercase.pipe.spec.js.map