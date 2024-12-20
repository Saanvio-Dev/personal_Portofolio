import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { typeoptions } from '../constant';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  public sidebarOpen: boolean = false;
  public currentSection = 'home';
  public homeData:any = { picture_url: '', about_me: '' };
  
  ngOnInit(): void {
      const typed = new Typed('.typed-element', typeoptions);
      this.loadHomeData();

  }


  constructor(private homeService: ApiService){}


  fullPageScroll(i:any) {
    if(this.sidebarOpen)
      this.sidebarOpen = false;
  }

  toggleMenu(){
    this.sidebarOpen = !this.sidebarOpen;
  }

  onClickedOutside(e: Event) {
    if(this.sidebarOpen)
      this.sidebarOpen = false;
  }

  loadHomeData() {
    this.homeService.getHomeData().subscribe(
      (data) => {
        this.homeData = data || {};
      },
      (error) => console.error('Error loading homepage data:', error)
    );
  }
}
