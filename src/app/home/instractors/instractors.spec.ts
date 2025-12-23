import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instractors } from './instractors';

describe('Instractors', () => {
  let component: Instractors;
  let fixture: ComponentFixture<Instractors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Instractors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Instractors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
