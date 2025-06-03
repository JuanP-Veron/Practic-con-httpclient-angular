import { Component, OnInit } from '@angular/core';
import { PostsServicios } from '../../services/posts-servicios';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  imports: [RouterLink],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css'
})
export class PostsList implements OnInit{
  constructor(public postsServicios: PostsServicios) {

  }
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
  this.postsServicios.getPosts().subscribe({
    next: (data) => {
      this.postsServicios.posts = data;
    },
    error: (e) => {
      console.error(e);
    }
  })
  }

  deletePost(id: number) {
    this.postsServicios.deletePost(id).subscribe({
      next: (data: any[]) => {
        console.log('Post eliminado correctamente:', data);
        // Actualizar la lista local de posts
        this.postsServicios.posts = this.postsServicios.posts.filter(post => post.id !== id);
      },
      error: (e: any) => {
        console.error(e);
      }
    });
  }
}
