const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      // console.log({target})
      return {
        get() {
          const wrapperFn = (...args: any[]) => {
            console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
            //! Llamar la función propiamente con sus argumentos
            propertyDescriptor.value.apply(this, args); 
          }
          return wrapperFn;
        }
      }
    }   
}



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

  @Deprecated('This method is deprecated and will be removed in the next version, use speak 2 instead')
  speak() {
    console.log(`${this.name}, ${ this.name }`);
  }

  speak2() {
    console.log(`${this.name}, ${ this.name }!!!!!!!!`);
  }
}

export const charmander = new Pokemon( 4, 'Charmander' );
console.log(charmander);

const charmanderSpeak = charmander.speak();
console.log(charmanderSpeak);