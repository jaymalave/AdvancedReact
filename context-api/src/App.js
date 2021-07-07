import './App.css';
import { MovieProvider } from './components/MovieContext'
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie'


function App() {
  return (
    <MovieProvider>
    <div className="App">
      <AddMovie/>
     <MovieList />
    </div>
    </MovieProvider>
  );
}

export default App;
