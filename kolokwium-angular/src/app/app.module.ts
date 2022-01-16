import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsDetailsComponent } from './authors-details/authors-details.component';
import { AuthorsDetailsFormComponent } from './authors-details/authors-details-form/authors-details-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsDetailsComponent,
    AuthorsDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
