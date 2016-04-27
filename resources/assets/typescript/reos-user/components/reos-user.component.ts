import {Component} from 'angular2/core';
import {REOSUserService} from './../services/reos-user.service';

@Component({
  	templateUrl: 'typescript/reos-user/partials/reos-user.html',
	providers: [REOSUserService]
})

export class REOSUserComponent 
{ 
	public users

	constructor(private _reosUserService: REOSUserService)
	{
		this.users = this._reosUserService.getUsers();
		console.log(this._reosUserService.getUsers());
	}
}