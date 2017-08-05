import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-snif-list',
  templateUrl: './snif-list.component.html',
  styleUrls: ['./snif-list.component.css']
})
export class SnifListComponent implements OnInit {

  @Input()
  private snifList: any;

  constructor() {
  }

  ngOnInit() {
    console.log("Tes!E!#!@#!@#!@#!#!@#t");
  }

}
