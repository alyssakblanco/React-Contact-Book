import AddNew from "./AddNew";
import Home from "./Home";
import {Route, Link} from 'react-router-dom';
import Edit from "./Edit";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/add" component={AddNew} />
      <Route exact path="/edit" component={Edit} />

    </div>
  );
}

export default App;
