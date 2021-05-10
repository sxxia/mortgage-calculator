import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CalculationSummaryComponent } from './calculation-summary/calculation-summary.component';
import { MortgageSummaryComponent } from './mortgage-summary/mortgage-summary.component';
import { DevExtremeModule } from './dev-extreme/dev-extreme.module';

@NgModule({
  declarations: [CalculationSummaryComponent, MortgageSummaryComponent],
  imports: [CommonModule, AngularMaterialModule, DevExtremeModule],
  exports: [
    AngularMaterialModule,
    CalculationSummaryComponent,
    MortgageSummaryComponent,
    DevExtremeModule,
  ],
})
export class ShareModule {
  constructor(
    @Optional()
    @SkipSelf()
    _parentModule: ShareModule
  ) {}
}
