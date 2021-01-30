import { Component } from '@angular/core';

@Component({
    selector: 'my-accordion',
    template: `
    <div class="AccHeader" (click)="isBodyVisible = !isBodyVisible">
        <ng-content select=".accordionHeader"></ng-content>
    </div>
    <div class="AccBody" *ngIf="isBodyVisible">
        <ng-content select=".accordionBody"></ng-content>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">Learn More</button>
                <button type="button" class="btn btn-secondary">Buy</button>
            </div>
    </div>
   
    `,
    styles: [`
    .AccHeader{ border: 1px solid grey;cursor:pointer;background-color:#e3e3e3;padding:10px}
    .AccBody{ padding:10px;border: 1px solid grey;}
    `
    ]
        
})

export class AccordionComponent{
    isBodyVisible = false;
}