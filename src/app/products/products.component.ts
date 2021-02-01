import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'products',
    template: `
    <h2>Products</h2>
    <div class="card">
    <div class="card-header">
        Plan 1
    </div>
    <div class="card-body">
    <my-accordion>
        <p class="accordionHeader">Basic</p>
        <p class="accordionBody">Basic plan offers 10GB data for 5 days</p>
    </my-accordion>
        <button type="button" class="btn btn-secondary" (click)="redirectToRegister('Basic')">Buy</button>
    </div>
    </div>

    <div class="card">
    <div class="card-header">
        Plan 2
    </div>
    <div class="card-body">
    <my-accordion>
        <p class="accordionHeader">Lighting</p>
        <p class="accordionBody">Lighting plan offers 50GB data for 45 days</p>
    </my-accordion>
    <button type="button" class="btn btn-secondary" (click)="redirectToRegister('Lighting')">Buy</button>
    </div>
    </div>

    <div class="card">
    <div class="card-header">
        Plan 3
    </div>
    <div class="card-body">
    <my-accordion>
        <p class="accordionHeader">Incredible</p>
        <p class="accordionBody">Incedible plan offers Unlimited data for 90 days</p>
    </my-accordion>
    <button type="button" class="btn btn-secondary" (click)="redirectToRegister('Incredible')">Buy</button>
    </div>
    </div>
    `
})

export class ProductsComponent{
    constructor(private _router: Router) {}
    redirectToRegister(plan: any) {
        this._router.navigate(['/Register'], {queryParams: {
            planSelected: plan ? plan : null
        }})
    }
}