import { Component, OnInit } from '@angular/core';
import NewCatDialogComponent from '../new-cat-dialog/new-cat-dialog.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

 navLinks = [
  {
    path: '/categories/v',
    label: 'Video'
  },
  {
    path: '/categories/s',
    label: 'Song'
  },
  ];

  constructor() { }

  ngOnInit() {
  }

}