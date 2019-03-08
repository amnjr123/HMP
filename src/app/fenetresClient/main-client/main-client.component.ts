import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-client',
  templateUrl: './main-client.component.html',
  styleUrls: ['./main-client.component.scss']
})
export class MainClientComponent implements OnInit {

  @Input()
  user;

  constructor() { }

  ngOnInit() {

  }

}
