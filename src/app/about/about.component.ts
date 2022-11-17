import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public name = '';
  public password = '';
  public list = ['duc','bich','duc2']
  public selectLists = '';


  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(){
    console.log('submit')
    console.log('name:'+this.name)
    console.log('password:'+this.password)
    console.log('list:'+this.selectLists)
  }
  public selectList(event:any){
    this.selectLists = event.target.value;
  }

}
