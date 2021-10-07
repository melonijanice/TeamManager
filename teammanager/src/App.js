import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import {Router} from '@reach/router';
import PlayerList from './views/PlayerList';
import ManageStatus from './views/ManageStatus';


function App() {
  return (
    <div className="App">
      <Router>
      <Main path="/players/new"></Main>
      <PlayerList path="/players/"></PlayerList>
      <ManageStatus path="/status/game/:id"></ManageStatus>
      </Router>
    </div>
  );
}
export default App;
