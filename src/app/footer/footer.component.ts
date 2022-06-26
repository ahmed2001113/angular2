import { Component, OnInit } from '@angular/core';
import {FakedataService} from '../fakedata.service'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  photo:any;
  constructor(public cobyfakedata:FakedataService){
    this.cobyfakedata.Getfakedata().subscribe(alldata=>{this.photo=alldata}) }

  ngOnInit(): void {
  }

}
