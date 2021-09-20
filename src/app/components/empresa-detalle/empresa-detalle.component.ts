import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from 'src/app/interfaces/Empresa';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-empresa-detalle',
  templateUrl: './empresa-detalle.component.html',
  styleUrls: ['./empresa-detalle.component.css']
})
export class EmpresaDetalleComponent implements OnInit {

  empresa: Empresa;

  constructor(private route: ActivatedRoute, private service: AppService) {
    this.empresa = {
      nombre : '',
      ruc: '',
      fecha_registro: new Date()
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id_empresa = params["id_empresa"];
      this.service.GetEmpresa(id_empresa).subscribe(empresa => {
        this.empresa = empresa;
      });
    });
  }

}
