import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';
@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styles: [
  ]
})
export class AllstudentsComponent implements OnInit {
  
  dataArray:any=[]
 
  dataStudent={
    firstname:'',
    lastname:'',
    email:'',
    age:0,
    phone:0,
    id:'',
  }
  constructor(private ds:DataService,private route:Router) {
   
    this.ds.getAllstudents().subscribe(data=>{
      console.log(data)
      this.dataArray=data
    })
    
   }
   ngOnInit(): void {
    
}
}
