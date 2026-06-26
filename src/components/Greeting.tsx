 /* =====ajouter une  Interface qui décrit la structure du props du composant==== */
interface GreetingProps{
  name :string
   
  }
const Greeting = ({ name }:GreetingProps) => { 
return <div>Hello, {name}!</div>;
 };
 export default Greeting;