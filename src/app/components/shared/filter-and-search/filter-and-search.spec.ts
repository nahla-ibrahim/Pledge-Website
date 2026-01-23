import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAndSearch } from './filter-and-search';

describe('FilterAndSearch', () => {
  let component: FilterAndSearch;
  let fixture: ComponentFixture<FilterAndSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterAndSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterAndSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
