import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-buklogin',
  templateUrl: './buklogin.component.html',
  styleUrls: ['./buklogin.component.css']
})
export class BukloginComponent implements OnInit {

  pswd: any;
  acno:any;


//database

// userDetails:any={
//   1000:{acno:1000,username:'amal',password:1000,email:'jemsiyapn@gmail.com'},
//   1001:{acno:1001,username:'ajl',password:1001,email:'jemsi@gmail.com'},
//   1002:{acno:1002,username:'athul',password:1002,email:'jiyapn@gmail.com'},
// }




  constructor(private ds:DataService,private router:Router) {}

  ngOnInit(): void {
  }


  login(){
    // alert('login clicked');

    var pswd=this.pswd;
    var acno=this.acno;
    var userDetails=this.ds.userDetails
    const result = this.ds.login(acno,pswd)
    if(result){
     alert('login successful')
     this.router.navigateByUrl('store')
 }
//       if(acno in userDetails){
//         if(pswd==userDetails[acno]['password']){
//           alert('login successful')
//           this.router.navigateByUrl('store')
//
//         }}}}

else{
  alert('incorrect details')
}
}



  }



