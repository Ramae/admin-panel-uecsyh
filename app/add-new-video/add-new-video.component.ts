import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-video',
  templateUrl: './add-new-video.component.html',
  styleUrls: ['./add-new-video.component.scss']
})
export class AddNewVideoComponent implements OnInit {

  // regiForm: FormGroup;
  // title: string = '';
  // description: string = '';
  // category: string = '';
  movie = {
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
  categoryList = [{
    id: 1,
    name:'Bollywood'}, {
    id: 2,
    name:'Popular'}, {
    id: 3,
    name:'Music'}, {
    id: 4,
    name:'Hollywood'}, {
    id: 5,
    name:'Regional'}];

  // Executed When Form Is Submitted  
  onFormSubmit(form: NgForm) {
    console.log(form);
  }
  onSubmit(movie) {
  }

  addCast() {
    this.movie.abridged_cast.push({name: ''});
  }

// ngOnInit(): void {
//   this.regiForm = new FormGroup({
//     'title': new FormControl(this.title, [
//       Validators.required,
//       Validators.minLength(4)
//     ]),
//     'description': new FormControl(this.description),
//     'category': new FormControl(this.category, Validators.required)
//   });
// }

  ngOnInit() {
  }

}