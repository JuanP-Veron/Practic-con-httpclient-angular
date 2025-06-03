import { TestBed } from '@angular/core/testing';

import { PostsServicios } from './posts-servicios';

describe('PostsServicios', () => {
  let service: PostsServicios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsServicios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
