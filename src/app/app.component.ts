import { Component, OnInit } from '@angular/core';

declare var chocolate: any;
// declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    console.log('app.component OnInit');
  }
}
