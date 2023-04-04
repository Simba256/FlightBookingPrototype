import React , {useState} from 'react'
import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/login/Login';
import SignUp from './pages/sign-up/SignUp';
import Booking from './pages/booking/Booking';
function App() {

  // let [ isLoggedIn , setIsLoggedIn ] = useState(false)

  return (
    <div className="App">
        <Router>
            <Routes>

              {/* <Route exact path = "/" element = { <Intro/> } /> */}
              {/* <Route exact path = "/intro" element = { <Intro/> } /> */}

              {/* <Route exact path = "/" element = { <Auth isLoggedIn = {isLoggedIn} Component={Login} /> } /> */}

              {/* <Route exact path = "/home" element = { <Auth isLoggedIn = {isLoggedIn} Component={Home} /> } /> */}

              {/* <Route exact path = "/import-wallet" element = { <ImportWallet/> } /> */}

              {/* <Route exact path = "/create-wallet" element = { <NewWallet/> } /> */}

              {/* <Route exact path = "/recovery-phrase" element = { <RecoveryPhrase/> } /> */}

              {/* <Route exact path = "/confirm-recovery-phrase"  element = { <ConfirmRecoveryPhrase setIsLoggedIn={setIsLoggedIn} /> } /> */}

              {/* <Route exact path = "/home" element = { <Home/> } /> */}

              {/* <Route exact path = "/withdraw" element = { <WithDraw/> } /> */}

              {/* <Route exact path = "/create-account" element = { <CreateAccount/> } /> */}

              {/* <Route exact path = "/import-account" element = { <ImportAccount/> } /> */}

              {/* <Route exact path = "/send" element = { <Send/> } /> */}

              {/* <Route exact path = "/settings" element = { <Settings/> } />

              <Route exact path = "/tracking" element = { <Tracking/> } />



              <Route exact path = "/checkout" element = { <Checkout/> } />

              <Route exact path = "/booking" element = { <Booking/> } /> */}

              <Route exact path = "/sign-up" element= { <SignUp/> }  />

              <Route exact path = "/login" element = { <Login/> } />

              <Route exact path = "/booking" element = { <Booking/> } />

              <Route exact path = "/" element = { <Login/> } />

              {/* <Route exact path = "/login"  element= { <Login setIsLoggedIn={setIsLoggedIn} /> }  /> */}

            </Routes>
      </Router>
    </div>
  );
}

export default App;