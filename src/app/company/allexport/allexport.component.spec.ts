import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllexportComponent } from './allexport.component';

describe('AllexportComponent', () => {
  let component: AllexportComponent;
  let fixture: ComponentFixture<AllexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
