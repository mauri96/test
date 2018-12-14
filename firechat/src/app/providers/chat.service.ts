import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Mensaje } from '../interface/mensaje.interfaces';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; 

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  public usuario:any={};



  constructor(private afs: AngularFirestore, public afAuth:AngularFireAuth) { 
    this.afAuth.authState.subscribe( user=>{

      console.log('Estado del usuario', user);
      if(!user){
        return;
      }
      this.usuario.nombre=user.displayName;
      this.usuario.uid=user.uid;

    })

  }

  login(proveedor:string) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }


  logout() {
    this.afAuth.auth.signOut();
  }

  cargarMensaje() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref =>
      ref.orderBy('fecha', 'desc').limit(5));

    return this.itemsCollection.valueChanges().pipe(
      map((mensajes: Mensaje[]) => {
        console.log(mensajes);
        this.chats = [];
        for (let mensaje of mensajes) {
          this.chats.unshift(mensaje);
        }
        return this.chats;
        //    this.chats = mensajes;
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
