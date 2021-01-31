import { NgModule } from'@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { registerChildRoutes } from '../routes/registerModule.route';

@NgModule({
    declarations:[registerComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(registerChildRoutes)]
})

export class registerModule {}