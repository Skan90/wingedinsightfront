import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BirdsService } from '../service/birds.service';

@Component({
  selector: 'app-birds-form',
  templateUrl: './birds-form.component.html',
  styleUrls: ['./birds-form.component.css']
})
export class BirdsFormComponent implements OnInit {

  // habitat: FormGroup;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: BirdsService) {
    this.form = this.formBuilder.group({
      namePtBr: [null],
      nameEng: [null],
      species: [null],
      family: [null],
      size: [null],
      gender: [null],
      color: [null],
      photo: [null],
      secoBaixo: false,
      alagado: false,
      banhado: false,
      secoAlto: false,
      arvores: false,
      banhadoAlto: false
    });
    // this.habitat = this.formBuilder.group({
    //   secoBaixo: false,
    //   alagado: false,
    //   banhado: false,
    //   secoAlto: false,
    //   arvores: false,
    //   banhadoAlto: false
    // });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value);
    // this.service.save(this.habitat.value);
  }

  onCancel() {

  }
}
