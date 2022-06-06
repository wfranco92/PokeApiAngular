import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  namePokemon:string = "";
  pokemonFinded:string = "";
  pokemonImage: string = "";
  pokemonWeight:string = "";

  constructor(private pokemonService: CharacterService) { }

  ngOnInit(): void {
  }

  findPokemonByName(){
    this.pokemonService.getDetails(this.namePokemon).subscribe((data:any) => {
      this.pokemonFinded = data.name;
      this.pokemonImage = data.sprites.other.dream_world.front_default;
      this.pokemonWeight = data.weight;
    });
  }

}
