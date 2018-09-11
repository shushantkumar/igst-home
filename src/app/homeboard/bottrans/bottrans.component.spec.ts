import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottransComponent } from './bottrans.component';

describe('BottransComponent', () => {
  let component: BottransComponent;
  let fixture: ComponentFixture<BottransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
