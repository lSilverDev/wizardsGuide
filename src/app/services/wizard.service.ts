import { Injectable } from '@angular/core';
import { Elixirs } from '../interfaces/elixirs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  private readonly API = "https://wizard-world-api.herokuapp.com";

  constructor(private http: HttpClient) { }

  getAllElixirs(): Observable<Elixirs[]> {
    return this.http.get<Elixirs[]>(this.API + "/Elixirs");
  }
}
