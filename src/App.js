import React , {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['jahid','hasan', 'niloy'];
  const [userNames,setUserName] = useState([]); 

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data => setUserName(data))
  },[])
  return (
    <div className="App">
      {/* <Project names = {names}></Project>
      {
        names.map(name => <h2>{name}</h2> )
      } */}
      {
        userNames.map(name => <Name name = {name} key={name.id}></Name>)
      }
      <Name name = {userNames}></Name>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Name(props){
  return (
    <div style = {{border:'2px solid red',margin:'20px'}}>
      <h2>Name : {props.name.name}</h2>
      <h3>User Name : {props.name.username}</h3>
    </div>
  )
}

// function Project(props){
//   const [count,setCount] = useState(0);
//   return(
//     <div>
//       <h5>Number of Project : {count}</h5>
//       <MovieDisplay counter = {count}></MovieDisplay>
//       {/* {
//         props.names.map(name => <h2>{name}</h2> )
//       } */}
//       <button onClick = { () => setCount(count+1) }>Add Movie</button>
//     </div>
//   )
// }
function MovieDisplay(props){
  return(
    <h4>Project Done : {props.counter} </h4>
  )
}
export default App;
