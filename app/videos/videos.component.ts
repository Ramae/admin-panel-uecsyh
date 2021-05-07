import { Component, OnInit, Inject } from '@angular/core';
import VIDEOS from './mock-videos.json';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material';
import CATEGORIES from '../categories/video-categories.json';
import _ from 'lodash';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos = VIDEOS;
  displayedColumns = ['id', 'title'];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openEditor(video) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = video;
    dialogConfig.height = '80vh';
    dialogConfig.width= '70vh';

    this.dialog.open(VideoEditorComponent, dialogConfig);
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

  _onEdit(video) {
    this.openEditor(video);
  }

  _onDelete(video) {
    this.videos = _.reject(this.videos, (item) => { return item.id === video.id; });
  }

}

@Component({
  selector: 'app-video-editor',
  templateUrl: './video-editor.component.html',
  styleUrls: ['./video-editor.component.scss']
})
export class VideoEditorComponent implements OnInit {
  categories = CATEGORIES;

  constructor( @Inject(MAT_DIALOG_DATA) private video: any) {
  }

  onSubmit(video) {
  }

  addCast() {
    this.video.abridged_cast.push({ name: '' });
  }

  ngOnInit() {
  }
}