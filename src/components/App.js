import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DemonicNames from './DemonicNames'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route path="/demonic" component={<DemonicNames />} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
