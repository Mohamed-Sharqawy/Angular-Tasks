import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Products } from './Components/products/products';
import { NotFoundComponent } from './Components/not-found-component/not-found-component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },

    {path: 'home', component: Home, title: 'Home Page'},

    {path:'products', component: Products, title: 'Products Page'},

    {path: '**', component: NotFoundComponent, title: 'Page Not Found' }
];
