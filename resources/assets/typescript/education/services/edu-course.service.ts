import {Injectable} from 'angular2/core';

@Injectable()
export class EduCourseService
{

	private courses;

	constructor() {
   		this.courses = [
			{"CourseID": 11, "Title": "PHP", "Description": "Mr. Nice", "CountLesson": "12"},
		    {"CourseID": 12, "Title": "Java", "Description": "Narco", "CountLesson": "12"},
		    {"CourseID": 13, "Title": "CSS3", "Description": "Bombasto", "CountLesson": "12"},
		    {"CourseID": 14, "Title": "HTML5", "Description": "Celeritas", "CountLesson": "12"},
		    {"CourseID": 15, "Title": "JavaScript", "Description": "Magneta", "CountLesson": "12"},
		    {"CourseID": 16, "Title": "C#", "Description": "RubberMan", "CountLesson": "12"},
		    {"CourseID": 17, "Title": "SQL", "Description": "Dynama", "CountLesson": "12"},
		    {"CourseID": 18, "Title": "Git", "Description": "Dr IQ", "CountLesson": "12"},
		    {"CourseID": 19, "Title": "NodeJS", "Description": "Magma", "CountLesson": "12"},
		    {"CourseID": 20, "Title": "Laravel 5", "Description": "Tornado", "CountLesson": "12"}
    	];
  	}

	getCourses()
	{
		return this.courses;
  	};
}