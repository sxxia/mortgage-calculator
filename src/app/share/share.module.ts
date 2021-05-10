import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AngularMaterialModule],
  exports: [AngularMaterialModule],
})
export class ShareModule {
  constructor(
    @Optional()
    @SkipSelf()
    _parentModule: ShareModule
  ) {}
}
