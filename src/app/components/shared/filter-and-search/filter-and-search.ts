import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-and-search',
  imports: [FormsModule],
  templateUrl: './filter-and-search.html',
  styleUrl: './filter-and-search.css',
})
export class FilterAndSearch {
  search = output<string>();
  categoryChange = output<string>();
  selectedCategory = input<string>();
  categories = signal<string[]>(['Frontend', 'Backend', 'UI/UX', 'Mobile']);

  searchFunction(value: string) {
    this.search.emit(value);
  }

  changeCategory(value: string) {
    this.categoryChange.emit(value);
  }
}
