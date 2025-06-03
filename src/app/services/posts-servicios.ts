import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsServicios {
  readonly API_URL = 'https://jsonplaceholder.typicode.com/posts';

  posts: any[];


  constructor(private http: HttpClient) { 
    this.posts = []
  }

  getPosts() {
    return this.http.get<any[]>(this.API_URL)
  }

  getPost(id: number){
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }

  postPosts(posts: any) {
    return this.http.post<any>(this.API_URL, posts)
  }

  deletePost(id: number) {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}
