import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() { }

//database

userDetails:any={
  1000:{acno:1000,username:'amal',password:1000,email:'jemsiyapn@gmail.com'},
  1001:{acno:1001,username:'ajl',password:1001,email:'jemsi@gmail.com'},
  1002:{acno:1002,username:'athul',password:1002,email:'jiyapn@gmail.com'},
}

register(acno:any,password:any,username:any){
  let userDetails=this.userDetails

 if(acno in this.userDetails){
  return false
 }

 else{
  userDetails[acno]={
    acno,
    username,
    password,
  }
  console.log(userDetails)
  return true;
 }
}
login(acno:any,pswd:any){
   let userDetails = this.userDetails;
   if(acno in userDetails){

    if(pswd==userDetails[acno]['password']){
     return true;
    }
    else{
      return false;
    }
   }
   else{
    return false;
   }
}
// login(acno:any,pswd:any){
//   let userDetails= this.userDetails;
//   if(acno in userDetails){
//     if(pswd==userDetails[acno]['password']){
//       return true;
//     }
//     else{
//       return false;
//     }
//   }
//   else{
//     return false;
//   }
// }

}
