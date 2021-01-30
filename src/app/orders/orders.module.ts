import { NgModule } from'@angular/core';
import { CommonModule } from '@angular/common';

import { ordersComponent } from './orders.component';
import { OrdersChildRoutes } from '../routes/ordersModule.route'
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[ordersComponent],
    imports: [RouterModule.forChild(OrdersChildRoutes)]
})

export class ordersModule {}