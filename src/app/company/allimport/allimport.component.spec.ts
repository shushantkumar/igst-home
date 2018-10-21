import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllimportComponent } from './allimport.component';

describe('AllimportComponent', () => {
  let component: AllimportComponent;
  let fixture: ComponentFixture<AllimportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllimportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllimportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
