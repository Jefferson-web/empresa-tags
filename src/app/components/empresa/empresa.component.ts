import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonSize, ButtonType } from 'carbon-components-angular';
import { Tag } from 'src/app/interfaces/Tag';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  form: FormGroup;
  isActive: boolean = true;
  loading: boolean = false;
  return: string = '/empresa-detalle/';

  constructor(private fb: FormBuilder, private service: AppService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.createForm();
    this.getTags();
  }

  createForm() {
    return this.fb.group({
      nombre: this.fb.control('', Validators.required),
      ruc: this.fb.control('', Validators.required),
      tags: this.fb.array([])
    });
  }

  getTags() {
    this.loading = true;
    this.service.ToListTags().subscribe(data => {
      this.loading = false;
      this.addTagsToForm(data);
    });
  }

  addTagsToForm(data: Tag[]) {
    let arr = this.tags;
    data.forEach(tag => {
      arr.push(this.fb.group({
        tagId: this.fb.control(tag.tagId),
        nombre: this.fb.control(tag.nombre),
        selected: this.fb.control(false)
      }));
    });
  }

  getValueOfArray(index:number, param: string){
    return this.tags.controls[index].get(param)?.value;
  }

  get tags(): FormArray {
    return this.form.get('tags') as FormArray;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.service.CreateEmpresa(this.form.value).subscribe(id => {
      this.router.navigateByUrl(this.return + id);
    }, err => {
      alert('An error has ocurred');
    });
  }

  // Configuración del button
  ibmButton: ButtonType = "primary";
  size: ButtonSize = "field";
}
