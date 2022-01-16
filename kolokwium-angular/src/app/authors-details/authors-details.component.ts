import { Component, OnInit } from '@angular/core';
import { Author } from '../shared/author.model';
import { AuthorsService } from '../shared/authors.service';

@Component({
  selector: 'app-authors-details',
  templateUrl: './authors-details.component.html',
  styles: [
  ]
})
export class AuthorsDetailsComponent implements OnInit {

  constructor(public service: AuthorsService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

  editForm(selectedRecord: Author) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
}
