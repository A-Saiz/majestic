import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialModule } from "./material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";
import { MessageComponent } from './shared/message/message.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    ServiceContentComponent,
    ScrollToTopComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatDialogModule,
    NgbModule
    //MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
