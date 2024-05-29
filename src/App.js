import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Users } from './components/Homepage/Users';
import { SetUser } from './components/SetUser/SetUser';
import Header from './components/Header/Header';
import UserHistory from './components/UserHistory/UserHistory'


function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleUsers =(users)=>{
  setUsers(users);
  }

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <Router>
      <div className='body bg-white rounded relative'>
        <Header onSearch={handleSearch} showUsers={handleUsers} />
        <Routes>
          <Route path='/' element={<Users users={users} searchTerm={searchTerm} />} />
          <Route path='/set' element={<SetUser />} />
          <Route path="/history/:userId" element={<UserHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
