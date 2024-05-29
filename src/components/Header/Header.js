import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../Extra/curdUser';

const Header = ({ showUsers }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleUsers = () => {
        showUsers(getAllUsers());
    }
    const handleSearch = () => {
        // onSearch(searchTerm);
    };

    return (
        <div className="bg-zinc-800 p-4 flex justify-between items-center">
            <input
                type="text"
                placeholder="Search..."
                name='search'
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
