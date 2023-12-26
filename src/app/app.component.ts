import { Component } from '@angular/core';
import { SessaoAppService } from './core/sessao-app/sessao-app.service';
import { SessaoApp } from './core/sessao-app/sessao.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  sessaoApp : SessaoApp = new SessaoApp()
  SessaoAppService: SessaoAppService = new SessaoAppService()

  ngOnInit(): void {
    this.sessaoApp = SessaoAppService.getSessao()
    
  }
  
}
