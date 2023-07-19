import { Injectable } from '@angular/core';
import { Elixirs } from '../interfaces/elixirs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Houses } from '../interfaces/houses';
import { Ingredients } from '../interfaces/ingredients';
import { Spells } from '../interfaces/spells';
import { Wizards } from '../interfaces/wizards';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  private readonly API = "https://wizard-world-api.herokuapp.com";

  constructor(private http: HttpClient) { }

  getAllElixirs(): Observable<Elixirs[]> {
    return this.http.get<Elixirs[]>(this.API + "/Elixirs");
  }

  getAllHouses(): Observable<Houses[]> {
    return this.http.get<Houses[]>(this.API + "/Houses");
  }

  getAllIngredients(): Observable<Ingredients[]> {
    return this.http.get<Ingredients[]>(this.API + "/Ingredients");
  }

  getAllSpells(): Observable<Spells[]> {
    return this.http.get<Spells[]>(this.API + "/Spells");
  }

  getAllWizards(): Observable<Wizards[]> {
    return this.http.get<Wizards[]>(this.API + "/Wizards");
  }
}
