import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Mensaje } from '../interface/mensaje.interfaces';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];


  constructor(private afs: AngularFirestore) { }

  cargarMensaje() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats' , ref => ref.orderBy('fecha','asc'));

    return this.itemsCollection.valueChanges().pipe(
      map((mensajes: Mensaje[]) => {
        console.log(mensajes);
        this.chats = mensajes;
      }));
  }

  agregarMensaje(texto: string) {
    let mensaje: Mensaje = {
      nombre: 'Demo',
      mensaje: texto,
      fecha: new Date().getTime()

    }
    return this.itemsCollection.add(mensaje);

  }
}
