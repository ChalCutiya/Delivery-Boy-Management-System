import React, { useCallback, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Users } from './components/Homepage/Users';
import { SetUser } from './components/SetUser/SetUser';
import Header from './components/Header/Header';
import UserHistory from './components/UserHistory/UserHistory';

function App() {
  const [users, setUsers] = useState([]);

  const handleUsers = useCallback((users) => {
    setUsers(users);
  }, []);
  return (
    <Router>
      <div className="body bg-black rounded relative ">
        <Header showUsers={handleUsers} users={users} />
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
