import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'reos-navigation',
	template:  
	`
<reos-pages>
	<reos-page>
		<div class="reos-navigation">

			<div class="reos-profile">

			</div>

			<div class="reos-nav">

				<a [routerLink]="['Contact']" class="reos-nav-item" style="background: #E2E2E2;border:0;width: 100%">
					<div style="background: #4285F4;color: #fff;width:80%;margin: 0 auto;padding: 10px 0;border-radius: 20px;">
						<span>
							<i class="fa fa-comment"></i>
						</span>&nbsp;&nbsp;
						<span>LENNE EGY KÉRDÉSEM!</span>
					</div>
				</a>

				<a [routerLink]="['UserManager']" class="reos-nav-item" style="background: #34A853;color: #fff;">
					<span class="reos-nav-icon">
						<i class="fa fa-users fa-2x"></i>
					</span>
					<span class="reos-nav-title">FELHASZNÁLÓK KEZELÉSE</span>
				</a>

				<a [routerLink]="['CourseManager']" class="reos-nav-item" style="background: #34A853;color: #fff;">
					<span class="reos-nav-icon">
						<i class="fa fa-graduation-cap fa-2x"></i>
					</span>
					<span class="reos-nav-title">KURZUSOK KEZELÉSE</span>
				</a>

				<a [routerLink]="['TestManager']" class="reos-nav-item" style="background: #34A853;color: #fff;">
					<span class="reos-nav-icon">
						<i class="fa fa-pencil fa-2x"></i>
					</span>
					<span class="reos-nav-title">VIZSGÁK KEZELÉSE</span>
				</a>

				<a [routerLink]="['Root']" class="reos-nav-item" style="background: #34A853;color: #fff;">
					<span class="reos-nav-icon">
						<i class="fa fa-desktop fa-2x"></i>
					</span>
					<span class="reos-nav-title">MONITOR</span>
				</a>

				<a [routerLink]="['Root']" class="reos-nav-item">
					<span class="reos-nav-icon">
						<i class="fa fa-dashboard fa-2x"></i>
					</span>
					<span class="reos-nav-title">DASHBOARD</span>
				</a>

				<a [routerLink]="['MyProfile']" class="reos-nav-item">
					<span class="reos-nav-icon">
						<i class="fa fa-user fa-2x"></i>
					</span>
					<span class="reos-nav-title">PROFILOM</span>
				</a>

				<a [routerLink]="['MyCourse']" class="reos-nav-item">
					<span class="reos-nav-icon">
						<i class="fa fa-graduation-cap fa-2x"></i>
					</span>
					<span class="reos-nav-title">KURZUSAIM</span>
				</a>
				<a [routerLink]="['MyTest']" class="reos-nav-item">
					<span class="reos-nav-icon">
						<i class="fa fa-pencil fa-2x"></i>
					</span>
					<span class="reos-nav-title">VIZSGÁIM</span>
				</a>
				<div class="reos-nav-item">
					<span class="reos-nav-icon">
						<i class="fa fa-line-chart fa-2x"></i>
					</span>
					<span class="reos-nav-title">STATISZTIKÁK</span>
				</div>
				<div class="reos-nav-item">
					<span class="reos-nav-icon">
						<i class="fa fa-signal fa-2x"></i>
					</span>
					<span class="reos-nav-title">RANGLÉTRA</span>
				</div>
			</div>
		</div>
	</reos-page>
</reos-pages>
	`,
    directives: [ROUTER_DIRECTIVES],
})

export class NavigationComponent { }