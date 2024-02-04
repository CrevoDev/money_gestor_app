import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { FormFieldComponent } from './components/form/form-field/form-field.component';

@NgModule({
  declarations: [ToolBarComponent, FormComponent, FormFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSelectModule,
  ],
  exports: [ToolBarComponent, FormComponent, ReactiveFormsModule],
})
export class SharedModule {}
