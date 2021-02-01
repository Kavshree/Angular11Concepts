import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'orders',
    template: `
        <div class="card">
            <div class="card-header"></div>
            <div class="card-body">
            <ul class="list-group list-group-flush" *ngIf="ordersPlaced.userSelectedPlan">
                <li class="list-group-item"><b> Name : </b> {{ordersPlaced.userName}}</li>
                <li class="list-group-item"><b>Email: </b>{{ordersPlaced.userEmail}}</li>
                <li class="list-group-item"><b>Phone: </b>{{ordersPlaced.userPhone}}</li>
                <li class="list-group-item"><b>Plan Selected: </b> {{ordersPlaced.userSelectedPlan}}</li>
            </ul>

            <div class="text-center" *ngIf="!ordersPlaced.userSelectedPlan">
                <h1>You have not placed any order</h1>
                <h6>(Please register and place an order)</h6>
            </div>
            </div>
        </div>
    `
})

export class ordersComponent{
    constructor(private _ActivatedRoute: ActivatedRoute){}
    ordersPlaced = {
        userName: null,
        userEmail:"",
        userPhone: "",
        userSelectedPlan: ""
    };

    ordersLocalStorage: any;

    ngOnInit() {

        if(localStorage.getItem('ordersPlacedCopy')) {
            this.ordersLocalStorage = localStorage.getItem('ordersPlacedCopy');
            let ParsedObj = JSON.parse(this.ordersLocalStorage);
            //console.log(`From localStorage ${localStorage.getItem('ordersPlacedCopy')} `);
            console.log(ParsedObj)
            this.ordersPlaced.userSelectedPlan = (this.ordersLocalStorage != null && JSON.parse(this.ordersLocalStorage)) ? 
            ParsedObj.userSelectedPlan : "";

            this.ordersPlaced.userName = (this.ordersLocalStorage != null && JSON.parse(this.ordersLocalStorage)) ? 
            ParsedObj.userName : "";


            this.ordersPlaced.userEmail = (this.ordersLocalStorage != null && JSON.parse(this.ordersLocalStorage)) ? 
            ParsedObj.userEmail : "";


            this.ordersPlaced.userPhone = (this.ordersLocalStorage != null && JSON.parse(this.ordersLocalStorage)) ? 
            ParsedObj.userPhone : "";

        } else {
            this._ActivatedRoute.queryParams.subscribe(params => {
                this.ordersPlaced.userSelectedPlan = params['userSelectedPlan'];
                this.ordersPlaced.userName = params['userName'];
                this.ordersPlaced.userEmail = params['userEmail'];
                this.ordersPlaced.userPhone = params['userPhone'];
            })
        }
        
    }
    
   
}