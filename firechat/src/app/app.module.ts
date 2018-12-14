import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import { ChatComponent } from './components/chat/chat.component'
import {FormsModule} from '@angular/forms'; 
import { ChatService } from './providers/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, AngularFireAuthModule,AngularFirestoreModule,
    FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
