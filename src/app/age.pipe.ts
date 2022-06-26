import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dateofbirth :string ):number {
  let today= new Date();
  let birthDate = new Date(dateofbirth);
  let age =today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate() ))
  {
    age--; 
   }

  return age;  
  }
}



