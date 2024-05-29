import React from 'react';
import '../Extra/main.css';
import { Cards } from './Cards';


export const Users = ({ users }) => {
    return (
        <div>
            {users.map((user, index) => (
                <Cards key={index} user={user} />
            ))}
        </div>
    );
};
