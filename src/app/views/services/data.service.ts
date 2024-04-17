import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getAllstudents(){
    return this.http.get('http://localhost:5000/students')

  }
  addStudent(profile:any){
return this.http.post('http://localhost:5000/addstudent',profile)
  }
}
