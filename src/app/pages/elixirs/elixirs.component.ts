import { Component, OnInit } from '@angular/core';
import { Elixirs } from 'src/app/interfaces/elixirs';
import { WizardService } from 'src/app/services/wizard.service';

@Component({
  selector: 'app-elixirs',
  templateUrl: './elixirs.component.html',
  styleUrls: ['./elixirs.component.css']
})
export class ElixirsComponent implements OnInit {
  elixirsList!: Elixirs[];

  constructor(private service: WizardService){}

  ngOnInit(){
    this.service.getAllElixirs().subscribe((elixirs) => {
      this.elixirsList = elixirs;
    })
  }
}
