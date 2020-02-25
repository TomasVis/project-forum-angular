import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../components/form/post';

@Injectable()
export class ArticleDataService {
  constructor(private http: HttpClient) { }

  getPostsUrl = 'http://localhost:3000/posts'
  getPostUrl = 'http://localhost:3000/get-post'
  deletePostUrl = 'http://localhost:3000/delete-post'
  updatePostUrl = 'http://localhost:3000/update-post'

getPosts() {
    return this.http.get(this.getPostsUrl);
  }
getPost(id:string) {
  //Post
    return this.http.get<Post>(this.getPostUrl+id);
  }
deletePost(id:string) {
    return this.http.get(this.deletePostUrl+id);
}
updatePost(id:string, body:Post) {
    return this.http.post(this.updatePostUrl+id, body);
}

}

