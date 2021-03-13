import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.page.html',
  styleUrls: ['./operacion.page.scss'],
})
export class OperacionPage implements OnInit {
resultado  = null;
num1 = null;
num2 = null;
operacionn = null;
  constructor() { }

  ngOnInit() {
  }

  operacion() {
    if (this.operacionn == "+" )
      this.resultado=(parseInt(this.num1)+parseInt(this.num2)).toString();
    if (this.operacionn == "-" )
      this.resultado=(parseInt(this.num1)-parseInt(this.num2)).toString();
    if (this.operacionn == "/" )
      this.resultado=(parseInt(this.num1)/parseInt(this.num2)).toString();
    else if (this.operacionn == "*" )
      this.resultado=(parseInt(this.num1)*parseInt(this.num2)).toString();

  }

}
