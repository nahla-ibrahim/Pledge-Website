import { ComponentFixture, TestBed } from '@angular/core/testing';

import { internships } from './internships';

describe('internships', () => {
  let component: internships;
  let fixture: ComponentFixture<internships>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [internships],
    }).compileComponents();

    fixture = TestBed.createComponent(internships);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
