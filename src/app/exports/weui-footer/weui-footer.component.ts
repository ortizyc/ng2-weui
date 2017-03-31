import { Component, OnInit, Host, Input } from '@angular/core';

@Component({
    selector: 'weui-footer',
    template: `
        <div class="weui-footer">
            <ng-content selector="links"></ng-content>
            <p class="weui-footer__text">
                <ng-content></ng-content>
            </p>
        </div>
    `
})
export class WeuiFooterComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}


@Component({
    selector: 'links',
    template: `<p class="weui-footer__links">
        <ng-content></ng-content>
    </p>`,
})
export class FooterLinksComponent{}


@Component({
    selector: 'link-item',
    template: `<a [href]="href">{{text}}</a>`,
    host:{
        'class':"weui-footer__link"
    }
})
export class FooterLinkItemComponent  {
    @Input()
    text:string;
    @Input()
    href:string = "javascript:void(0);";
}
