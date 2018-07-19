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
  cepheSayisi;
  cepheler = []
  boxesConfig = []
  ebatShow = true;
  cepheSayisiShow = true

  configStage: Observable<any> = of({
    width: 1200,
    height: 400
  });

  onClickNext() {
    this.cepheler = []
    for (let i = 0; i < this.cepheSayisi; i++) {
      this.cepheler.push(new Cephe(i, '', '', ''))
    }
    // this.ebatShow = true
  }

  onClickDraw() {
    console.log("this.cepheSayisi", this.cepheSayisi);
    console.log("this.cepheler", this.cepheler);

    if (this.cepheSayisi == 1) {
      for (let i = 0; i < this.cepheler[0].kanatSayisi; i++) {
        let box = of({
          x: 20 + i * 200,
          y: 10,
          width: 200,
          height: 350,
          fill: 'white',
          stroke: 'black',
          strokeWidth: 2,
          name: 'kanat' + i.toString
        });
        this.boxesConfig.push(box)
      }
    }
    // this.ebatShow = false
    // this.cepheSayisiShow = false
  }


}
