import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public DataService: DataService) { }

  ngOnInit() {
    console.log(this.DataService.courseslist);
  }

}
