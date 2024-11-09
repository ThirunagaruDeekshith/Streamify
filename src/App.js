import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Movies from './Movies';
import { MovieContextProvider } from './Context/MovieContext';
function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Header></Header>
        <Movies></Movies>
        </MovieContextProvider>
    </div>
  );
}

export default App;
