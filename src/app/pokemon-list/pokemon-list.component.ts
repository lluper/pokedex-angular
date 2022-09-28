import { Component } from '@angular/core';
import { Pokemon } from '../_model/Pokemon';
import { PokemonService } from '../_services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  public pokemons: Pokemon[] = [];

  constructor(public pokemonService: PokemonService) {}
}
