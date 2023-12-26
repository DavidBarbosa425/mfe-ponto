import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CustomFontAwesomeModule } from "./libraries/font-awesome/fa.module";
import { MaterialModule } from "./libraries/material/material.module";
import { ProgressDefaultComponent } from "./template/form/progress-defaul/progress-default.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    ProgressDefaultComponent

  ],
  exports : [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    // RouterModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    // HttpClientModule,
    // ProgressDefaultComponent,
    CustomFontAwesomeModule,
    FontAwesomeModule

  ],
  imports : [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    // RouterModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    // HttpClientModule,
    CustomFontAwesomeModule,
    FontAwesomeModule
  ]
})

export class SharedModule {}
