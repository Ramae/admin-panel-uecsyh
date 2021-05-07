import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-song',
  templateUrl: './add-new-song.component.html',
  styleUrls: ['./add-new-song.component.scss']
})
export class AddNewSongComponent implements OnInit {

regiForm: FormGroup;
  title: string = '';
  description: string = '';
  category: string = '';
  categoryList = ['Bollywood', 'Popular', 'Educational', 'Music', 'Hollywood'];

  // Executed When Form Is Submitted  
  onFormSubmit(form: NgForm) {
    console.log(form);
  }

ngOnInit(): void {
  this.regiForm = new FormGroup({
    'title': new FormControl(this.title, [
      Validators.required,
      Validators.minLength(4)
    ]),
    'description': new FormControl(this.description),
    'category': new FormControl(this.category, Validators.required)
  });
}

}