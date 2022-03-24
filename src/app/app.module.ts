import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SucursalVillaNuevaComponent } from './sucursal-villa-nueva/sucursal-villa-nueva.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { SucursalTeculutlanComponent } from './sucursal-teculutlan/sucursal-teculutlan.component';
import { SucursalEscuintlaComponent } from './sucursal-escuintla/sucursal-escuintla.component';
import { SucursalSalamaComponent } from './sucursal-salama/sucursal-salama.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    DashboardComponent,
    SucursalVillaNuevaComponent,
    LogInComponent,
    RegistrarComponent,
    SucursalTeculutlanComponent,
    SucursalEscuintlaComponent,
    SucursalSalamaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
