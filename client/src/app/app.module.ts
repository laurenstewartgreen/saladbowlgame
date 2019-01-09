import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { CardInputComponent } from './card-input/card-input.component';
import { RulesComponent } from './rules/rules.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { TeamInputComponent } from './team-input/team-input.component';
import { TurnComponent } from './turn/turn.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'card-input',
    component: CardInputComponent
  },
  {
    path: 'rules',
    component: RulesComponent
  },
  {
    path: 'team-input',
    component: TeamInputComponent
  },
  {
    path: 'turn',
    component: TurnComponent
  },
  {
    path: 'scoreboard',
    component: ScoreboardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    CardInputComponent,
    RulesComponent,
    ScoreboardComponent,
    TeamInputComponent,
    TurnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
