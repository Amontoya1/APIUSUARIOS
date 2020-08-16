import { WebpostsService } from './../../services/webposts.service';
import { Posts } from './posts.model';
import { Routes } from '@angular/router';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  Posts$: any =[]

  constructor( private WebpostsService: WebpostsService) {}

  ngOnInit() {
    return this.WebpostsService.getPosts()
    .subscribe(data => this.Posts$ = data)
  }

}
