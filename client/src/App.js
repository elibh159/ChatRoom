import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContext } from './UserContext';
import Chat from './components/chat/Chat';
import Home from './components/home/Home';
import Navbr from './components/layout/Navbar';

import './App.css';

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <Navbr></Navbr>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/chat/:room_id/:room_name" component={Chat} />
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
