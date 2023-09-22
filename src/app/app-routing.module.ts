import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDiscographyComponent } from './pages/page-discography/page-discography.component';
import { PageNewsComponent } from './pages/page-news/page-news.component';
import { PageAutobiographyComponent } from './pages/page-autobiography/page-autobiography.component';
import { PagePhotosComponent } from './pages/page-photos/page-photos.component';
import { HomeComponent } from './pages/page-home/page-home.component';


const routes: Routes = [
  {
    path: 'discography',
    component: PageDiscographyComponent
  },
  {
    path: 'news',
    component: PageNewsComponent
  },
  {
    path: 'autobiography',
    component: PageAutobiographyComponent
  },
  {
    path: 'photos',
    component: PagePhotosComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
