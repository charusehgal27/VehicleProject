import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleapplicationnComponent } from './vehicleapplicationn.component';

describe('VehicleapplicationnComponent', () => {
  let component: VehicleapplicationnComponent;
  let fixture: ComponentFixture<VehicleapplicationnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleapplicationnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleapplicationnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
