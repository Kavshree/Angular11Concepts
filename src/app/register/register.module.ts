import { NgModule } from'@angular/core';
import { CommonModule } from '@angular/common';

import { registerComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { registerChildRoutes } from '../routes/registerModule.route';

@NgModule({
    declarations:[registerComponent],
    imports: [RouterModule.forChild(registerChildRoutes)]
})

export class registerModule {}