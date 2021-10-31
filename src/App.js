import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Booking from './Components/Page/Booking/Booking';
import Home from './Components/Page/Home/Home';
import ManageAll from './Components/Admin/ManageAll/ManageAll';
import NavBar from './Components/Page/NavBar/NavBar';
import AuthProvider from './Contex/AuthProvider';
import UserBooking from './Components/Page/UserBooking/UserBooking';
import PrivatRoute from './PrivateRoute/PrivatRoute';
import Admin from './Components/Admin/Admin/Admin';
import MyBooking from './Components/Admin/MyBooking/MyBooking';
import AddPackege from './Components/Admin/AddPackege/AddPackege';
import AddBlogs from './Components/Admin/AddBlogs/AddBlogs';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivatRoute exact path='/booking/:packegeId'>
              <Booking></Booking>
            </PrivatRoute>
            <PrivatRoute exact path='/manageall'>
              <ManageAll></ManageAll>
            </PrivatRoute>
            <PrivatRoute exact path='/addpackege'>
              <AddPackege></AddPackege>
            </PrivatRoute>
            <PrivatRoute exact path='/mybooking'>
              <MyBooking></MyBooking>
            </PrivatRoute>
            <PrivatRoute exact path='/userbooking'>
              <UserBooking></UserBooking>
            </PrivatRoute>
            <PrivatRoute exact path='/admin'>
              <Admin></Admin>
            </PrivatRoute>
            <PrivatRoute exact path='/addblogs'>
                <AddBlogs></AddBlogs>
            </PrivatRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
