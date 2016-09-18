import {Component} from "@angular/core";
import {ListActions} from "../actions/list.actions";
import {Store} from "../app.store";

@Component({

  selector: 'add-form',
  template: `
  <div class="form-group">
        <input type="text"
               class="form-control"
               #input
               (keydown.enter)="onEnter(input)"
               placeholder="Add Item">
      </div>
    `
})
export class AddFormComponent {

  private list:ListActions;

  constructor(_list:ListActions, _store: Store) {
    this.list  = _list;
  }

  onEnter(input) {
    let dto = {
        name: input.value,
        completed: false
    };

    this.list.add(dto);
    input.value = '';
  }
}
