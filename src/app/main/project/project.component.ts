import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Project } from '../models/projects';
import { options2 } from '../constant';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  projects: Project[] = [
    {
      "id": 1,
      "title": "CPOS Admin Console Dashboard",
      "description": "A comprehensive admin dashboard for managing CPOS operations."
    },
    {
      "id": 2,
      "title": "Ekaushalya Tech - Edutech App",
      "description": "An educational technology platform focused on skill development and learning."
    },
    {
      "id": 3,
      "title": "BharatMandi - Admin Console Dashboard",
      "description": "An admin dashboard for managing BharatMandi's marketplace operations."
    },
    {
      "id": 4,
      "title": "POS BharatMandi - Point of Sale",
      "description": "A point-of-sale system for order capturing and billing at BharatMandi."
    },
    {
      "id": 5,
      "title": "SAFE - PIAM Web App - HID - Multidomain",
      "description": "A PIAM web application for managing physical identity access across multiple domains."
    },
    {
      "id": 6,
      "title": "SCG - Dell",
      "description": "Managing the entire Dell EMC system for streamlined operations."
    }
  ]
  ;

  customOptions: any = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: [
        '<span class="custom-nav-btn custom-prev">←</span>',  // Previous arrow
        '<span class="custom-nav-btn custom-next">→</span>'   // Next arrow
    ],
    responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1200: { items: 3 },
    },
};

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
  }

}
