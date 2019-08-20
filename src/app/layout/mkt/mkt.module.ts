import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { MktRoutingModule } from './mkt-routing.module';
import { MktComponent } from './mkt.component';
import { PageHeaderModule } from '../../shared';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        MktRoutingModule,
        PageHeaderModule,
        ButtonModule,
        DialogModule,
        ChartModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgbAlertModule
    ],
    declarations: [MktComponent]
})
export class MktModule {}
