import { Component, OnInit, Input, Output, Renderer, ElementRef, EventEmitter } from '@angular/core';

import { PanelConfig } from './panelconfig';

@Component({
    moduleId: module.id,
    selector: 'panel,[panel]',
    templateUrl: 'panel.component.html'
})
export class WeuiPanelComponent implements OnInit{
    
    @Input() panelConfig:PanelConfig;
    @Output() forword:EventEmitter<any> = new EventEmitter(); 
    
    nativeElement:Element;
    constructor(private renderer:Renderer,private elementRef:ElementRef) {
        this.nativeElement = this.elementRef.nativeElement;
    }
    
    ngOnInit(){
        this.updateView();
    }
    private doClick(value:string){
        console.log(value)
        this.forword.emit(value);
    }
    private updateView(){
        if(!this.panelConfig.title){
            this.showHead(false);
        }
        if(!this.panelConfig.foot){
            this.showFoot(false);
        }
    }
    private showHead(bool:boolean){
        this.showSeg(this.nativeElement.querySelector('.weui_panel_hd'),bool);
    }
    private showFoot(bool:boolean){
        this.showSeg(this.nativeElement.querySelector('.weui_panel_ft'),bool);
    }
    private showSeg(element:Element,bool:boolean){
        this.renderer.setElementStyle(element,'display',bool?'block':'none');
    }
}