import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllUsers, getUndeliveredUsers } from '../Extra/curdUser';

const Header = ({ showUsers }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [preUsers, setPreUsers] = useState([]);
    const navigate = useNavigate();

    const handleUsers = () => {
        const allUsers = getAllUsers();
        showUsers(allUsers);
        setPreUsers(allUsers);
        navigate('/');
    };

    useEffect(() => {
        const undeliveredUsers = getUndeliveredUsers();
        showUsers(undeliveredUsers);
        setPreUsers(undeliveredUsers);
    }, [showUsers]);

    const handleSearch = () => {
        if (searchTerm.length === 0) {
            showUsers(preUsers);
            return;
        }

        const searchUsers = preUsers.filter(user => {
            const nameMatch = user.name && user.name.toLowerCase().startsWith(searchTerm.toLowerCase());
            const numberMatch = user.number && user.number.startsWith(searchTerm);
            const addressMatch = user.address && user.address.toLowerCase().startsWith(searchTerm.toLowerCase());

            return nameMatch || numberMatch || addressMatch;
        });

        showUsers(searchUsers);
    };

    return (
        <div className="bg-zinc-800 p-4 flex justify-between items-center">
            <input
                type="text"
                placeholder="Search..."
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyUp={handleSearch}
                className="p-2 rounded-md border border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
            />
            <button onClick={handleUsers} className="bg-pink-800 text-white py-2 px-2 rounded-lg shadow-md">All</button>
            <Link to="/set">
                <button className="bg-red-800 text-white py-2 px-2 rounded-lg shadow-md">Add New</button>
            </Link>
        </div>
    );
};

export default Header;
