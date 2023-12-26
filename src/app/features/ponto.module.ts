import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { MaterialModule } from "../shared/libraries/material/material.module";
import { SharedModule } from "../shared/shared.module";
import { PontoComponent } from "./ponto/ponto.component";




@NgModule({
  declarations: [PontoComponent],
  imports: [CommonModule, AppRoutingModule, MaterialModule],
  exports: [
    PontoComponent
  ],
  providers: [],

})
export class PontoModule {}