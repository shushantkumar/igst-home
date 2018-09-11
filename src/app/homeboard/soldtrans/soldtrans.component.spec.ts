import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldtransComponent } from './soldtrans.component';

describe('SoldtransComponent', () => {
  let component: SoldtransComponent;
  let fixture: ComponentFixture<SoldtransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldtransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldtransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
