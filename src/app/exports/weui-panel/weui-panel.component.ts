import { Component, OnInit, Directive, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'weui-panel',
    template: `
        <div class="weui-panel">
            <div>
                <ng-content select=""></ng-content>
            </div>

        </div>
  `
})
export class WeuiPanelComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}

@Directive({ selector: '[hd]' })
export class HeaderDirective {
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
}

@Directive({ selector: '[bd]' })
export class BodyDirective {
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
}

@Directive({ selector: '[ft]' })
export class FooterDirective {
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
}
