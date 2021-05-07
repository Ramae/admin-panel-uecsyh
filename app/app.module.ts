import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MaterialComponents } from './material.components';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { VideosComponent, VideoEditorComponent } from './videos/videos.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { NewCatDialogComponent } from './new-cat-dialog/new-cat-dialog.component';
import { AddNewContentComponent } from './add-new-content/add-new-content.component';
import { SongComponent, songEditorComponent } from './song/song.component';
import appRoutes from './app.routes';
import { AddNewCategoryComponent } from './add-new-category/add-new-category.component';
import { AddNewSongComponent } from './add-new-song/add-new-song.component';
import { AddNewVideoComponent } from './add-new-video/add-new-video.component';
import { AddNewVideoCategoryComponent } from './add-new-video-category/add-new-video-category.component';
import { AddNewSongCategoryComponent } from './add-new-song-category/add-new-song-category.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MaterialComponents, RouterModule.forRoot(
    appRoutes)],
  entryComponents: [CategoriesComponent, NewCatDialogComponent, VideoEditorComponent, songEditorComponent],
  declarations: [AppComponent, HomeComponent, HeaderComponent, SidenavComponent, MainContentComponent, VideosComponent, CategoriesComponent, UsersComponent, NewCatDialogComponent, AddNewContentComponent, SongComponent, AddNewCategoryComponent, AddNewSongComponent, AddNewVideoComponent, AddNewVideoCategoryComponent, AddNewSongCategoryComponent, VideoEditorComponent, songEditorComponent, GridComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
