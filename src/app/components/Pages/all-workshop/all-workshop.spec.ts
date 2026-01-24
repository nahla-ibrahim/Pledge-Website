import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWorkshop } from './all-workshop';

describe('AllWorkshop', () => {
  let component: AllWorkshop;
  let fixture: ComponentFixture<AllWorkshop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllWorkshop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllWorkshop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
