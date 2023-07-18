import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElixirsComponent } from './pages/elixirs/elixirs.component';
import { ElixirCardComponent } from './components/elixir-card/elixir-card.component';
import { HousesComponent } from './pages/houses/houses.component';
import { HouseCardComponent } from './pages/house-card/house-card.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ElixirsComponent,
    ElixirCardComponent,
    HousesComponent,
    HouseCardComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
