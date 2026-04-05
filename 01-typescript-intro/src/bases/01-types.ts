export let fullName = "Leonardo Fuentes Claros";
export const age: number = 27;
export const isValid: boolean = true;

console.log({ isValid });

fullName = "Fuentes Claros Leonardo";


export const templateString = `This is an multiple 
  line string
  ${fullName}
  ${age}
  ${isValid}
`

