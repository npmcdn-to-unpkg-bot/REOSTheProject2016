import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NavigationComponent} from "./reos-navigation/components/navigation.component";
import {NavItemComponent} from "./reos-navigation/components/nav-item.component";
import {HomeComponent} from "./home/components/home.component";
import {ContactComponent} from "./reos-contact/components/contact.component";
import {AboutComponent} from "./reos-about/components/about.component";
import {AuthLoginComponent} from "./reos-authentication/components/login.component";
import {AuthRegisterComponent} from "./reos-authentication/components/register.component";
import {AuthResetPasswordComponent} from "./reos-authentication/components/resetpassword.component";

@RouteConfig([
    {
        path: '/',
        name: 'Root',
        component: HomeComponent,
        useAsDefault: true
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactComponent
    },
    {
        path: '/about',
        name: 'About',
        component: AboutComponent
    },
    {
        path: '/login',
        name: 'AuthLogin',
        component: AuthLoginComponent
    },
    {
        path: '/register',
        name: 'AuthRegister',
        component: AuthRegisterComponent
    },
    {
        path: '/resetpassword',
        name: 'AuthResetPassword',
        component: AuthResetPasswordComponent
    }
])
 
@Component({
    template:  `
                <reos-navigation></reos-navigation>
                
                <router-outlet></router-outlet>
              `,
    selector: 'my-app',
    directives: [
                    ROUTER_DIRECTIVES,
                    NavigationComponent,
                    NavItemComponent
                ],
})

export class AppComponent { 

}