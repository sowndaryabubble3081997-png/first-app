import './index.css'
import { Component, ComponentA, ComponentB } from "./Component.jsx"

function App() {
  const age =20;
  console.log( `welcome ${age}` );// js content update pana string iteral 
  // // jsx expression use pani function inside la enga venna call panikala             
function Greetings(){
  console.log("coming");
  return<h3 >how are you</h3>;
  
}

 // jsx expression using html content dynamic ah update panla
   return <div className='bg-emerald-700 opacity-75  border-purple-500   '><h1>welcome{age}</h1>
    <Greetings />
  <Component />
  <ComponentA />
  <ComponentB /></div>
  

}
export default App;
