import { Component, OnInit } from '@angular/core';
import CATEGORIES from '../categories/song-categories.json';
import _ from 'lodash';

@Component({
  selector: 'app-add-new-song-category',
  templateUrl: './add-new-song-category.component.html',
  styleUrls: ['./add-new-song-category.component.scss']
})
export class AddNewSongCategoryComponent implements OnInit {

  displayedColumns = ['id', 'name'];
  songCategories = CATEGORIES;

  constructor() { }

  ngOnInit() {
  }

  _onEdit(video) {
    // this.openEditor(video);
    console.log('edit me');
  }

  _onDelete(video) {
    this.songCategories = _.reject(this.songCategories, (item) => { return item.id === video.id; });
  }

}