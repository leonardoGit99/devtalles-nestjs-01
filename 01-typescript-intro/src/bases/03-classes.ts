import axios from 'axios';
import type { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';
// Traditional form to create a class
/* export class Pokemon {
  public id: number;
  public name: string;
  constructor(
    id: number,
    name: string
  ) {
    this.id = id;
    this.name = name
    console.log(`constructor called with id: ${id} and name:${name}`);
  }

} */

export class Pokemon {
  constructor(
    public readonly id: number,
    public readonly name: string
  ) {
    this.id = id;
    this.name = name
    console.log(`constructor called with id: ${id} and name:${name}`);
  }

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  public scream(): void {
    console.log(`${this.name.toUpperCase} !!!`)
  }

  public speak(): void {
    console.log(`${this.name}, ${this.name}`)
  }

  public async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/4`);
    console.log(data.moves);

    return data.moves;
  }
}

export const charmander = new Pokemon(1, 'charmander');
export const squirtle = new Pokemon(2, 'squirtle');

charmander.speak();
squirtle.scream();


console.log(charmander, squirtle);

console.log(charmander.getMoves());