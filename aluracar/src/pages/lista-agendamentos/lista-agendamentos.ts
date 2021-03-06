import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Alert,
  AlertController
} from "ionic-angular";
import { AgendamentoDaoProvider } from "../../providers/agendamento-dao/agendamento-dao";
import { Agendamento } from "../../modelos/agendamento";
import { AgendamentosServiceProvider } from "../../providers/agendamentos-service/agendamentos-service";

@IonicPage()
@Component({
  selector: "page-lista-agendamentos",
  templateUrl: "lista-agendamentos.html"
})
export class ListaAgendamentosPage {
  _agendamentos: Agendamento[] = [];
  _alerta: Alert;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _agendamentoDAO: AgendamentoDaoProvider,
    private _alertCtrl: AlertController,
    private _agendamentosService: AgendamentosServiceProvider
  ) {}

  ionViewDidLoad() {
    this._agendamentoDAO
      .listaTodos()
      .subscribe((agendamentos: Agendamento[]) => {
        this._agendamentos = agendamentos;
      });
  }

  reenvia(agendamento: Agendamento) {
    this._alerta = this._alertCtrl.create({
      title: "Aviso",
      buttons: [
        {
          text: "OK"
        }
      ]
    });

    let mensagem = "";

    this._agendamentosService
      .agenda(agendamento)
      .mergeMap(valor => {
        let observable = this._agendamentoDAO.salva(agendamento);

        if (valor instanceof Error) {
          throw valor;
        }

        return observable;
      })
      .finally(() => {
        this._alerta.setSubTitle(mensagem);
        this._alerta.present();
      })
      .subscribe(
        () => (mensagem = "Agendamento reenviado"),
        (err: Error) => (mensagem = err.message)
      );
  }
}
