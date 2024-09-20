
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
import {TextlengthComponent} from "./component/textlength/textlength.component";
import {CurrencyconverterComponent} from "./component/currencyconverter/currencyconverter.component";
import {EvenoddcheckerComponent} from "./component/evenoddchecker/evenoddchecker.component";
import {WordreverserComponent} from "./component/wordreverser/wordreverser.component";
import {ShowdateComponent} from "./component/showdate/showdate.component";
import {ShowusernameComponent} from "./component/showusername/showusername.component";
import {MultiplicationtableComponent} from "./component/multiplicationtable/multiplicationtable.component";
import {SimpleloginComponent} from "./component/simplelogin/simplelogin.component";
import {FahrenheittocelsiusComponent} from "./component/fahrenheittocelsius/fahrenheittocelsius.component";
import {BookmarklistComponent} from "./component/bookmarklist/bookmarklist.component";
import {CharactercounterComponent} from "./component/charactercounter/charactercounter.component";
import {PalindromecheckerComponent} from "./component/palindromechecker/palindromechecker.component";


const routes: Routes = [
  {path: 'displayhelloworld', component: DisplayhelloworldComponent},
  {path: 'showhellobutton', component: ShowhellobuttonComponent},
  {path: 'displayname', component: DisplaynameComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'simpleform', component: SimpleformComponent},
  {path: 'userage', component: UserageComponent},
  {path: 'usergreeting', component: UsergreetingComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'textlength', component: TextlengthComponent},
  {path: 'currencyconverter', component: CurrencyconverterComponent},
  {path: 'evenoddchecker', component: EvenoddcheckerComponent},
  {path: 'wordreverser', component: WordreverserComponent},
  {path: 'showdate', component: ShowdateComponent},
  {path: 'showusername', component: ShowusernameComponent},
  {path: 'multiplicationtable', component: MultiplicationtableComponent},
  {path: 'simplelogin', component: SimpleloginComponent},
  {path: 'fahrenheittocelsius', component: FahrenheittocelsiusComponent},
  {path: 'bookmarklist', component: BookmarklistComponent},
  {path: 'charactercounter', component: CharactercounterComponent},
  {path: 'palindromechecker', component: PalindromecheckerComponent},




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
    TextlengthComponent,
    CurrencyconverterComponent,
    EvenoddcheckerComponent,
    WordreverserComponent,
    ShowdateComponent,
    ShowusernameComponent,
    MultiplicationtableComponent,
    SimpleloginComponent,
    FahrenheittocelsiusComponent,
    BookmarklistComponent,
    CharactercounterComponent,
    PalindromecheckerComponent,
  ],

  providers:[

  ],

  bootstrap:[
    AppComponent
  ]
})

export class AppModule{}
