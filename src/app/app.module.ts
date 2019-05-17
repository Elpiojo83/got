import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import {FilterStringPipe} from './shared/pipes/filter-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ActorListComponent,
    FilterStringPipe
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
