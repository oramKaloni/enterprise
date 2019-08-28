import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { CompareRoutingModule } from './compare-routing.module';
import { CompareComponent } from './compare.component';
import { PageHeaderModule } from '../../shared';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        CompareRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule,
        FormsModule,
        ButtonModule,
        DialogModule,
        ChartModule,
        ToastModule,
    ],
    declarations: [CompareComponent],
    providers: [MessageService]
})
export class CompareModule {}
