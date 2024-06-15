import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"allproducts",
        component:AllproductComponent
    },
    {
        path:"product_details/:id",
        component:ProductDetailsComponent
    },
    {
        path:"**",
        component:HomeComponent
    },
];
