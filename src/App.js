import Menu from './components/Menu';
import MealList from './pages/MealList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page404 from './pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path='/'>
          <MealList />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
