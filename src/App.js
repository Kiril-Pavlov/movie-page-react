import logo from './logo.svg';
import './App.css';
import BoilingWater from './components/BoilingWater';
import FetchUsers from './components/FetchUsers';
import User from './components/User';
import FetchMovies from './Movies/FetchMovies';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        {/* <BoilingWater/> */}
        {/* <FetchUsers/> */}
        <FetchMovies/>
        Test
      </header>
    </div>
  );
}

export default App;
