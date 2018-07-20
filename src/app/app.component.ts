import { Component, OnInit } from '@angular/core';
import { Cephe } from '../cephe';
import { of, Observable } from 'rxjs';
import * as Konva from 'konva';

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


  onClickNext() {
    this.cepheler = []
    for (let i = 0; i < this.cepheSayisi; i++) {
      this.cepheler.push(new Cephe(i, '', '', ''))
    }
    // this.ebatShow = true
  }

  onClickDraw() {
    // first we need to create a stage
    let stage = new Konva.Stage({
      container: 'drawingPlace',
      width: document.getElementById('drawingPlace').offsetWidth - 4,
      height: document.getElementById('drawingPlace').offsetHeight - 4
    });

    let layer = new Konva.Layer();

    if (this.cepheSayisi == 1) {
      for (let i = 0; i < this.cepheler[0].kanatSayisi; i++) {
        let rect = new Konva.Rect({
          x: 20 + i * 300 * this.cepheler[0].en / this.cepheler[0].kanatSayisi / this.cepheler[0].boy,
          y: 10,
          width: 300 * this.cepheler[0].en / this.cepheler[0].kanatSayisi / this.cepheler[0].boy,
          height: 300,
          // fill: 'white',
          stroke: 'black',
          strokeWidth: 2,
          name: 'kanat' + i.toString
        });
        layer.add(rect);
      }
    }

    stage.add(layer);

    // this.ebatShow = false
    // this.cepheSayisiShow = false
  }


}
