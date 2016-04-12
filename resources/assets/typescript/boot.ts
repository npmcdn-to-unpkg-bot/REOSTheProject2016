/// <reference path="../../../node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import 
	{
		ROUTER_PROVIDERS,RouteConfig, 
		ROUTER_DIRECTIVES, 
		APP_BASE_HREF,
		LocationStrategy,
		RouteParams,
		ROUTER_BINDINGS
	} from 'angular2/router';

import {AppComponent} from './app.component';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS
]);