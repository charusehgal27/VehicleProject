import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandetailapplicationnComponent } from './loandetailapplicationn.component';

describe('LoandetailapplicationnComponent', () => {
  let component: LoandetailapplicationnComponent;
  let fixture: ComponentFixture<LoandetailapplicationnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoandetailapplicationnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoandetailapplicationnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
