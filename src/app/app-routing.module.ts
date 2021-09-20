import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaDetalleComponent } from './components/empresa-detalle/empresa-detalle.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { ListaEmpresasComponent } from './components/lista-empresas/lista-empresas.component';

const routes: Routes = [
  { path: 'lista-empresas', component: ListaEmpresasComponent },
  { path: 'nueva-empresa', component: EmpresaComponent },
  { path: 'empresa-detalle/:id_empresa', component: EmpresaDetalleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'lista-empresas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
