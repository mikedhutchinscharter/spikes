import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffDetailComponent } from './stuff-detail.component';

describe('StuffDetailComponent', () => {
  let component: StuffDetailComponent;
  let fixture: ComponentFixture<StuffDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
