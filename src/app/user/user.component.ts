import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {User} from './user';
import { HttpHeaders } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgForm } from '@angular/forms';

//const headers = new Headers({ 'Content-Type': 'application/json' });
//const options = new RequestOptions({ headers: headers });
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usersUrl="http://localhost:3000/helloworld";
  headers=new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });
  user=new User();
  username:string;
  address:string;
  constructor(private http: Http) { }
  Post=(url:string,user:User)=>{
    this.headers = new Headers();
    let options = new RequestOptions({ headers: this.headers, method: "post"}); 
    return this.http.post(
        url,
        user,
        options
    );
}
  onSubmission(){
    this.user.name=this.username,
    this.user.address=this.address,
    console.log("inside submission"+this.user.name+" "+this.user.address),
    this.http.post(this.usersUrl,this.user,this.options)
    .subscribe((data) => {console.log(data)})
  }

  ngOnInit() {
  }
  
  

  
}

