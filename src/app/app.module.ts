import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {SearchService} from './services/search.service';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { FormsModule } from '@angular/forms';
import { TimePipe } from './pipes/time.pipe';
import {Routes, RouterModule} from '@angular/router';
import { VideoComponent } from './components/video/video.component';

const routes:Routes=[
  {path: 'video/:id', component: VideoComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    DomseguroPipe,
    TimePipe,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
