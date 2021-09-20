import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../interfaces/Empresa';
import { Tag } from '../interfaces/Tag';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = 'https://localhost:44351/api/';

  constructor(private http: HttpClient) { }

  ListarEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.baseUrl + 'Empresa');
  }

  CreateEmpresa(empresa: Empresa): Observable<number> {
    return this.http.post<number>(this.baseUrl + 'Empresa', empresa);
  }

  ToListTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.baseUrl + 'Tag');
  }

  GetEmpresa(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(this.baseUrl + 'Empresa/' + id);
  }

}
