import {Injectable} from 'angular2/core';

@Injectable()
export class EduLessonService
{

	private lessons;

	constructor() {
   		this.lessons = [
			{"UserID": 11, "Username": "Nice", "Fullname": "Mr. Nice", "Email": "test@test.teszt"},
		    {"UserID": 12, "Username": "Narco", "Fullname": "Narco", "Email": "test@test.teszt"},
		    {"UserID": 13, "Username": "Bombasto", "Fullname": "Bombasto", "Email": "test@test.teszt"},
		    {"UserID": 14, "Username": "Celeritas", "Fullname": "Celeritas", "Email": "test@test.teszt"},
		    {"UserID": 15, "Username": "Magneta", "Fullname": "Magneta", "Email": "test@test.teszt"},
		    {"UserID": 16, "Username": "RubberMan", "Fullname": "RubberMan", "Email": "test@test.teszt"},
		    {"UserID": 17, "Username": "Dynama", "Fullname": "Dynama", "Email": "test@test.teszt"},
		    {"UserID": 18, "Username": "Dr IQ", "Fullname": "Dr IQ", "Email": "test@test.teszt"},
		    {"UserID": 19, "Username": "Magma", "Fullname": "Magma", "Email": "test@test.teszt"},
		    {"UserID": 20, "Username": "Tornado", "Fullname": "Tornado", "Email": "test@test.teszt"}
    	];
  	}

	getLessons()
	{
		return this.lessons;
  	};
}