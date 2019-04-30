import { Component } from '@angular/core';
import {SearchService} from './services/search.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zeustest';
  name: string = '';
  videos:any;

  constructor(private searchService: SearchService){
    let now = moment();
    console.log('hello world', now.format()); // add this 3 of 4
    console.log(now.add(7, 'days').format()); // add this 4of 4
    
   /* this.searchService.getVideo('perro').subscribe(video=>{
      console.log(video);
      this.searchService.getVideoDetails('UOxkGD8qRB4').subscribe(details=>{
        console.log(details);
      })
    });*/

    
  }


  search(){
    if(this.name != ""){
      this.searchService.getVideo(this.name).subscribe(video=>{
      this.videos = video['items'];
      console.log(this.videos);
      });
    }
  }


}
