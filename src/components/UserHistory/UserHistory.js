import React from 'react';
import { getUserHistoryById } from '../Extra/deliveryHistory';
import { useLocation} from 'react-router-dom';
import MonthHistory from './MonthHistory';
import { getUserDataById } from '../Extra/curdUser';
import './UserHistory.css'
import { EditableCards } from '../Homepage/EditableCards';

const DeliveryHistory = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get('userId');

    const userHistory = getUserHistoryById(userId);
    const userData = getUserDataById(userId);
    if (!userHistory || userHistory.length === 0) {
        return <p className='text-white text-center mt-10'>No history available for this user.</p>;
    }

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return (
        <div className='overflow-y-scroll h-screen pb-20 text-white'>
            <EditableCards key={343} user={userData} />
            {userHistory.slice().reverse().map((monthData, index) => (
                <MonthHistory key={index} monthName={months[userHistory.length - index - 1]} monthData={monthData} />
            ))}
        </div>
    );
};

export default DeliveryHistory;
