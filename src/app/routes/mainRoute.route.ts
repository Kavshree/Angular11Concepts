import { ProductsComponent } from '../products/products.component';
import { errorNotFoundPage } from '../utility/error404Page.component'

export const MainRoutes = [
    {path: 'Products', component: ProductsComponent},
    {path: 'Register', loadChildren: () => import('../register/register.module').then(m => m.registerModule)},
    {path: 'Orders', loadChildren: () => import('../orders/orders.module').then(m => m.ordersModule)},
    {path:'', redirectTo: 'Products', pathMatch: 'full'},
    {path:'**', component: errorNotFoundPage}
]