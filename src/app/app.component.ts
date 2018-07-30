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
          x: 60 + i * 300 * this.cepheler[0].en / this.cepheler[0].kanatSayisi / this.cepheler[0].boy,
          y: 60,
          width: 300 * this.cepheler[0].en / this.cepheler[0].kanatSayisi / this.cepheler[0].boy,
          height: 300,
          stroke: 'black',
          strokeWidth: 2,
          name: 'kanat' + i.toString
        });
        layer.add(rect);

        let enCm = new Konva.Text({
          x: 60 + i * 300 * this.cepheler[0].en / this.cepheler[0].kanatSayisi / this.cepheler[0].boy,
          y: 30,
          text: (this.cepheler[0].en / this.cepheler[0].kanatSayisi).toString()+"cm",
          fontFamily: 'Calibri',
          fontSize: 18,
          padding: 5,
          fill: 'black'
        });
        layer.add(enCm);
      }
      let boyCm = new Konva.Text({
        x: 300 * this.cepheler[0].en / this.cepheler[0].boy + 90,
        y: this.cepheler[0].boy / 2 + 60,
        text: this.cepheler[0].boy.toString()+"cm",
        fontFamily: 'Calibri',
        fontSize: 18,
        padding: 5,
        fill: 'black'
      });
      layer.add(boyCm);
    } else {
      //to do 
    }

    stage.add(layer);

    // this.ebatShow = false
    // this.cepheSayisiShow = false
  }


}
