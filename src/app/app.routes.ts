import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Products } from './Components/products/products';
import { NotFoundComponent } from './Components/not-found-component/not-found-component';
import { ParentComponent } from './Components/parent-component/parent-component';
import { ProductDetails } from './Components/product-details/product-details';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },

    {path: 'home', component: Home, title: 'Home Page'},

    {path:'products', component: ParentComponent, title: 'Products Page'},

    {path: 'products/:id', component: ProductDetails, title: 'Details Page'},

    {path: '**', component: NotFoundComponent, title: 'Page Not Found' }
];


