import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
  providers: [DataService]
})
export class StudentsListComponent implements OnInit {

  constructor(public DataService: DataService) { }

  ngOnInit() {
    console.log(this.DataService.studentlist);
    
  }
}
