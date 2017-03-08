import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weui-badge',
  template: `
      <span class="weui-badge">
          <ng-content></ng-content>
      </span>
  `,
})
export class WeuiBadgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
