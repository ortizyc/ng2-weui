System.register(['./hero.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var hero_model_1;
    return {
        setters:[
            function (hero_model_1_1) {
                hero_model_1 = hero_model_1_1;
            }],
        execute: function() {
            describe('Hero', function () {
                var hero = new hero_model_1.Hero('123', 'name');
                it('has name', function () {
                    expect(hero.name).toEqual('name');
                });
                it('has id', function () {
                    expect(hero.id).toEqual('123');
                });
            });
        }
    }
});
//# sourceMappingURL=hero.model.spec.js.map