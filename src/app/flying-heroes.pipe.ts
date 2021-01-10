import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeroes'
})
export class FlyingHeroesPipe implements PipeTransform {

  transform(allHeroes: Flyer[]){
    return allHeroes.filter(hero => hero.canFly);
  } 
  /* transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  } */

}
export interface Flyer {
  canFly:boolean;
}
