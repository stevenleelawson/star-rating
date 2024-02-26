import logo from './logo.svg';
import './App.css';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Rate this cool star</h1>
        <div>
          <StarRating stars={5}/>
        </div>
      </header>
    </div>
  );
}

export default App;
