import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'weui-flex',
    template: `
        <div class="weui-flex">
            <ng-content selector="[left]"></ng-content>
            <ng-content></ng-content>
            <ng-content selector="[right]"></ng-content>
        </div>
    `,
})
export class WeuiFlexComponent { }


@Component({
    selector: 'flex-item',
    template: `
        <div class="weui-flex__item">
            <ng-content></ng-content>
        </div>
    `,
})
export class WeuiFlexItemComponent { }
