import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxButtonModule,
  DxChartModule,
  DxCheckBoxModule,
  DxCircularGaugeModule,
  DxDataGridModule,
  DxTooltipModule,
} from 'devextreme-angular';
import {
  DxoDataSourceModule,
  DxoValueAxisModule,
} from 'devextreme-angular/ui/nested';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxDataGridModule,
    DxChartModule,
    DxoValueAxisModule,
    DxoDataSourceModule,
    DxDataGridModule,
    DxTooltipModule,
    DxCheckBoxModule,
    DxButtonModule,
    DxCircularGaugeModule,
  ],
  exports: [
    CommonModule,
    DxDataGridModule,
    DxChartModule,
    DxoValueAxisModule,
    DxoDataSourceModule,
    DxDataGridModule,
    DxTooltipModule,
    DxCheckBoxModule,
    DxButtonModule,
    DxCircularGaugeModule,
  ],
})
export class DevExtremeModule {}
