import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core"
import { BaseComponent } from "../../shared/base/components/base-page/base.component"
import { BaseModel } from "../../shared/base/models/baseModel"
import { AmbienteSelecionadoEnumm, FuncionariosFilter, FuncionariosGrid, SessaoAppToIframe, UsuarioLogado } from "../entity/painel-colaborador.model"


const PontoTelaEnum = {
  MARCACAO: 0,
  EXTRATO: 1,
  APROVACAO: 2

}

export class Mensagem extends BaseModel {

  expandir: boolean = null
  tabFilho: number = null
  tabPai: number = null

  constructor(obj:MensagemParam = null){
      super()
      this.setProperties(this,obj)
    }
}

export class MensagemParam {

  expandir: boolean 
  tabFilho: number 
  tabPai: number 
}
@Component({
  selector: 'app-ponto',
  templateUrl: './ponto.component.html',
  styleUrls: ['./ponto.component.css']
})

export class PontoComponent extends BaseComponent implements OnInit {

  
  @ViewChild('frameAngular') frameAngular: ElementRef
  @Input() mensagemExpandirFilho: Mensagem = new Mensagem()
  @Output() mensagemExpandirEnviadaPai = new EventEmitter<Mensagem>();

  selectedTabIndex: number = PontoTelaEnum.EXTRATO
  funcionariosList: FuncionariosGrid[] = []
  funcionario: FuncionariosGrid
  carregando: boolean = true

  async ngOnInit():Promise<void> {

    this.carregando = true

    await this.buscaFuncionarios()

    this.carregando = false

  }

  async buscaFuncionarios():Promise<void>{

   this.funcionariosList = await this.helpers.painelColaborador._GET(new FuncionariosFilter({
      idCliente: this.sessaoApp.idClienteSelecionado,
    }))

    this.funcionario = this.funcionariosList.filter(funcionarioBusca => funcionarioBusca.idFuncionarioControleUsuarioSite == this.sessaoApp.usuarioLogado.Id)[0]

  }


  setTelaExtratoPonto(): void{

    let usuarioLogado:UsuarioLogado = new UsuarioLogado()
    let sessaoAppToIframe:SessaoAppToIframe = new SessaoAppToIframe()
    usuarioLogado.id = this.funcionario.idFuncionarioControleUsuario
    sessaoAppToIframe.ambienteSelecionado = AmbienteSelecionadoEnumm.BACKOFFICE
    sessaoAppToIframe.usuarioLogado = usuarioLogado

    setTimeout(() => {

        const iframe = this.frameAngular.nativeElement;
        iframe.contentWindow.postMessage(sessaoAppToIframe, 'https://rhinterno.confirpdigital.com.br');
        // iframe.contentWindow.postMessage(sessaoAppToIframe, 'http://localhost:4203/extrato');

        }, 1000);

  }

}