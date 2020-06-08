import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

const materialModules=[
  MatButtonModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
]; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules,

  ],
  exports:[materialModules]
})
export class MaterialModule { }
