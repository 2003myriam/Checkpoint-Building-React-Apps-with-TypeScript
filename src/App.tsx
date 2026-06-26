
import './App.css'
import Counter from './components/Counter'
import Greeting from './components/Greeting'

function App() {
   

  return (
    <>
     <Greeting name={"myriam"}/> {/* cette fonction attnd un props */}
      <Counter />
    </>
  )
}

export default App
