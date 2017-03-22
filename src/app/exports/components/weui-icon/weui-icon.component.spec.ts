import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiIconComponent } from './weui-icon.component';

describe('WeuiIconComponent', () => {
  let component: WeuiIconComponent;
  let fixture: ComponentFixture<WeuiIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
