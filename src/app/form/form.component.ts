import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  formGroup: FormGroup
  constructor(private _fb: FormBuilder) { 
    this.formGroup = this._fb.group({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }, {
      validator: Validators.required
    })
  }

  ngOnInit(): void {

  }

  onSubmit($event: any) {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    }
  }
}
