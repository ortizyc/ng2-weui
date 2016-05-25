import { Component, OnInit, Input, Renderer, ElementRef } from '@angular/core';
// navbarConfig: Object = {
//     default: 0,
//     tabs: [{
//         name:'选项一'
//     },{
//         name:'选项二'
//     },{
//         name:'选项三'
//     }]
// }

import { NavBarConfig } from './navbarconfig';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class WeuiNavbarComponent implements OnInit {
    @Input()
    navbarConfig:NavBarConfig;
    
    weuiNavbarItem:Element;
    constructor(private renderer:Renderer,private elementRef:ElementRef) {
        this.weuiNavbarItem = this.elementRef.nativeElement.querySelectorAll('.weui_navbar_item');
    }

    ngOnInit() {
        if(!this.navbarConfig.default){
            this.navbarConfig.default = 0;
        }
    }
    doClick(index:string){
        
    }
    
    private setDefaultBar(index:number){
        this.setCssClass(this.elementRef.nativeElement.querySelector('.weui_bar_item_on'),'.weui_bar_item_on',false);
        this.setCssClass(this.weuiNavbarItem[index],'.weui_bar_item_on',true);
    }
    
    private setCssClass(element:Element,className:string,isAdd:boolean){
        if(!!element && !!className){
            this.renderer.setElementClass(element,className,isAdd);
        }
    }
    
}