import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  techStacks: { name: string; icon: string }[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTechStacks().subscribe(
      (data) => {
        this.techStacks = data;
        console.log('Tech stacks:', this.techStacks);
      },
      (error) => {
        console.error('Error fetching tech stacks:', error);
      }
    );
  }

}
