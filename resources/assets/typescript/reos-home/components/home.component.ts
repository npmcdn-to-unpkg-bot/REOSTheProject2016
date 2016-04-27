import { Component, OnInit } from 'angular2/core';

import { REOSPagesComponent } from './../../reos-pages/components/reos-pages.component';
import { REOSPageComponent } from './../../reos-pages/components/reos-page.component';

@Component({
  templateUrl: 'typescript/reos-home/partials/home.html',
  directives: [REOSPagesComponent, REOSPageComponent]
})

export class HomeComponent
{
  title: string = 'Home Page';
  body:  string = 'This is the Home page body';
  message: string;

  constructor() { }

  ngOnInit()
  {
    this.message = "Almafa";
  }
}