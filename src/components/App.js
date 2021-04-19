import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import DemonicNames from './DemonicNames'
import CelticNames from './CelticNames'
import FantasyFolkNames from './FantasyFolkNames'
import NameSelector from './NameSelector'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <Switch>

          <Route path="/mix-n-match" render={() => <NameSelector />} />
          <Route path="/demonic" render={() => <DemonicNames />} />
          <Route path="/celtic" render={() => <CelticNames />} />
          <Route path="/fantasy-folk" render={() => <FantasyFolkNames />} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
