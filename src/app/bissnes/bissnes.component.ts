import { Component, OnInit } from '@angular/core';
import {NewapiService} from '../newapi.service';
@Component({
  selector: 'app-bissnes',
  templateUrl: './bissnes.component.html',
  styleUrls: ['./bissnes.component.css']
})
export class BissnesComponent implements OnInit {

  newapi:any;

  constructor(public cobynewapi:NewapiService){

    cobynewapi.getnewapi().subscribe(newsapidata=>this.newapi=newsapidata.articles )}

 

  ngOnInit(): void {
  }

}
