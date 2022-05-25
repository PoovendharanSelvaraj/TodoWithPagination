import { useState } from 'react';
import './App.css';
import Timer from './components/Timer';
// import { Todo } from './components/Todo';

function App() {
  const [timer,setTimer]=useState(0)
  const [end]=useState(20)
 

  return (
    <div className="App">
      {/* <Todo/> */}
      <Timer timer={timer}  end={end} setTimer={setTimer}  />
    </div>
  );
}

export default App;
