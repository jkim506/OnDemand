import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  // request details summary share
  public activeFormSection = 2;

  constructor() { }

  ngOnInit() {
  }

  public setFormSection(section) {
    this.activeFormSection = section;
  }

}
