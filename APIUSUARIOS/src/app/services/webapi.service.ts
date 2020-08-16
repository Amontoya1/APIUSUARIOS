import { Users } from '../components/usuarios/users.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<Users[]>(this.apiUrl)
  }
}

