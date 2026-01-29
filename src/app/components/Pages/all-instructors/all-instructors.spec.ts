import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInstructors } from './all-instructors';

describe('AllInstructors', () => {
  let component: AllInstructors;
  let fixture: ComponentFixture<AllInstructors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllInstructors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllInstructors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
