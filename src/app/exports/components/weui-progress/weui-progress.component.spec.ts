import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiPrograssComponent } from './weui-prograss.component';

describe('WeuiPrograssComponent', () => {
  let component: WeuiPrograssComponent;
  let fixture: ComponentFixture<WeuiPrograssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiPrograssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiPrograssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
