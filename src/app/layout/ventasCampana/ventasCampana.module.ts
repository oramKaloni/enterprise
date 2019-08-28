import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { VentasCampanaRoutingModule } from './ventasCampana-routing.module';
import { VentasCampanaComponent } from './ventasCampana.component';
import { PageHeaderModule } from '../../shared';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, Ng2Charts, VentasCampanaRoutingModule, PageHeaderModule, ButtonModule,
        DialogModule,
        ChartModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgbAlertModule],
    declarations: [VentasCampanaComponent]
})
export class VentasCampanaModule {}
