import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CalculationSummaryComponent } from './calculation-summary/calculation-summary.component';
import { MortgageSummaryComponent } from './mortgage-summary/mortgage-summary.component';
import { DevExtremeModule } from './dev-extreme/dev-extreme.module';
import { PaymentDiagramComponent } from './payment-diagram/payment-diagram.component';

@NgModule({
  declarations: [
    CalculationSummaryComponent,
    MortgageSummaryComponent,
    PaymentDiagramComponent,
  ],
  imports: [CommonModule, AngularMaterialModule, DevExtremeModule],
  exports: [
    AngularMaterialModule,
    CalculationSummaryComponent,
    MortgageSummaryComponent,
    DevExtremeModule,
    PaymentDiagramComponent,
  ],
})
export class ShareModule {
  constructor(
    @Optional()
    @SkipSelf()
    _parentModule: ShareModule
  ) {}
}
