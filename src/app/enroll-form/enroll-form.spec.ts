import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollForm } from './enroll-form';

describe('EnrollForm', () => {
  let component: EnrollForm;
  let fixture: ComponentFixture<EnrollForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
