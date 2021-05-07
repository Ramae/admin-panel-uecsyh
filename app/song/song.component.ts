import { Component, OnInit, Inject } from '@angular/core';
import SONGS from './mock-songs.json';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import CATEGORIES from '../categories/song-categories.json';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  songs = SONGS;
  displayedColumns = ['id', 'title', 'actions'];
  
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openEditor(video) {
    this.dialog.open(songEditorComponent, {
      data: video,
      height: '80vh',
      width: '70vw',
    });
  }

  onNew() {
    const video = {
      'id': '',
      'title': '',
      'categories': [],
      'thumbnails': {
        '400x207': '',
        '293x293': '',
        '295x144': '',
        '640x333': '',
        '341x307': ''
      },
      'synopsis': '',
      'abridged_cast': [{
        'name': ''
      }],
      'links': {
        'download': ''
      }
    };
    this.openEditor(video);
  }

  onEdit(video) {
    this.openEditor(video);
  }

  onDelete(song) {
    this.songs = _.reject(this.songs, (item) => { return item.id === song.id; });
  }
}

@Component({
  selector: 'app-song-editor',
  templateUrl: './song-editor.component.html',
  styleUrls: ['./song-editor.component.scss']
})
export class songEditorComponent implements OnInit {
  categories = CATEGORIES;

  constructor(@Inject(MAT_DIALOG_DATA) private video: any) {
  }

  onSubmit(song) {
  }

  addCast() {
    this.song.abridged_cast.push({name: ''});
  }

  ngOnInit() {
  }
}