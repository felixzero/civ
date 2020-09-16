import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {ScorePageComponent} from './score-page/score-page.component';
import {PlayerPageComponent} from './player-page/player-page.component';
import {AddPlayerPageComponent} from './add-player-page/add-player-page.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full'
  },
  {
    path: ':gameSlug',
    component: ScorePageComponent,
    pathMatch: 'full'
  },
  {
    path: ':gameSlug/add-player',
    component: AddPlayerPageComponent,
    pathMatch: 'full'
  },
  {
    path: ':gameSlug/player/:id/:username',
    component: PlayerPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
