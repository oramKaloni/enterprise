import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MktComponent } from './mkt.component';

const routes: Routes = [
    {
        path: '',
        component: MktComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MktRoutingModule {}
