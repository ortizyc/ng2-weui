import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeuiFormsComponent } from './weui-forms.component';

describe('WeuiFormsComponent', () => {
  let component: WeuiFormsComponent;
  let fixture: ComponentFixture<WeuiFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeuiFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeuiFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
