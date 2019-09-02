import { Component, OnInit } from '@angular/core';
import { PictureService } from 'services/picture.service';
// import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  constructor(private pictureService: PictureService) { 
     this.pictureService.getProfileInfo().subscribe(picture => {console.log(picture);
    });
  }
  ngOnInit() {
  }

}
