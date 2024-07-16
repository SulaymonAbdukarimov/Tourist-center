import { Component, OnInit } from '@angular/core';

interface Tours {
  placeName: string,
  price: number,
  image: string
}
@Component({
  standalone: true,
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {
  tours: Tours[] = [
    { placeName: 'ДУБАЙ', price: 250, image: 'assets/images/dubai2.png' },
    { placeName: 'ГРУЗИЯ', price: 500, image: 'assets/images/gruziya2.png' },
    { placeName: 'ШАРМ-ЭШ-ШЕЙХ', price: 350, image: 'assets/images/sharm-esh-sheyx2.png' },
    { placeName: 'ИСТАНБУЛ', price: 500, image: 'assets/images/istanbul2.png' },
    { placeName: 'БАКУ', price: 550, image: 'assets/images/baku2.png' },
    { placeName: 'ГОА', price: 750, image: 'assets/images/goa2.png' },
    { placeName: 'ТАИЛАНД', price: 600, image: 'assets/images/tailand2.png' },
    { placeName: 'МАЛЬДИВЫ', price: 800, image: 'assets/images/maldiviya2.png' },
    { placeName: 'АНТАЛИЯ', price: 700, image: 'assets/images/antalya2.png' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
