import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Products } from './Components/products/products';
import { NotFoundComponent } from './Components/not-found-component/not-found-component';
import { ParentComponent } from './Components/parent-component/parent-component';
import { ProductDetails } from './Components/product-details/product-details';
import { authGuard } from './Guards/auth-guard';
import { SignupComponent } from './Components/signup/signup';
import { LoginComponent } from './Components/login/login';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },

    {path: 'home', component: Home, title: 'Home Page'},
    { path: 'login', component:LoginComponent, title: 'Login' },
    { path: 'admin/signup', component:SignupComponent, title: 'Signup' },

    { 
    path: 'products', 
    component: ParentComponent, 
    title: 'Products Page',
    canActivate: [authGuard] 
    },

    { 
    path: 'products/:id', 
    component: ProductDetails, 
    title: 'Product Details',
    canActivate: [authGuard]
    },

    {path: '**', component: NotFoundComponent, title: 'Page Not Found' }
];


