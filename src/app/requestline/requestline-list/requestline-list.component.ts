import { Component, OnInit } from '@angular/core';
import { RequestlineService } from '../requestline.service';
import { Requestline } from '../requestline.class';


@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {
  requestlines: Requestline[] = [];
  
  constructor(
    private requestline : RequestlineService
    ) { }

  ngOnInit(): void {
    this.requestline.list().subscribe(
      res => {
        this.requestlines = res;
        console.debug("Requestline-list:",res);}
      ,err => {console.error(err);}
    );
  }
}