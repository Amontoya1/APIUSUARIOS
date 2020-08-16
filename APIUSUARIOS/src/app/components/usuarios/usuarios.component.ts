import { WebapiService } from './../../services/webapi.service';
import { Users } from './users.model';
import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  Users$: any = []

  constructor( private WebapiService: WebapiService)  {}

  ngOnInit()  {
    return this.WebapiService.getUsers()
    .subscribe(data => this.Users$ = data)
  }

}
