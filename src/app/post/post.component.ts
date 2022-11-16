
import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post';
import{Comment} from '../comment'

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
lstcomments:Comment[] | undefined;
lstPost:Post[] | undefined;
objPost:Post | undefined;
objPut:Post | undefined;
objPatch:Post | undefined;
objDelete:Post | undefined;
message="";
constructor(private _p:PostService) { }

  ngOnInit(): void {
   this._p.getcomment().subscribe(
     data=>{
       this.lstcomments=data;
     },error=>{
       alert('An unexpected error occur');
       console.log(error);
     });
 
   this._p.getcommentsbyparameter().subscribe(
       data=>{
         this.lstPost=data;
       }
   )
   var opost=new Post();
   opost.body="Hello World";
   opost.title="Lovely Professional University";
   opost.userId=5;
   this._p.post(opost).subscribe(
     data=>{
       this.objPost=data;
     },error=>{
      alert('An unexpected error occur');
      console.log(error);
    }

   )
   this._p.put(opost).subscribe(
     data=>{
       this.objPut=data;
     } ,error=>{
      alert('An unexpected error occur');
      console.log(error);
    }
   )
   opost.title="Lovely Professional University patched data";
   this._p.patch(opost).subscribe(
     data=>{
          this.objPatch=data;
     },error=>{
      alert('An unexpected error occur');
      console.log(error);
    }
   )
   this._p.delete().subscribe(
    data=>{
         this.message="resource deleted successfully";
    },(error)=>{
      if(error.status==404){
     alert('this post does not exist');
     console.log(error);
    }
    else{
      alert('this post has already been deleted');
      console.log(error);
    }})
}}

