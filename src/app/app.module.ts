import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainRoutes } from './routes/mainRoute.route';
import { AccordionComponent } from './utility/accordion.component';

import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent, AccordionComponent, ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
