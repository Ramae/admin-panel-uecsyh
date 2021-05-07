import { Routes, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { VideosComponent } from './videos/videos.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { NewCatDialogComponent } from './new-cat-dialog/new-cat-dialog.component';
import { AddNewContentComponent } from './add-new-content/add-new-content.component';
import { SongComponent } from './song/song.component';
import { AddNewCategoryComponent } from './add-new-category/add-new-category.component';
import { AddNewSongComponent } from './add-new-song/add-new-song.component';
import { AddNewVideoComponent } from './add-new-video/add-new-video.component';
import { AddNewVideoCategoryComponent } from './add-new-video-category/add-new-video-category.component';
import { AddNewSongCategoryComponent } from './add-new-song-category/add-new-song-category.component';

const appRoutes: Routes = [
  { path: 'videos', component: VideosComponent },
  { path: 'song', component: SongComponent },
  { path: 'categories', component: CategoriesComponent, children: [
  { path: 'c', component: AddNewCategoryComponent },
  { path: 'v', component: AddNewVideoCategoryComponent },
  { path: 's', component: AddNewSongCategoryComponent },
  { path: '', redirectTo: 'v', pathMatch: 'full'}]},
  { path: 'users', component: UsersComponent},
  { path: 'add-new-content', component: AddNewContentComponent, children: [
  { path: 'c', component: AddNewCategoryComponent },
  { path: 'v', component: AddNewVideoComponent },
  { path: 's', component: AddNewSongComponent },
  { path: '', redirectTo: 'v', pathMatch: 'full'}]
   },
];

export default appRoutes;