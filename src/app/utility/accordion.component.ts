import { Component } from '@angular/core';

@Component({
    selector: 'my-accordion',
    template: `
    <div class="AccHeader" (click)="isBodyVisible = !isBodyVisible">
        <ng-content select=".accordionHeader"></ng-content>
    </div>
    <div class="AccBody" *ngIf="isBodyVisible">
        <ng-content select=".accordionBody"></ng-content>
           
    </div>
   
    `,
    styles: [`
    .AccHeader{ border: 1px solid grey;cursor:pointer;background-color:#e3e3e3;padding:10px}
    .AccBody{ padding:10px;border: 1px solid grey;}
    `
    ]
        
})

export class AccordionComponent{
    isBodyVisible = true;
}