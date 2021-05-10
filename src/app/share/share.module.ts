import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CalculationSummaryComponent } from './calculation-summary/calculation-summary.component';

@NgModule({
  declarations: [CalculationSummaryComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [AngularMaterialModule, CalculationSummaryComponent],
})
export class ShareModule {
  constructor(
    @Optional()
    @SkipSelf()
    _parentModule: ShareModule
  ) {}
}
