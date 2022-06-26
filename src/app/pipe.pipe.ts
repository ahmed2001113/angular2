import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(name :string ,gender: string ):string {
    if (gender=="male"){
    return "mr. " + name ;
    }  
    else {
    return "miss. " + name ;
    }  
    
  }
}

