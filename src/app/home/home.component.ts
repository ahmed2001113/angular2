import { Component, OnInit } from '@angular/core';
import {NewapiService}from '../newapi.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  ngOnInit(): void {
  }
  
aray=[{name:"ahmed",dataofbirt:'3/3/2003',gender:'male',service:"0100", salary:"20000"},
{name:"omar",dataofbirt:'2/2/2002',gender:'male',service:"011",salary:"15000"},
{name:"gasser",dataofbirt:'1/1/2001',gender:'male',service:"011",salary:"25000"}] ;


}



