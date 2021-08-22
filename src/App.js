import LogoBar from "./components/header/LogoBar";
import CategoriesBar from "./components/header/CategoriesBar";
import SearchComponent from "./components/searchApp/SearchComponent";
import Resturant from "./components/resturants/Resturant";
import Footer from "./components/footer/Footer";
import Signup from "./components/users/Signup";
import store from './config/Store';
import Routing from "./navigation/Routing";


function App() {

  return (
    <div >
      <Routing />
      {/* <LogoBar />
      <CategoriesBar />
      <SearchComponent />
      <Resturant />
      <Footer /> */}
    </div>
  );
}

export default App;
