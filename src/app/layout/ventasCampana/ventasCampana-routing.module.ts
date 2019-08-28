import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentasCampanaComponent } from './ventasCampana.component';

const routes: Routes = [
    {
        path: '',
        component: VentasCampanaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VentasCampanaRoutingModule {}
