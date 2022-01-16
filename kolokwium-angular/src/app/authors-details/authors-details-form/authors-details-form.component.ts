import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Author } from 'src/app/shared/author.model';
import { AuthorsService } from 'src/app/shared/authors.service';

@Component({
  selector: 'app-authors-details-form',
  templateUrl: './authors-details-form.component.html',
  styles: [
  ]
})
export class AuthorsDetailsFormComponent implements OnInit {

  constructor(public service:AuthorsService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.service.postAuthors().subscribe(
      res => {
        this.resetForm(form);
      },
      err => { console.log(err); }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Author();
  }
}
