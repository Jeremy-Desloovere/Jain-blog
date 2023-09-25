import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageDiscographyComponent } from './pages/page-discography/page-discography.component';
import { PageNewsComponent } from './pages/page-news/page-news.component';
import { PageAutobiographyComponent } from './pages/page-autobiography/page-autobiography.component';
import { PagePhotosComponent } from './pages/page-photos/page-photos.component';
import { HomeComponent } from './pages/page-home/page-home.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageForumComponent } from './pages/page-forum/page-forum.component';
import { PageNotfoundComponent } from './pages/page-notfound/page-notfound.component';
import { PageDiscographyDetailsComponent } from './pages/page-discography-details/page-discography-details.component';
import { SocialComponent } from './components/social/social.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageDiscographyComponent,
    PageNewsComponent,
    PageAutobiographyComponent,
    PagePhotosComponent,
    HomeComponent,
    PageContactComponent,
    PageForumComponent,
    PageNotfoundComponent,
    PageDiscographyDetailsComponent,
    SocialComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
