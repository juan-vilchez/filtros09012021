import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes: any[] = [];
  canFly = true;
  mutate = true;
  title = 'Héroes que vuelan';

  constructor(){this.reset();}

  addHero(name: string){
    name = name.trim();
    if(!name){return;}
    let hero = {name, canFly: this.canFly};
    this.heroes = this.heroes.concat(hero);
  }
  reset(){
    this.heroes = [];
  }

  moneda = 999;
  nacimiento = new Date(1998,2, 26);
  valordecimal = 33.65765765;
  datossimple = {
    "nombre" : "Juan Jose", 
    "apellido" : "Vilchez"
  };
  datosestudios = {
    "nombre" : "Juan Jose", 
    "apellido" : "Vilchez", "estudios" : {
      "primaria" : "IE 20681",
      "secundaria" : "CRFA-Waynakunaq Qoriwasi",
      "superior" : "TECSUP"
    }
  };
  texto="Habia una vez en TECSUP";
  textecsup="TECSUP";

  promiseValor = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hola mundo!!!');
    }, 3000);
  });

  contrasena = "tecsup123";
  enable=true;
  
}
