import { Component } from '@angular/core';

@Component({
    selector: 'register',
    template: `
        <div>
            <h1>Register</h1>
            <form>
            <div class="form-group">
                <label>Name </label>
                <input class="form-control" type="text" />
            </div>

            <div class="form-group">
                <label>Email </label>
                <input class="form-control" type="text" />
            </div>

            <div class="form-group">
                <label>Phone Number </label>
                <input class="form-control" type="text" />
            </div>

            <div class="form-group">
                <label>Plan </label>
                <input class="form-control" type="text" />
            </div>

            <div class="form-group">
                <button class="form-control btn btn-primary"> Submit </button>
            </div>

            </form>
        </div>
    `
})

export class registerComponent{

}