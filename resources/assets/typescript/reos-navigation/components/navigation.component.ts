import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'reos-navigation',
	template:  
	`
		<nav class="navbar navbar-default reos-navigation">
			<div class="container-fluid">

			    <!-- Brand and toggle get grouped for better mobile display -->
			    <div class="navbar-header">
      				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#reosNav" aria-expanded="false">
				        <span class="sr-only">Toggle navigation</span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
			    	</button>
      				<a class="navbar-brand" href="#">Brand</a>
    			</div>

			    <!-- Collect the nav links, forms, and other content for toggling -->
			    <div class="collapse navbar-collapse" id="reosNav">
	      			<ul class="nav navbar-nav pull-right">
		                <li><a [routerLink]="['Root']">Home</a></li>
		                <li><a [routerLink]="['About']">About</a></li>
		                <li><a [routerLink]="['Contact']">Contact</a></li>
		                <li><a [routerLink]="['AuthLogin']">Login</a></li>
		                <li><a [routerLink]="['AuthRegister']">Register</a></li>
		                <li><a [routerLink]="['AuthResetPassword']">Reset password</a></li>
	      			</ul>
    			</div><!-- /.navbar-collapse -->
  			</div><!-- /.container-fluid -->
		</nav>
	`,
    directives: [
                    ROUTER_DIRECTIVES
                ],
})

export class NavigationComponent { }