import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(typeof value);
    
    let year= value.slice(0,4);
    let month = value.slice(5,7);
    let day = value.slice(8,10);
    console.log(year,month,day);
  
    let fecha = year+""+month+""+day;
    
    return moment(fecha, "YYYYMMDD").fromNow();;
  }

}
