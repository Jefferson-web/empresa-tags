import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableBody, TableHeaderItem, TableItem, TableModel, TableRowSize } from 'carbon-components-angular';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css']
})
export class ListaEmpresasComponent implements OnInit {

  simpleModel: TableModel = new TableModel();
  size: TableRowSize = "md";

  @ViewChild("customItemTemplate") protected customItemTemplate: TemplateRef<any>;
  @ViewChild("tagsTemplate") protected tagsTemplate: TemplateRef<any>

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.simpleModel.header = [
      new TableHeaderItem({ data: '#' }),
      new TableHeaderItem({ data: 'Nombre' }),
      new TableHeaderItem({ data: 'RUC' }),
      new TableHeaderItem({ data: 'Tags' }),
      new TableHeaderItem({ data: '' })
    ];
    this.ToList();
  }

  ToList() {
    this.service.ListarEmpresas().subscribe(empresas => {
      var data: TableItem[][] = [];
      empresas.forEach((empresa, index) => {
        data.push([
          new TableItem({ data: index + 1 }),
          new TableItem({ data: empresa.nombre }),
          new TableItem({ data: empresa.ruc }),
          new TableItem({ data: { tags: empresa.tags } , template: this.tagsTemplate}),
          new TableItem({ data: { name: 'Ver más', link: `/empresa-detalle/${empresa.empresaId}` }, template: this.customItemTemplate })
        ]);
      });
      this.loadTable(data);
    });
  }

  loadTable(data: TableItem[][]) {
    this.simpleModel.data = data;
  }

}
