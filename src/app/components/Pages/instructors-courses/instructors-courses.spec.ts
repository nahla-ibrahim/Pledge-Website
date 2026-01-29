import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsCourses } from './instructors-courses';

describe('InstructorsCourses', () => {
  let component: InstructorsCourses;
  let fixture: ComponentFixture<InstructorsCourses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorsCourses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorsCourses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
