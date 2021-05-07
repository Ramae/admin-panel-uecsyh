import { Component, OnInit } from '@angular/core';
import CATEGORIES from '../categories/video-categories.json';
import _ from 'lodash';

@Component({
  selector: 'app-add-new-video-category',
  templateUrl: './add-new-video-category.component.html',
  styleUrls: ['./add-new-video-category.component.scss']
})
export class AddNewVideoCategoryComponent implements OnInit {
  displayedColumns = ['id', 'name'];
  videoCategories = CATEGORIES;

  constructor() { }

  ngOnInit() {
  }

    _onEdit(video) {
    // this.openEditor(video);
    console.log('edit me');
  }

  _onDelete(video) {
    this.videoCategories = _.reject(this.videoCategories, (item) => { return item.id === video.id; });
  }

}