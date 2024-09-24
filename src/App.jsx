import './App.css';
import RestaurantBoard from './components/RestaurantBoard';

const App = () => {

  return (
    <div className="App">
      <div className='header'>
        <h1>Indian Restaurant Favorites in Orange County</h1>
      </div>

      <RestaurantBoard />
    </div>
  )
}

export default App;
