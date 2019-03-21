import { Injectable } from '@angular/core';
import Listjson from '../../../assets/json/students.json';
import ListjsonCourses from '../../../assets/json/cursos.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {

     studentlist: student[] = Listjson; 
     courseslist: curso[] = ListjsonCourses;   

  constructor() { }
}
