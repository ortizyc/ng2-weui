import { Component, Input, OnInit } from '@angular/core';

/**
 * size:
 *     lg:93px
 * type:
 *
 */

@Component({
    selector: 'app-weui-icon',
    template:`
        <i class ='type'></i>
    `,
})
export class WeuiIconComponent implements OnInit {

    private type:string;

    @Input('name')
    set _type(type:string){
        if(type === 'loading'){
            this.type = `weui-${type}`;
        }else{
            this.type = `weui-icon-${type}`;
        }
    };

    get _type():string{
        return this.type;
    }
    constructor() { }

    ngOnInit() {
    }

}
