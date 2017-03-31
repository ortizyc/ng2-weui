import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weui-aticle',
  template: `
      <article class="weui-article">
          <ng-content selector="[title]"></ng-content>
          <ng-content></ng-content>
      </article>
  `
})
export class WeuiArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@Component({
    selector: 'weui-section',
    template: `
        <section>
            <ng-content selector="[title]"></ng-content>
            <ng-content></ng-content>
        </section>
    `,
})
export class WeuiSectionComponent  {
}
