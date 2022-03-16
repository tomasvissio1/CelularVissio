import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import IntemListContainer from './components/containerComponents/ItemListContainer';

function App() {
  return (
    <div className="App" onClick={()=>console.log('soy evento')}>
      <NavBar />
      <IntemListContainer saludo='hola mundo'/>
     {/*  <header className="App-header" style={{'backgroundColor':"white"}}>
          
        
        <img src={logo} className="App-logo" alt="logo"  />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
