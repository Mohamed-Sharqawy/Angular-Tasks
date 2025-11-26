import { Component } from '@angular/core';
import { Products } from '../products/products';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-component',
  imports: [Products,FormsModule],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent {
  FilterByNameInParent:string="";
}
