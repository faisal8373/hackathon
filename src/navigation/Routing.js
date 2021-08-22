import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from '../components/users/Signup';
import LogoBar from "../components/header/LogoBar";
import CategoriesBar from "../components/header/CategoriesBar";
import Footer from "../components/footer/Footer";
import SearchComponent from "../components/searchApp/SearchComponent";
import Resturant from "../components/resturants/Resturant";
import Login from '../components/users/Login';

function Routing() {
  return (
    <div>
      <Router>
      <LogoBar />
        <CategoriesBar />
        <Switch>
            <Route exact path='/'>
           
        <SearchComponent />
<Resturant />
<Footer />
            </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          
          
        </Switch>

        
      </Router>
    </div>
  );
}

export default Routing;