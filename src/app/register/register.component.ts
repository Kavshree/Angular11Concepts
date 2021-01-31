import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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

            <div *ngIf="isSubmitted">
                <h4> You submitted: </h4>
                Name: {{myFormGroup.get('userName')?.value }} <br/>
                Email: {{myFormGroup.get('userEmail')?.value }} <br/>
                Phone: {{myFormGroup.get('userPhone')?.value }} <br/>
                Plan: {{myFormGroup.get('userSelectedPlan')?.value }} <br/>
            </div>
        </div>
    `
})

export class registerComponent{
    isFormValid = false; isSubmitted=false;
    productPlans = ['Basic', 'Rapid', 'Incredible'];
    constructor(private fb: FormBuilder) {}
    myFormGroup = this.fb.group({
        userName: ['', [Validators.required]],
        userEmail: ['', [this.emailValidator]],
        userPhone: ['', [Validators.minLength(9), Validators.pattern("^[0-9]*$")]],
        userSelectedPlan: ['']
    })
   
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
        console.log(this.myFormGroup.status)
    }

    get userEmail() {
        return this.myFormGroup.get('userEmail')
    }
    get userPhone() {
        return this.myFormGroup.get('userPhone')
    }
}