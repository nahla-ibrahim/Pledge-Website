import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allinternship } from './all-internship';

describe('Allinternship', () => {
  let component: Allinternship;
  let fixture: ComponentFixture<Allinternship>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Allinternship],
    }).compileComponents();

    fixture = TestBed.createComponent(Allinternship);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
