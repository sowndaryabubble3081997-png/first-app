
import './App.css'
import { Switch,Switch1 } from './Switch';

function App() {
  
  function Profile(){
    console.log("working")
    const username="Laksana.H";
    const age="25"
  }

  // const users=[

  //   {
  //     id:1
  //     name: 'laksana.h',
  //     subject: 'maths',
  //     mark:95
  //   },
  //   {
  //     id:2
  //     name:'pooja.h',
  //     subject:'english',
  //   },
  // ];
 

  

    return <div><h1 className='bg-red-700'>hello {users}</h1>
        <Profile/>
        {/* <Switch name="lakshu" age="25" role="doctor" />
        <Switch1 name="sana.h" age="30" /> */}
       
    </div>
}

  


export default App;
