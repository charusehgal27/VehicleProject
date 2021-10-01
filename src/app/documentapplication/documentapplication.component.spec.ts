import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentapplicationComponent } from './documentapplication.component';

describe('DocumentapplicationComponent', () => {
  let component: DocumentapplicationComponent;
  let fixture: ComponentFixture<DocumentapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
