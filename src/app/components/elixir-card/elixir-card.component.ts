import { Component, Input } from '@angular/core';
import { Elixirs } from 'src/app/interfaces/elixirs';

@Component({
  selector: 'app-elixir-card',
  templateUrl: './elixir-card.component.html',
  styleUrls: ['./elixir-card.component.css']
})
export class ElixirCardComponent {
  @Input() elixir!: Elixirs;
}
