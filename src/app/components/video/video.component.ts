import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  video:any = {};
  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.video = this.searchService.getVideoDetails( params['id'] ).subscribe(
          response=>{
          
           this.video = response['items'][0];
           console.log(this.video);
          }, 
          error =>{
            console.log(<any>error);
          }
      );

  });



  }

}
