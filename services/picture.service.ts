import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';  
@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private gitUsersProfile:string;
  private clientsecret='7f81812040cdff557f4ba6bac814068348490b9c';
  
  constructor(private http:HttpClient) { 
    console.log("The app is now ready");
    this.gitUsersProfile = 'BlandineK';
  }
  getProfileInfo(){
    return this.http.get ("https://api.github.com/users/" + this.gitUsersProfile + "?access_token=" + this.clientsecret) 
  }
  getProfileRepos(){
    return this.http.get ("https://api.github.com/users/" + this.gitUsersProfile + "/repos?access_token=" + this.clientsecret); 
  }
 updateProfile(gitUsersProfile:string){
   this.gitUsersProfile = gitUsersProfile;
   
 } 
}
