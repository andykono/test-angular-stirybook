import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-switchers',
  templateUrl: './switchers.component.html',
  styleUrls: ['./switchers.component.css']
})
export class SwitchersComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
