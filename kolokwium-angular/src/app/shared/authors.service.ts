import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from './author.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { 
  }

  readonly baseURL = 'http://localhost:5000/api/Autorzy'
  formData: Author = new Author();
  list:any[];

  postAuthors(){
    return this.http.post(this.baseURL,this.formData);
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.baseURL);
  }
  refreshList() {
    this.getAuthors().subscribe(
      res => this.list = res
    )
  }


}

