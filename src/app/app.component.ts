import { Component } from '@angular/core';
import { Cephe } from '../cephe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  customer=''
  cepheSayisi = 0;
  cepheler = []

  onClickNext() {
    this.cepheler = []
    for (let i = 0; i < this.cepheSayisi; i++) {
      this.cepheler.push(new Cephe('', '', ''))
    }
  }

}
