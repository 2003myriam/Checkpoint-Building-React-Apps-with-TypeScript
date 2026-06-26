 import { Component } from 'react'; 

/* =====ajouter une  Interface qui décrit la structure du state du composant==== */
interface CounterState{
  count :number
   
  }
/* =======le composant possede un state donc il attends <Props, State> props est vide et state represente nore interface ====== */
class Counter extends Component <{},CounterState> { 
state = {
 count: 0
 };
 /* ========la fonction ne retourne rien donc est de type void ======== */
  increment = ():void => {
 this.setState({ count: this.state.count + 1 }
 
 ); 
}; 
render() { 
return ( <div> 
<p>Count: {this.state.count}</p> 
<button onClick={this.increment}>Increment</button> 
</div> );
 }
 } 
export default Counter;