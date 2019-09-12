import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private httpClient: HttpClient) { }

  getPets(){
    return this.httpClient.get('http://10.125.124.186:9966/petclinic/api/pets')
  }

  postPet(input){
    return this.httpClient.post('http://10.125.124.186:9966/petclinic/api/pets', input)
  }

  getPosts(){
    return this.httpClient.get('http://jsonplaceholder.typicode.com/posts')
  }

  getPost(id){
    return this.httpClient.get('http://jsonplaceholder.typicode.com/posts/' + id)
  }

  postPost(post){
    return this.httpClient.post('http://jsonplaceholder.typicode.com/posts', post)
  }

  putPost(post){
    return this.httpClient.put('http://jsonplaceholder.typicode.com/posts/' + post.id , post)
  }

  deletePost(postId){
    return this.httpClient.delete('http://jsonplaceholder.typicode.com/posts/' + postId)
  }
}
