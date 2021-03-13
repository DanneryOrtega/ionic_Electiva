import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.page.html',
  styleUrls: ['./saludo.page.scss'],
})
export class SaludoPage implements OnInit {
  nombre  = null;
  mostrar = null;
  usuarios = [];
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  
  guardar() {
    // Agregando datos a la base de datos en memoria
    this.usuarios.push({
      nombre: this.nombre
    })
    // Limpiando datos
    this.nombre = "";
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Saludos',
      //subHeader: 'Subtitle',
      message: 'Ingresa tu nombre para saludarte',
      buttons: ['OK']
    });

    await alert.present();
  }


  async presentAlertt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Saludos',
      //subHeader: 'Subtitle',
      message:'Hola '+ this.nombre,
      buttons: ['OK']
    });

    await alert.present();
  }
  
  Mostrar() {
    //if ( this.nombre== null )
    //this.mostrar=
    
  //else
    //this.mostrar=this.presentAlertt;
  }

}
