import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToursComponent } from './components/tours/tours.component';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  standalone: true,
  imports: [AboutCompanyComponent,
    ContactUsComponent,
    DestinationsComponent,
    FooterComponent,
    HeroComponent,
    NavbarComponent,
    ToursComponent],
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
