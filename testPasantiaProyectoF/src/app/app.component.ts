import { Component,OnInit } from '@angular/core';
import {Cliente} from '../app/cliente';
import { ClienteService } from '../app/cliente.service';
import { MessageService } from '../app/message.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  showFiller=false;
    
  id:number;
  idSearch:number;
  clienteRes:Cliente;
  loginSearch:String;
  cliente:Cliente;
  clientes:Array<Cliente>;
  formCliente: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ){
    this.formCliente = this.initFormCliente();
  }

  ngOnInit():void{
    this.listAll();
  }

  listAll(){
    this.clienteService.getClientes().subscribe(data=>this.clientes=data)
  }

  insert(){
    this.clienteService.setCliente(this.formCliente.value).subscribe(data =>this.listAll())
    this.formCliente=this.initFormCliente();
  //  console.log('Operacion de insercion exitosa');
  }

  update(){
    this.clienteService.editCliente(this.formCliente.value,this.cliente.id).subscribe(data=>this.listAll())
    this.formCliente=this.initFormCliente();
    this.clear();
 //   console.log('Actualizado');
  }

insertOrUpdate() {
    if (this.id != null || this.id > 0) {
      this.update();
    } else {
      this.insert();
    }
  }

  delete(id:number){
    this.clienteService.deleteCliente(id).subscribe(data=>this.listAll())
//console.log('Eliminado ');
  }

  findById(id:number){
    this.clienteService.getClienteId(id).subscribe(data=>this.clienteRes=data as Cliente)
    this.idSearch=null;
  //  console.log('ENCONTRAR POR ID');
  }

  findByLog(log:String){
    this.clienteService.getClienteLog(log).subscribe(data=>this.clienteRes=data as Cliente)
    this.loginSearch=null;
//    console.log('ENCONTRAR POR LOGIN');
  }

  mostrarCliente(){
    var div =document.getElementById('cliente');
    div.style.display="block";
  }





  initFormCliente(): FormGroup {
    return this.formBuilder.group({
      login: ['',Validators.required],
      senha: ['',Validators.required],
      email: ['',Validators.required],
      fecha: ['',[Validators.required]]
    });
    
  }

  clear() {
    this.formCliente = this.initFormCliente();
    this.cliente = null;
    this.id = null;
  }
}





