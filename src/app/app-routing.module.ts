import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ConcreteComponent } from './components/concrete/concrete.component';
import { FencesDecksComponent } from './components/fences-decks/fences-decks.component';
import { HomeComponent } from './components/home/home.component';
import { LandscapingComponent } from './components/landscaping/landscaping.component';
import { RemodelingComponent } from './components/remodeling/remodeling.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SprinklerComponent } from './components/sprinkler/sprinkler.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'landscaping', component: LandscapingComponent},
  {path: 'fences-decks', component: FencesDecksComponent},
  {path: 'sprinkler', component: SprinklerComponent},
  {path: 'remodeling', component: RemodelingComponent},
  {path: 'concrete', component: ConcreteComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
