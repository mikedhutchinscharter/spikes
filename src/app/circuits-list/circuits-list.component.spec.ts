import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitsListComponent } from './circuits-list.component';

describe('CircuitsListComponent', () => {
  let component: CircuitsListComponent;
  let fixture: ComponentFixture<CircuitsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
