import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompupdateComponent } from './compupdate.component';

describe('CompupdateComponent', () => {
  let component: CompupdateComponent;
  let fixture: ComponentFixture<CompupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
