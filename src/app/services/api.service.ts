import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../main/models/projects';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(@Inject(HttpClient) private http: HttpClient) {}

    // Get Tech Stacks
    getTechStacks(): Observable<any> {
      return this.http.get(`${this.apiUrl}/tech-stacks`);
    }
  
    // Get Projects
    getProjects(): Observable<Project[]> {
      return this.http.get<Project[]>(`${this.apiUrl}/projects`);
    }
  
    // Submit Contact Form
    submitContact(contact:any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/contacts`, contact);
    }

    //home page
    getHomeData(): Observable<any> {
      return this.http.get(`${this.apiUrl}/home`);
    }
}

