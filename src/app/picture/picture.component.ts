import { Component, OnInit } from '@angular/core';
import { PictureService } from 'services/picture.service';
// import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
 picture:any; 
 repos:any;
 gitUsersProfile:string;
  constructor(private pictureService: PictureService) { 
}
findProfile(){
 this.pictureService.updateProfile(this.gitUsersProfile);this.pictureService.getProfileInfo().subscribe(picture => {console.log(picture);
  this.picture = picture;
  
 });
 this.pictureService.getProfileRepos().subscribe(repos => {console.log(repos)
  this.repos = repos;
  }); 
 
}
  ngOnInit() {
    
  }

}
