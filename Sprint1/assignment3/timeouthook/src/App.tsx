import './App.css';
import { useTimeout } from './components/Usetimeout';

function App() {
  const ready=useTimeout(5000);

  if(!ready) {
    return <h1>Waiting...</h1>;
  }

  return (
    <div className="App">
      
      <h1 style={{color: 'coral'}}>Yeah My Boiii....</h1>
      
    </div>
  );
}

export default App;
