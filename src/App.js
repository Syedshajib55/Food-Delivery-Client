import './App.css';
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AddService from './Components/AddService/AddService'
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthContext';
import About from './Components/About Us/About';
import Contact from './Components/Contact Us/Contact';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import ManageServices from './Components/ManageServices/ManageServices';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
          <PrivateRoute path="/aboutus">
              <About></About>
          </PrivateRoute>
          <PrivateRoute path="/contactus">
              <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute path="/PlaceOrder/:serviceId">
              <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path='/AddService'>
              <AddService></AddService>
          </Route>
          <Route path='/manageServices'>
              <ManageServices></ManageServices>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
