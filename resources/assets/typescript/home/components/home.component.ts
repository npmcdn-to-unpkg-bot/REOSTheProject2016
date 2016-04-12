import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  template:  
  `
  	<div style="background:#222;width:100%;height:100%;position:absolute;left:0;top:0;">

        <div class="container">
            <span style="color:#fff">REOS //</span> EDUCATION
            <div style="margin-top:20px;">
            	<a [routerLink]="['About']">Kirpóbálom</a>
            </div>
        </div>
  	</div>

  `,
    directives: [
                    ROUTER_DIRECTIVES
                ],
})

export class HomeComponent { }