import {Component} from 'angular2/core';
import {EduCourseService} from './../services/edu-course.service';

@Component({
  templateUrl: 'typescript/education/partials/edu-course-manager.html',
	providers: [EduCourseService]
})

export class EduCourseManagerComponent
{
	public courses

	constructor(private _eduCourseService: EduCourseService)
	{
		this.courses = this._eduCourseService.getCourses();
		console.log(this._eduCourseService.getCourses());
	} 
}