import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';

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

 
  value = '0';
  oldValue = '0';

  lastOperator = 'x';

  readyForNewInput = true;

  numberGroups = [
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, 'c', '/', '=']
  ];
  
  onButtonPress(symbol)
  {
    console.log(symbol);
    if(isNumber(symbol)){
      console.log('is a number');
     console.log('is a number');
      if (this.readyForNewInput)
        this.value = '' + symbol;
      else
        this.value += '' + symbol;
      this.readyForNewInput = false;
    }else if(symbol === 'c'){
      this.value = '0';
      this.readyForNewInput = true;
    }else if(symbol === '='){
        if (this.lastOperator === 'x')
        this.value = '' + (parseInt(this.oldValue) * parseInt(this.value));
      else if (this.lastOperator === '-')
        this.value = '' + (parseInt(this.oldValue) - parseInt(this.value));
      else if (this.lastOperator === '+')
        this.value = '' + (parseInt(this.oldValue) + parseInt(this.value));
      else if (this.lastOperator === '/')
        this.value = '' + (parseInt(this.oldValue) / parseInt(this.value));
      this.readyForNewInput = true;
    }else{
      this.readyForNewInput = true;
      this.oldValue = this.value;
      this.lastOperator = symbol;
    }
  }



}
