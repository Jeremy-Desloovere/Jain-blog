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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageDiscographyComponent,
    PageNewsComponent,
    PageAutobiographyComponent,
    PagePhotosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
