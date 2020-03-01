import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';
import { DataService } from './data.service';
import { GridComponent } from './grid/grid.component';
import { HerosComponent } from './heros/heros.component';
import { SelectCardDirective } from './select-card.directive';
import { MonstersHealthComponent } from './monsters-health/monsters-health.component';
import { MhealthComponent } from './mhealth/mhealth.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GameComponent,
    GridComponent,
    HerosComponent,
    SelectCardDirective,
    MonstersHealthComponent,
    MhealthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
