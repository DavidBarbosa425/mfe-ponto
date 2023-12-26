import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { PontoComponent } from './features/ponto/ponto.component';
import { PontoModule } from './features/ponto.module';



@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, AppRoutingModule, PontoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}