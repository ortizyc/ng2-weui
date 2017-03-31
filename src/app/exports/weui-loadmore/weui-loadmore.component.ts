import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'weui-loadmore',
    template: `
      <div class="weui-loadmore" [ngClass]="{'weui-loadmore_line':!loading,'weui-loadmore_dot':!text}">
          <i class="weui-loading" *ngIf="loading"></i>
          <span class="weui-loadmore__tips">{{text}}</span>
      </div>
    `
})
export class WeuiLoadmoreComponent {

    @Input()
    loading: boolean = false;

    @Input()
    text: string = '';

}
