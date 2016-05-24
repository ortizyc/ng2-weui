import { Hero } from './hero.model';

describe('Hero',()=>{
    let hero = new Hero('123','name');
    it('has name',()=>{
        expect(hero.name).toEqual('name');
    });
    it('has id',()=>{
        expect(hero.id).toEqual('123');
    })
})