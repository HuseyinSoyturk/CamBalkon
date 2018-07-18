import { Component } from '@angular/core';
import { Cephe } from '../cephe';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  customer = ''
  cepheSayisi = 0;
  cepheler = []

  onClickNext() {
    this.cepheler = []
    for (let i = 0; i < this.cepheSayisi; i++) {
      this.cepheler.push(new Cephe('', '', ''))
    }
  }

  configStage: Observable<any> = of({
    width: 100,
    height: 100
  });
  configCircle: Observable<any> = of({
    x: 50,
    y: 50,
    radius: 50,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4
  });
}
