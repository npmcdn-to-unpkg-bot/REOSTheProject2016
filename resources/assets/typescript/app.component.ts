import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { NavigationComponent } from "./reos-navigation/components/navigation.component";
import { HomeComponent } from "./reos-home/components/home.component";
import { ContactComponent } from "./reos-contact/components/contact.component";
import { AboutComponent } from "./reos-about/components/about.component";
import { AuthLoginComponent } from "./reos-authentication/components/login.component";
import { AuthRegisterComponent } from "./reos-authentication/components/register.component";
import { AuthResetPasswordComponent } from "./reos-authentication/components/resetpassword.component";
import { REOSUserComponent } from "./reos-user/components/reos-user.component";

import { REOSProfileComponent } from "./reos-profile/components/profile.component";

import { EduCourseComponent } from "./education/components/edu-course.component";
import { EduTestComponent } from "./education/components/edu-test.component";
import { EduCourseManagerComponent } from "./education/components/edu-course-manager.component";
import { EduTestManagerComponent } from "./education/components/edu-test-manager.component";

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
        path: '/profile/myprofile',
        name: 'MyProfile',
        component: REOSProfileComponent
    },
    {
        path: '/profile/courses',
        name: 'MyCourse',
        component: EduCourseComponent
    },
    {
        path: '/profile/tests',
        name: 'MyTest',
        component: EduTestComponent
    },


    {
        path: '/studio/courses',
        name: 'CourseManager',
        component: EduCourseManagerComponent
    },
    {
        path: '/studio/tests',
        name: 'TestManager',
        component: EduTestManagerComponent
    },
    {
        path: '/studio/users',
        name: 'UserManager',
        component: REOSUserComponent
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
    selector: 'my-app',
    templateUrl: 'typescript/app.html',
    directives: [ROUTER_DIRECTIVES, NavigationComponent]
})

export class AppComponent
{
    constructor() {}
}