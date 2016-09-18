import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {Store} from "./app.store";
import {APP_ACTIONS} from "./actions/app.actions";
import {APP_COMPONENTS} from "./components/app.components";


@NgModule({
  declarations: [AppComponent, ...APP_COMPONENTS],
  imports     : [BrowserModule, HttpModule],
  providers   : [
    {
      provide : LocationStrategy,
      useClass: HashLocationStrategy
    }, Store, ...APP_ACTIONS],
  bootstrap   : [AppComponent]
})

export class AppModule {}
