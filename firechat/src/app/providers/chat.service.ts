import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

public ItemsCollection:AngularFirestoreCollection<any>;
public chats:any[]=[];


  constructor(private afs:AngularFirestore) { }

  cargarMensaje(){
    this.ItemsCollection= this.afs.collection<any>('chats');
    return   this.ItemsCollection.valueChanges();
  }

}
