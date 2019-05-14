import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpnvComponent } from './tpnv.component';

describe('TpnvComponent', () => {
  let component: TpnvComponent;
  let fixture: ComponentFixture<TpnvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpnvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
