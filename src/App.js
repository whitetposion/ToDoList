import React,{Component} from 'react';
import './App.css';
import Greet from './components/Greet';
//import Welcome from './components/Welcome';

function App() {
  
  const user=[
    {name:"Mars" ,isGasPlanet: false},
    {name:"Earth" ,isGasPlanet: false},
    {name:"Jupiter" ,isGasPlanet:true},
    {name:"venus" ,isGasPlanet:false},
    {name:"Neptune" ,isGasPlanet:true},
    {name:"Uranus" ,isGasPlanet:true}
  ];
  
    return (
      <div className="App">
        {user.map((nmme,key)=>!nmme.isGasPlanet && <h1 >{nmme.name} </h1>
        )}
        <Greet/>
        
        
      </div>
    );
  
}



export default App;
