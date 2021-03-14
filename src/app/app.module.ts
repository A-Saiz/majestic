import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandscapingComponent } from './components/landscaping/landscaping.component';
import { FencesDecksComponent } from './components/fences-decks/fences-decks.component';
import { SprinklerComponent } from './components/sprinkler/sprinkler.component';
import { RemodelingComponent } from './components/remodeling/remodeling.component';
import { ConcreteComponent } from './components/concrete/concrete.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AboutComponent } from './components/about/about.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceContentComponent } from './shared/service-content/service-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LandscapingComponent,
    FencesDecksComponent,
    SprinklerComponent,
    RemodelingComponent,
    ConcreteComponent,
    ReviewsComponent,
    AboutComponent,
    NavigationComponent,
    HomeComponent,
    ServiceContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
