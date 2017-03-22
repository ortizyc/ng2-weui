import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
    selector: 'weui-grids',
    template: `
      <div class="weui-grids">
          <ng-contant></ng-contant>
      </div>
  `
})
export class WeuiGridsComponent { }

@Component({
    selector: 'weui-grid',
    template: `
        <a href="javascriptvoid(0);" class="weui-grid">
            <div class="weui-grid__icon">
                <img alt="" [src]="src"/>
            </div>
            <p class="weui-grid__label">{{text}}</p>
        </a>
    `,
})
export class WeuiGridComponent  {

    @Input()
    src:string;

    @Input()
    text:string;

    constructor() {
    }
}
