import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {ScorePageComponent} from './score-page/score-page.component';
import {PlayerPageComponent} from './player-page/player-page.component';
import {ButtonComponent} from './components/button/button.component';
import {AddPlayerPageComponent} from './add-player-page/add-player-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ScorePageComponent,
    PlayerPageComponent,
    ButtonComponent,
    AddPlayerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
