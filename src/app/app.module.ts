import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import {FilterStringPipe} from './shared/pipes/filter-string.pipe';
import { AuthComponent } from './components/auth/auth.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    ActorListComponent,
    FilterStringPipe,
    AuthComponent,
    SearchComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FilterStringPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
