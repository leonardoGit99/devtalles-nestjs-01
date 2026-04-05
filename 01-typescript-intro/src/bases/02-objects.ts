export const pockemonIds = [1, 20, 30, 50, 50];


interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

export const charmander: Pokemon = {
  id: 1,
  name: 'charmander',
}

export const squirtle: Pokemon = {
  id: 2,
  name: 'squirtle'
}

export const pokemons: Pokemon[] = [];

pokemons.push(charmander, squirtle);

console.log(pokemons)