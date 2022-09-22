import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pick-color-app',
  templateUrl: './pick-color-app.component.html',
  styleUrls: ['./pick-color-app.component.css']
})
export class PickColorAppComponent implements OnInit {
  color: 'black';

  changeColorText(color) {
    this.color = color;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
