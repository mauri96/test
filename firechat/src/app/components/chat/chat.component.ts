import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  constructor(public _cs:ChatService) { 
    this._cs.cargarMensaje().
      subscribe((mensajes:any[])=>{
        console.log(mensajes);
      })

  }
  mensaje: string="";

  ngOnInit() {
  }


  enviar_mensaje(){
    console.log(this.mensaje);

  }

  
}
