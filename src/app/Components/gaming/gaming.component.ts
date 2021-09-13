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
  public letra:string;
  public fallas:boolean;
  public contador:number;
  public opc:number;
  public valor:boolean;
  public point:boolean;
  constructor() {
    this.palabras=[]
    this.clave= ""
    this.guion = ""
    this.letra = ""
    this.fallas=true
    this.contador=0
    this.opc=0
    this.valor=false
    this.point=false
   }

  ngOnInit(): void {
  }

  elegir(){
    this.valor = true
    if(this.opc == 1){
      this.palabras = ['titanic','cars','hulk','annabelle']
      this.clave= this.palabras[Math.floor(Math.random()*this.palabras.length)]
      this.guion = this.clave.replace(/./g,"_ ")
    }else if(this.opc == 2){
      this.palabras = ['futbol','volley','tenis','natacion']
      this.clave= this.palabras[Math.floor(Math.random()*this.palabras.length)]
      this.guion = this.clave.replace(/./g,"_ ")
    }else if (this.opc == 3){
      this.palabras = ['verano','invierno','primavera','otoño']
      this.clave= this.palabras[Math.floor(Math.random()*this.palabras.length)]
      this.guion = this.clave.replace(/./g,"_ ")
    }else{
      this.palabras=['casa','pelota','perro','gato','elefante','pez']
      this.clave= this.palabras[Math.floor(Math.random()*this.palabras.length)]
      this.guion = this.clave.replace(/./g,"_ ")
    }
  }

  enviar(){
    if(this.letra == ''){
      alert("Complete el campo")
      return
    }
    if(!/^[a-zA-Z]*$/g.test(this.letra)){
      alert("Ingrese solo letras")
      this.letra = ""
      return
    }

    for(let index in this.clave){
     if(this.letra == this.clave[index]){
        this.guion = this.guion.substr(0,parseInt(index)*2)+this.letra+this.guion.substr((parseInt(index)*2)+this.letra.length)
        this.fallas =  false
     }
    }

    if(this.fallas){
      this.contador++
    }else{
      if(this.guion.indexOf('_')<0){
        this.contador == 0
        this.opc = 0
        this.valor = false
        this.point =  true
      }
    }

    this.letra = ""

  }
}
