import { Component, OnInit } from '@angular/core';
import { Houses } from 'src/app/interfaces/houses';
import { WizardService } from 'src/app/services/wizard.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit{
  houses!: Houses[];

  constructor(private service: WizardService){}

  ngOnInit(): void {
    this.service.getAllHouses().subscribe((houses) => {
      this.houses = houses;
    })
  }
}
