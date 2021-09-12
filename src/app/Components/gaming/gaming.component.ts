import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.css']
})
export class GamingComponent implements OnInit {

  public palabras:Array<String>;
  public clave:String;
  public guion:String;
  public letra:String;
  public i:number;
  public fallas:boolean;
  public contador:number;
  constructor() {
    this.palabras=['casa','pelota','perro','gato','elefante']
    this.clave= this.palabras[Math.floor(Math.random()*this.palabras.length)]
    this.guion = this.clave.replace(/./g,"_ ")
    this.letra = ""
    this.i=0
    this.fallas=true
    this.contador=0
   }

  ngOnInit(): void {
  }

  enviar(){
    for(let index of this.clave){
     if(this.letra == this.clave.charAt(this.i)){
        alert("bueno")
        this.fallas =  false
     }
     this.i++
    }

    if(this.fallas){
      this.contador++
      alert(this.contador)
    }else{
      if(this.guion.indexOf('_')<0){
        alert("victoria")
        this.contador == 0
      }
    }

    this.letra = ""
  }
}
