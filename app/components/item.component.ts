import {Component} from "@angular/core";
import {ListActions} from "../actions/list.actions";

@Component({
  selector: 'item',
  inputs  : ['item', 'completed'],
  template: `
    <li class="list-group-item">
        <span *ngIf="item.completed" class="strikethrough">{{ item.name }}</span>
        <span *ngIf="!item.completed">{{ item.name }}</span>
        <button class="remove"
                (click)="list.remove(item)">X</button>
        <button class="close"
                (click)="list.close(item)">Z</button>
    </li>
    `
})
export class ItemComponent {
  private list:ListActions;
  private completed:boolean;

  constructor(_list:ListActions) {
    this.list = _list;
  }

  getCompleted() : boolean {
    return this.completed;
  }

  complete() {
    this.completed = true;
  }
}
