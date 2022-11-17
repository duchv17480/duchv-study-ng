import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TestState} from "../Services/server-http.service";
import {Select} from "@ngxs/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  //public name = new FormControl('');

  public proFileForm = new FormGroup({
    name: new FormControl(''),
    password:  new FormControl(''),
  })

  @Select(TestState) public state$: Observable<TestState.Model>

  ngOnInit(): void {
    TestState.actSuccess.emit(null)
    this. state$.subscribe(v => console.log(v))
  }

  onSubmit() {
    console.log('Name: '+this.proFileForm.controls.name.value)
    console.log('Age: '+this.proFileForm.controls.password.value)
  }
}
