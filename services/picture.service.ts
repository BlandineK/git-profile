import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';  
@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private username:string;
  private clientid:'459c220d37570c29aa28';
  private clientsecret:'dd02d8b3ce547564cb08903dce92a466e18c8b63';
  
  constructor(private http:HttpClient) { 
    console.log("The app is now ready");
    this.username = 'BlandineK';
  }
  getProfileInfo(){
    return this.http.get ("https://api.github.com/users/BlandineK"); 
  }
}
