import Campaign from './Campaign';
import {Route} from 'react-router-dom';
import Sidenavbar from './Sidenavbar';
import Topbar from './Topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Sidenavbar/>
      <Route path="/Campaign/:PageNo" exact>
        <Campaign/>
      </Route>
    </div>
  );
}

export default App;
