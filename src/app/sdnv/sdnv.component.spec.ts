import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdnvComponent } from './sdnv.component';

describe('SdnvComponent', () => {
  let component: SdnvComponent;
  let fixture: ComponentFixture<SdnvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdnvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
