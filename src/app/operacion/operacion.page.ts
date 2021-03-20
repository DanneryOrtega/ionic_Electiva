import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.page.html',
  styleUrls: ['./operacion.page.scss'],
})
export class OperacionPage implements OnInit {
// resultado  = null;
// num1 = null;
// num2 = null;
// operacionn = null;
// mensaje = 'El resultado de la ';
  constructor() { }

  ngOnInit() {
  }

  // operacion() {
  //   if (this.operacionn == "+" )
  //     this.resultado=this.mensaje+'suma entre '+(this.num1)+' y '+(this.num2)+' = '+(parseInt(this.num1)+parseInt(this.num2)).toString();
  //   if (this.operacionn == "-" )
  //     this.resultado=this.mensaje+'resta entre '+(this.num1)+' y '+(this.num2)+' = '+(parseInt(this.num1)-parseInt(this.num2)).toString();
  //   if (this.operacionn == "/" )
  //     this.resultado=this.mensaje+'division entre '+(this.num1)+' y '+(this.num2)+' = '+(parseInt(this.num1)/parseInt(this.num2)).toString();
  //   else if (this.operacionn == "*" )
  //     this.resultado=this.mensaje+'multiplicacion entre '+(this.num1)+' y '+(this.num2)+' = '+(parseInt(this.num1)*parseInt(this.num2)).toString();
  // }

  setResult(value) {
    document.getElementById("result").innerHTML = value;
  }

  getResult() {
    return(document.getElementById("result").innerHTML);
  }

  add(key) {
    var result = this.getResult();
    if (result!="0" || isNaN(key)) this.setResult(result + key);
    else this.setResult(key);
  }

  calc() {
    var result = eval(this.getResult());
    this.setResult(result);
  }

  del() {
    this.setResult(0);
  }

}
