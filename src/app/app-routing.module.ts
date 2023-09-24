import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDiscographyComponent } from './pages/page-discography/page-discography.component';
import { PageNewsComponent } from './pages/page-news/page-news.component';
import { PageAutobiographyComponent } from './pages/page-autobiography/page-autobiography.component';
import { PagePhotosComponent } from './pages/page-photos/page-photos.component';
import { HomeComponent } from './pages/page-home/page-home.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageForumComponent } from './pages/page-forum/page-forum.component';
import { PageDiscographyDetailsComponent } from './pages/page-discography-details/page-discography-details.component';
import { PageNotfoundComponent } from './pages/page-notfound/page-notfound.component';


const routes: Routes = [
  {
    path: 'discography',
    component: PageDiscographyComponent,
  },
  {
    path: 'discography/:id',
    component: PageDiscographyDetailsComponent,
  },
  {
    path: 'news',
    component: PageNewsComponent,
  },
  {
    path: 'autobiography',
    component: PageAutobiographyComponent,
  },
  {
    path: 'photos',
    component: PagePhotosComponent,
  },
  {
    path: 'contact',
    component: PageContactComponent,
  },
  {
    path: 'forum',
    component: PageForumComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: PageNotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
