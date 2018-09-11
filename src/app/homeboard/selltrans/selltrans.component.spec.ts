import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelltransComponent } from './selltrans.component';

describe('SelltransComponent', () => {
  let component: SelltransComponent;
  let fixture: ComponentFixture<SelltransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelltransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelltransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
