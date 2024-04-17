import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { AuthAdminLayoutComponent } from './auth-admin-layout/auth-admin-layout.component';



@NgModule({
  declarations: [
    FrontLayoutComponent,
    AdminLayoutComponent,
    AuthAdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LayoutsModule { }
