import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import DemonicNames from './DemonicNames'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <Switch>

          <Route path="/demonic" render={() => <DemonicNames />} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
