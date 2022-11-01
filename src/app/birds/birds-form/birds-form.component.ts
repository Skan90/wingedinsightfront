import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BirdsService } from '../service/birds.service';

@Component({
  selector: 'app-birds-form',
  templateUrl: './birds-form.component.html',
  styleUrls: ['./birds-form.component.css']
})
export class BirdsFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: BirdsService) {
    this.form = this.formBuilder.group({
      namePtBr: [null],
      nameEng: [null],
      species: [null],
      family: [null],
      size: [null],
      habitat:[null],
      gender: [null],
      color: [null],
      photo: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value);
  }
  onCancel() {

  }
}
