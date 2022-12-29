import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-bukregister',
  templateUrl: './bukregister.component.html',
  styleUrls: ['./bukregister.component.css']
})
export class BukregisterComponent implements OnInit {
uname="";
acno="";
pswd="";

  constructor (private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
register(){
//   alert('register clicked')
var uname =this.uname;
var acno= this.acno;
var pswd=this.pswd;

const result=this.ds.register(acno,uname,pswd)
if(result){
  alert('register successful')
  this.router.navigateByUrl('')
}
else{
  alert('User already registered')
}
}
}
