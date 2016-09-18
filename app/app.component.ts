import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector     : 'app',
  encapsulation: ViewEncapsulation.None,
  template     : `
    <div class="container">
      <h1 class="page-header"> Angular & Redux </h1>

      <add-form></add-form>

      <app-list></app-list>

    </div>
  `,
})

export class AppComponent {}
