import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-content',
  templateUrl: './add-new-content.component.html',
  styleUrls: ['./add-new-content.component.scss']
})
export class AddNewContentComponent implements OnInit {

  navLinks = [
  {
    path: '/add-new-content/v',
    label: 'Video'
  },
  {
    path: '/add-new-content/s',
    label: 'Song'
  },
  ]

  constructor() {

  }

  ngOnInit() {
  }

}