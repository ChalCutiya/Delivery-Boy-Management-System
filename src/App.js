import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Users } from './components/Homepage/Users';
import { SetUser } from './components/SetUser/SetUser';
import Header from './components/Header/Header';
import UserHistory from './components/UserHistory/UserHistory';
import { getUndeliveredUsers } from './components/Extra/curdUser';

function App() {
  const [users, setUsers] = useState([]);

  const handleUsers = users => {
    setUsers(users); 
  };

  useEffect(() => {
    const  undeliveredUsers= getUndeliveredUsers();
    setUsers(undeliveredUsers);
}, []); 

  return (
    <Router>
      <div className="body bg-black rounded relative ">
        <Header showUsers={handleUsers} />
        <Routes>
          <Route path="/" element={<Users users={users} />} />
          <Route path="/set" element={<SetUser />} />
          <Route path="/history" element={<UserHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
