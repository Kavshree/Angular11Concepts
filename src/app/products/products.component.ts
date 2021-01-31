import { Component } from '@angular/core';

@Component({
    selector: 'products',
    template: `
    <h2>Products</h2>
    <my-accordion>
        <p class="accordionHeader">Basic</p>
        <p class="accordionBody">Basic plan offers 10GB data for 5 days</p>
    </my-accordion>
    <my-accordion>
        <p class="accordionHeader">Lighting</p>
        <p class="accordionBody">Lighting plan offers 50GB data for 45 days</p>
    </my-accordion>
    <my-accordion>
        <p class="accordionHeader">Incredible</p>
        <p class="accordionBody">Incedible plan offers Unlimited data for 90 days</p>
    </my-accordion>
    `
})

export class ProductsComponent{
    
}