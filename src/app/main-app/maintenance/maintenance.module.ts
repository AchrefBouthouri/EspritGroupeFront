import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { DemoMaterialModule } from 'src/app/demo-material-module';




@NgModule({
  declarations: [
    ReclamationComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule
  ]
})
export class MaintenanceModule { }
