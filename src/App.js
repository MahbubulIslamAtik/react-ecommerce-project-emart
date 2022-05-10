
import './App.css';
import Home from './component/Home';
import Navber from './component/Navber';
import { Switch, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';

function App() {
  return (
    <>
      <Navber/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/products/:id' component={Product} />
      </Switch>
    </>
  );
}

export default App;
