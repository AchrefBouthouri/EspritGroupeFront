import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum/forum.component';
import { DemoMaterialModule } from 'src/app/demo-material-module';



@NgModule({
  declarations: [
    ForumComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule
  ]
})
export class ForumModule { }
