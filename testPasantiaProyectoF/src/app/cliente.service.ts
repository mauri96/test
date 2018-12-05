import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cliente } from './cliente';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url='http://localhost:5000/api/cliente';
  private urllog='http://localhost:5000/api/cliente/login/';


  constructor(
    private http:HttpClient,
    private messageService: MessageService
  ) { }

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url)
    .pipe(
      tap(clientes=> this.log('fetched clientes')),
      catchError(this.handleError('getUsuarios',[]))

    )
  }


  getClienteId(id:number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}/${id}`)
      .pipe(
        tap(_=>this.log(`getched cliente id=${id}`)),
        catchError(this.handleError<Cliente>(`getClienteID id=${id}`))
      );
  }
  getClienteLog(log:String): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urllog}/${log}`)
      .pipe(
        tap(_=>this.log(`getched cliente login=${log}`)),
        catchError(this.handleError<Cliente>(`getClienteLog login=${log}`))
      );
  }

  setCliente(item:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url,item,httpOptions)
    .pipe(
      tap((cliente: Cliente)=>this.log(`added cliente`)),
      catchError(this.handleError<Cliente>('addCliente'))
    );

  }

  deleteCliente(id:number):Observable<Cliente>{
      return this.http.delete<Cliente>(`${this.url}/${id}`)
      .pipe(
        tap(_ =>this.log(`deleted cliente id =${id}`)),
        catchError(this.handleError<Cliente>('deleteCliente'))
      )
  }

  editCliente(item: Cliente, id:number):Observable<Cliente>{
    return this.http.put<Cliente>(`${this.url}/${id}`,item, httpOptions)
      .pipe(
        tap(_ =>this.log(`updated cliente id=${id}`)),
        catchError(this.handleError<any>('updateCliente'))
      )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(message);
    this.messageService.add(`UsuarioService: ${message}`);
  }



}
