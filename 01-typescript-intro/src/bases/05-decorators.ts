
// Un decorador no es mas que una funcion que obtiene la definicion de la clase a decorar, y a partir de esa definicion se puede modificar o extender su comportamiento
export const MyFirstDecorator = () => {
  return (target: Function) => {
    console.log(target); // Imprime la definicion de la clase a decorar, contructor, metodos y propiedades
  }
};


@MyFirstDecorator()
export class Pokemon  {
  constructor(
    public readonly id: number,
    public name: string
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase() }!!!`);
  }

  speak() {
    console.log(`${this.name}, ${ this.name }`);
  }
}

export const charmander = new Pokemon( 4, 'Charmander' );
console.log(charmander);