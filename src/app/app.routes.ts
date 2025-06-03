import { Routes } from '@angular/router';
import { PostsList } from './paginas/posts-list/posts-list';
import { PostsDetails } from './paginas/posts-details/posts-details';
import { PostForm } from './paginas/post-form/post-form';

export const routes: Routes = [
    {path: '', component: PostsList},
{path: 'post/:id', component: PostsDetails},
{path: 'form', component: PostForm} 

];
