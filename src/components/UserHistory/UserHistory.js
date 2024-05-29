import React from 'react';
import { getUserHistoryById } from '../Extra/deliveryHistory';
import { useParams } from 'react-router-dom';
import MonthHistory from './MonthHistory';
import { Cards } from '../Homepage/Cards';
import { getUserDataById } from '../Extra/curdUser';
import './UserHistory.css'

const DeliveryHistory = () => {
    const { userId } = useParams();
    const userHistory = getUserHistoryById(userId);
    const userData = getUserDataById(userId);
    if (!userHistory || userHistory.length === 0) {
        return <p>No history available for this user.</p>;
    }

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return (
        <div className='overflow-y-scroll h-screen pb-20 text-white'>
            <Cards key={343} user={userData}/>
            {userHistory.slice().reverse().map((monthData, index) => (
                <MonthHistory key={index} monthName={months[userHistory.length - index - 1]} monthData={monthData} />
            ))}
        </div>
    );
};

export default DeliveryHistory;
