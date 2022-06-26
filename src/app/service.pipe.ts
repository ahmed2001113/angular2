import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'service'
})
export class ServicePipe implements PipeTransform {

  transform(phone :string ):string {
    
    let phoneCode=phone.slice(0,3);
      if(phoneCode=="0100")
      {return "Vadafone";
    }  
      else(phoneCode=="011")
      {return "Etisalat"}
    
    }}
    
    
  


