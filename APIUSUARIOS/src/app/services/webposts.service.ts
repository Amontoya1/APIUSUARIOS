import { Posts } from '../components/posts/posts.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebpostsService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Posts[]>(this.apiUrl)
  }
}
