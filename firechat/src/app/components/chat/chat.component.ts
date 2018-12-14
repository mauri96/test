import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent {

  mensaje: string = "";

  constructor(public _cs: ChatService) {
    this._cs.cargarMensaje().
      subscribe();
  }


  enviar_mensaje() {
  
    if(this.mensaje.length==0){
      return;
    }
    else{
      this._cs.agregarMensaje(this.mensaje)
      .then(()=>this.mensaje="")
      .catch((err)=>console.error('Error al enviar',err));

    }
  }


  
}
