import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-outer-tabs',
  templateUrl: './outer-tabs.component.html',
  styleUrls: ['./outer-tabs.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class OuterTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
