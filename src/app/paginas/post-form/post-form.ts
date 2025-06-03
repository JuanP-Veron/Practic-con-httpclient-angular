import { Component } from '@angular/core';
import { PostsServicios } from '../../services/posts-servicios';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './post-form.html',
  styleUrl: './post-form.css'
})
export class PostForm {

  postForm: FormGroup;
  userId: FormControl;
  id: FormControl;
  title: FormControl;
  body: FormControl;
  address: FormGroup;

  constructor(public postServicio: PostsServicios) {
    this.id = new FormControl('');
    this.userId = new FormControl('');
    this.title = new FormControl('');
    this.body = new FormControl('');
    this.address = new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
    });

    this.postForm = new FormGroup({
      id: this.id,
      userId: this.userId,
      title: this.title,
      body: this.body,
      address: this.address
    })
  }

postValor() {
  const nuevoPost = this.postForm.value;

  this.postServicio.postPosts(nuevoPost).subscribe({
    next: (data) => {
      console.log('Post creado correctamente:', data);
      // Agregar a la lista local de posts
      this.postServicio.posts.unshift(nuevoPost); // o push(nuevoPost);
      this.postForm.reset();
    },
    error: (e) => {
      console.error('Error creando el post:', e);
    }
  });
}

}

