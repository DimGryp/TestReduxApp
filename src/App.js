import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import counterActions from './actions/counterActions'; 

function App() {

  const firstcounter = useSelector(state => state.firstcounterReducer )
  const secondcounter = useSelector(state => state.secondcounterReducer )
  const dispatch = useDispatch()
  //comment
  //comment
  //comment2

  return (
    <div className="App">
      <header className="App-header">
      <h1>First Counter: {firstcounter}</h1>
      <h1>Second Counter: {secondcounter}</h1>
      <button onClick={() => dispatch(counterActions.increment())}>Increase First Counter</button>
      <button onClick={() => dispatch(counterActions.decrement())}>Decrease First Counter</button>
      <button onClick={() => dispatch(counterActions.secondcounterincrement())}>Increase Second Counter</button>
      <button onClick={() => dispatch(counterActions.secondcounterdecrement())}>Decrease Second Counter</button>

        {/*  <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          I changed it too - AG
          I changed it too
        </p> */}
        //comment
      </header>
    </div>
  );
}

export default App;
