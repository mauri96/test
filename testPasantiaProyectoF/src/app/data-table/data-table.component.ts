import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { MessageService } from '../message.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSort, MatTableDataSource, PageEvent, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-list-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  cliente: Cliente;
  displayedColumns: string[] = ['id', 'login', 'senha', 'email', 'fecha'];
  clientes = new MatTableDataSource(this.clientes);
  formCliente: FormGroup;
  id: number;

  constructor(
    private clienteService: ClienteService,
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ) {
    this.formCliente = this.initFormCliente();
  }

  ngOnInit(): void {
    this.listAll();
    
  }

  initFormCliente(): FormGroup {
    return this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required],
      email: ['',[Validators.required]],
      fecha: ['', [Validators.required]]
    });
  }

  clear() {
    this.formCliente = this.initFormCliente();
    this.cliente = null;
    this.id = null;
  }

  listAll() {
    this.clienteService.getClientes().subscribe(data => this.clientes = data)
  }
  mostrarCliente() {
    var div = document.getElementById('cliente');
    div.style.display = "block";
  }

  insert() {
    this.clienteService.setCliente(this.formCliente.value).subscribe(data => this.listAll())
    this.formCliente = this.initFormCliente();
    //  console.log('Operacion de insercion exitosa');
  }
  update(){

    this.clienteService.editCliente(this.formCliente.value,this.cliente.id).subscribe(data=>this.listAll())
    this.formCliente=this.initFormCliente();
    this.clear();
    
  }
  insertOrUpdate() {
    if (this.id != null || this.id > 0) {
      this.update();
    } else {
      this.insert();
    }
  }


}
