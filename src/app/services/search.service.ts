import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private KEY= 'AIzaSyDe_nwEJAT_CAFqJ2JAU1pJ8NFDU8qWW6E';
  
  constructor(private http: HttpClient) {
  
   }

  getVideo(word: string){
  
    let max_results = 10;
    console.log(word)
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?q=${word}&part=snippet&key=${this.KEY}&maxResults=${max_results}`);

  }

  getVideoDetails(id){
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${this.KEY}`);
  }
}
