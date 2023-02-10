import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  image: string = "https://meta-data.es/wp-content/uploads/2022/02/sec5.png";
  title: string = "Angular con interpolacion";
  @Input() dataEntrante: any;
  constructor() {}

  ngOnInit(): void {
    this.image = "https://grupogaratu.com/wp-content/uploads/sites/4/2016/09/inteligencia-artificial-que-es.png";
  }

}
