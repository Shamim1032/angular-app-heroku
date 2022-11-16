import { Injectable } from '@angular/core';
import {Post} from './post';
import {HttpClient,HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from './comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getcomment():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  };
  getcommentsbyparameter():Observable<any>{
    let params1=new HttpParams().set("userId","2");  
    return this.http.get('https://jsonplaceholder.typicode.com/posts',{params:params1})
  };
  
  post(opost:Post):Observable<any>{
    return this.http.post('https://jsonplaceholder.typicode.com/posts',opost);
  }
    
  put(opost:Post):Observable<any>{
  return this.http.put("https://jsonplaceholder.typicode.com/posts/1",opost);
  };
    
  patch(opost:Post):Observable<any>{
    return this.http.patch("https://jsonplaceholder.typicode.com/posts/1",opost);
    };
	
  delete():Observable<any>{
      return this.http.delete("https://jsonplaceholder.typicode.com/posts/1");
      };
}

