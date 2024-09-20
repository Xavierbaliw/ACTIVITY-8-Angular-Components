
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {DisplayhelloworldComponent} from "./component/displayhelloworld/displayhelloworld.component";
import {ShowhellobuttonComponent} from "./component/showhellobutton/showhellobutton.component";
import {DisplaynameComponent} from "./component/displayname/displayname.component";
import {CounterComponent} from "./component/counter/counter.component";
import {SimpleformComponent} from "./component/simpleform/simpleform.component";
import {UserageComponent} from "./component/userage/userage.component";
import {UsergreetingComponent} from "./component/usergreeting/usergreeting.component";
import {CalculatorComponent} from "./component/calculator/calculator.component";


const routes: Routes = [
  {path: 'displayhelloworld', component: DisplayhelloworldComponent},
  {path: 'showhellobutton', component: ShowhellobuttonComponent},
  {path: 'displayname', component: DisplaynameComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'simpleform', component: SimpleformComponent},
  {path: 'userage', component: UserageComponent},
  {path: 'usergreeting', component: UsergreetingComponent},
  {path: 'calculator', component: CalculatorComponent},




]

@NgModule ({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule

  ],
  declarations:[
    AppComponent,
    DisplayhelloworldComponent,
    ShowhellobuttonComponent,
    DisplaynameComponent,
    CounterComponent,
    SimpleformComponent,
    UserageComponent,
    UsergreetingComponent,
    CalculatorComponent,
  ],

  providers:[

  ],

  bootstrap:[
    AppComponent
  ]
})

export class AppModule{}
