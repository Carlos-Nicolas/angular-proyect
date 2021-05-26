import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { NavComponent } from './nav/nav.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddComentComponent } from './add-coment/add-coment.component';
import { ListPostComponent } from './list-post/list-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AppService } from './app-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NavComponent,
    PublicacionComponent,
    AddPostComponent,
    AddComentComponent,
    ListPostComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule { }
