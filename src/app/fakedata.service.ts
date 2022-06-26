import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  constructor(public cobyhttpclient:HttpClient) { }
  Getfakedata(){
    return this.cobyhttpclient.get("https://jsonplaceholder.typicode.com/photos")}
  
  }

  
