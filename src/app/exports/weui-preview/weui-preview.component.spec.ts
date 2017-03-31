import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiPreviewComponent } from './weui-preview.component';

describe('WeuiPreviewComponent', () => {
  let component: WeuiPreviewComponent;
  let fixture: ComponentFixture<WeuiPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
