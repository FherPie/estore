import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from  '@angular/router';
import { TemplatedrivenComponent } from './formsTemplateDriven/templatedriven/templatedriven.component';

const routes: Routes = [{path: 'templateDriven', component:TemplatedrivenComponent}];

  
  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
