import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import {Router, ActivatedRoute } from '@angular/router'

@Component({
    selector: 'register',
    template: `
        <div *ngIf="myFormGroup">
            <h1>Register: </h1>
            <h4 class="badge badge-info">
                Form is {{myFormGroup.status}}
            </h4>
            <form [formGroup]="myFormGroup">
            <div class="form-group">
                <label>Name </label>
                <input class="form-control" type="text" formControlName="userName" />
            </div>

            <div class="form-group">
                <label>Email </label>
                <input class="form-control" type="text" formControlName="userEmail" />
                <span class="badge badge-danger" 
                    *ngIf="userEmail && userEmail.invalid && (userEmail.dirty && 
                    userEmail.errors && 
                    userEmail.errors.emailValidationError.length > 1)">
                    {{userEmail.errors.emailValidationError}}
                </span>
            </div>

            <div class="form-group">
                <label>Phone Number </label>
                <input class="form-control" type="text" formControlName="userPhone" />
                <span class="badge badge-danger" *ngIf="userPhone && userPhone.dirty && userPhone.errors && userPhone.errors.pattern">only numbers allowed</span>
                <span class="badge badge-danger" *ngIf="userPhone && userPhone.dirty && userPhone.errors && userPhone.errors.minlength">minimum 9 digits</span>
            </div>

            <div class="form-group">
                <label>Plan </label>
                <select class="form-control" formControlName="userSelectedPlan">
                    <option *ngFor="let p of productPlans">{{p}}</option>
                </select>
            </div>

            <div class="form-group">
                <button class="form-control btn btn-primary" (click)="submitForm()"> Submit </button>
            </div>

            </form>

            <div *ngIf="isSubmitted && isFormValid">
                <h4> You submitted: </h4>
                Name: {{myFormGroup.get('userName')?.value }} <br/>
                Email: {{myFormGroup.get('userEmail')?.value }} <br/>
                Phone: {{myFormGroup.get('userPhone')?.value }} <br/>
                Plan: {{myFormGroup.get('userSelectedPlan')?.value }} <br/>
                <button class="form-control btn btn-primary" (click)="redirectToOrders()">confirm and place order</button>
            </div>
        </div>
    `
})

export class registerComponent{
    isFormValid = false; isSubmitted=false;planSelected="";
    myFormGroup: any;
    productPlans = ['Basic', 'Lighting', 'Incredible'];
    constructor(private fb: FormBuilder, private _ActivatedRoute:ActivatedRoute, private _router: Router) {}
    ngOnInit() {
        this.myFormGroup = this.fb.group({
            userName: ['', [Validators.required]],
            userEmail: ['', [Validators.required, this.emailValidator]],
            userPhone: ['', [Validators.required, Validators.minLength(9), Validators.pattern("^[0-9]*$")]],
            userSelectedPlan: ['',[Validators.required]]
        })

        this._ActivatedRoute.queryParams.subscribe(params => {
            if(params) {
                this.planSelected = params['planSelected'];
            }
        })
    }

    ngAfterViewInit() {
        this.myFormGroup.get('userSelectedPlan').setValue(this.planSelected)
    }
    
   
    emailValidator(control: { value: any; }) {
        if(control.value && control.value.indexOf("@") > -1){
            return null
        }
        else{
            return {emailValidationError: 'Email has to contain @' }
        }
    }
    
    submitForm() {
        this.isSubmitted = true;
        this.isFormValid = this.myFormGroup.status == "VALID" ? true : false;
        if(!this.isFormValid) {
            alert("Please submit a valid form to proceed...")
        }
        console.log(this.myFormGroup.status)
    }

    get userEmail() {
        return this.myFormGroup.get('userEmail')
    }
    get userPhone() {
        return this.myFormGroup.get('userPhone')
    }

    redirectToOrders() {
        //this._router.navigateByUrl(`/Orders/${this.myFormGroup.get('userSelectedPlan')?.value}/${this.myFormGroup.get('userName')?.value}/${this.myFormGroup.get('userEmail')?.value}/${this.myFormGroup.get('userPhone')?.value}`)
        this._router.navigate(['/Orders'],{ queryParams: { 
            userSelectedPlan: this.myFormGroup.get('userSelectedPlan')?.value, 
            userName: this.myFormGroup.get('userName')?.value, 
            userEmail: this.myFormGroup.get('userEmail')?.value, 
            userPhone: this.myFormGroup.get('userPhone')?.value, 
            } 
        })
    }
}