import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import DemonicNames from './DemonicNames'
import CelticNames from './CelticNames'
import FantasyFolkNames from './FantasyFolkNames'
import MixAndMatch from './MixAndMatch'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <Switch>

          <Route path="/mix-n-match" render={() => <MixAndMatch />} />
          <Route path="/demonic" render={() => <DemonicNames />} />
          <Route path="/celtic" render={() => <CelticNames />} />
          <Route path="/fantasy-folk" render={() => <FantasyFolkNames />} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
