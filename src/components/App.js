import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import DemonicNames from './DemonicNames'
import SciFiAnimalNames from './SciFiAnimalNames'
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
          <Route path="/sci-fi-animal" render={() => <SciFiAnimalNames numNames={6} />} />
          <Route path="/demonic" render={() => <DemonicNames numNames={6} />} />
          <Route path="/celtic" render={() => <CelticNames numNames={6} />} />
          <Route path="/fantasy-folk" render={() => <FantasyFolkNames numNames={6} />} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
