import { Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
export const routes: Routes = [
    {path:"",component: HomeComponent},
    {path:"product",component: ProductComponent},
    {path:"product/:id",component:SinglepageComponent},
    {path:"contact",component:ContactComponent},
    {path:"about",component:AboutComponent},
];
