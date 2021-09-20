import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule, ButtonModule, CheckboxModule, GridModule, InlineLoadingModule, InputModule, LinkModule, ListModule, ModalModule, SelectModule, TableModule, TagModule, UIShellModule } from 'carbon-components-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { ListaEmpresasComponent } from './components/lista-empresas/lista-empresas.component';
import { EmpresaDetalleComponent } from './components/empresa-detalle/empresa-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    ListaEmpresasComponent,
    EmpresaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    ListModule,
    SelectModule,
    ButtonModule,
    InputModule,
    GridModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    UIShellModule,
    InlineLoadingModule,
    TableModule,
    BreadcrumbModule,
    LinkModule,
    ModalModule,
    TagModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
