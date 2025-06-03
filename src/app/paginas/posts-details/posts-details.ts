import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsServicios } from '../../services/posts-servicios';

@Component({
  selector: 'app-posts-details',
  imports: [],
  templateUrl: './posts-details.html',
  styleUrl: './posts-details.css'
})
export class PostsDetails implements OnInit{

  selectPost: any; 

  constructor(private route: ActivatedRoute, public postsServicios: PostsServicios) {

  }
  ngOnInit(): void {
  const id = Number(this.route.snapshot.params['id']);
  this.getPost(id);
  }

  getPost(id: number) {
        this.postsServicios.getPost(id).subscribe({
      next: (data) => {
        this.selectPost = data;
      },
      error: (e) => {
        console.log(e);
      }
    })
  }
}
