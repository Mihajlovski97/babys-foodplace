import { Route, Switch } from 'react-router-dom';
import {Navbar} from '../src/components/navbar/Navbar';
import ROUTES from '../src/constants/routes';
import '../src/App.css';
import Register from '../src/components/pages/Register';
import Home from '../src/components/pages/Home';
import {Login} from '../src/components/pages/Login';
import Footer from '../src/components/footer/Footer';
import {Profile} from '../src/components/pages/Profile';
import {MyRecipes} from '../src/components/pages/MyRecipes';
import {AddRecipe} from '../src/components/pages/AddRecipe';
import {GetByCategory} from '../src/components/pages/GetByCategory';
import {UpdateRecipe} from '../src/components/pages/UpdateRecipe';
import {PrivateRoute} from '../src/helpers/PrivateRoute';


const App = () => {
  return (
    <div className="app">
      <div className="without">
        <div className='app-nav'>
        <Navbar/>
        </div>
        <div className='switch'>
          <Switch>
            <Route exact path='/' component={Home} /> 
            <Route path={ROUTES.CATEGORY} component={GetByCategory} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/my-profile' component={Profile} />
            <PrivateRoute path='/my-recipes' component={MyRecipes} />
            <PrivateRoute path='/add-recipe' component={AddRecipe} />
            <PrivateRoute path='/update-recipe' component={UpdateRecipe} />
          </Switch>
          </div>
        </div>
        <div className='app-footer'>
        <Footer />
        </div>
    </div>
  );
}

export default App;
