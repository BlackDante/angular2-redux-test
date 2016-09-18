import { Component } from '@angular/core';
import {Store} from "../app.store";

@Component({
    selector: 'app-list',
    template: `
      <ul class="list-group">
        <item *ngFor="let item of store.state.list" [item]="item"></item>
      </ul>
    `
})

export class ListComponent  {
  private store: Store;

  constructor(_store: Store) {
    this.store = _store;
  }
}
