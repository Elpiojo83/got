import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';
import {Actor} from '../../models/Actor';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {

  constructor(private appService: AppService) { }

  actors: Actor[] = [];
  selectedActor: Actor = {firstName: 'John', lastName: 'Doe', maximized: false, bio: 'lorem'};

  filter = '';
  hideOthers: boolean;
  isMaximized: boolean;

  ngOnInit() {
    this.actors = this.appService.getActors();
  }

  actorImage(actor: Actor): string {
    if (actor.firstName) {
      const imageBase = 'https://www.david-krachler.com/got/';
      const imageUrl = actor.firstName.toLocaleLowerCase() + '-' + actor.lastName.toLocaleLowerCase() + '.jpg';
      return imageBase + imageUrl;
    } else {
      return 'https://placehold.it/800/600';
    }
  }

  max(event, index: number) {
    this.selectedActor = this.actors[index];
    this.isMaximized = !this.isMaximized;
  }

  closeActor(index) {
    // this.selectedActor = null;
    this.isMaximized = !this.isMaximized;
  }

}
