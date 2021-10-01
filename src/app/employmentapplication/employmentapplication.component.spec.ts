import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentapplicationComponent } from './employmentapplication.component';

describe('EmploymentapplicationComponent', () => {
  let component: EmploymentapplicationComponent;
  let fixture: ComponentFixture<EmploymentapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
