import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
})
export class ProductFilterComponent implements OnInit {
  categories$;
  @Input('category') category;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit(): void {}
}
