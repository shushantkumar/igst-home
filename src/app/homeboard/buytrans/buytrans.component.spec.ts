import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuytransComponent } from './buytrans.component';

describe('BuytransComponent', () => {
  let component: BuytransComponent;
  let fixture: ComponentFixture<BuytransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuytransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuytransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
