import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BirdsService } from '../service/birds.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Location } from '@angular/common';

@Component({
  selector: 'app-birds-form',
  templateUrl: './birds-form.component.html',
  styleUrls: ['./birds-form.component.css']
})
export class BirdsFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: BirdsService,
    private snackBar: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      namePtBr: [null],
      nameEng: [null],
      species: [null],
      family: [null],
      size: [null],
      habitat:[null],
      gender: [null],
      color: [null],
      photo: [null],
      localization: [null]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.service.save(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', '', {duration: 5000});
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', '', {duration: 5000});
  }
}
