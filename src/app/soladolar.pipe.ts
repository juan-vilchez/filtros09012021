import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'soladolar'
})
export class SoladolarPipe implements PipeTransform {

  transform(value: number, tasaCambio:number): any {
  
    return value * tasaCambio
  }

}
