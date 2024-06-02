import React, { useState } from 'react';
import phoneIcon from '../Extra/icons/phone.svg';
import whatsappIcon from '../Extra/icons/whatsapp.svg';
import editIcon from '../Extra/icons/edit.svg';
import { callNumber, openWhatsAppChat } from '../Extra/main';
import {  useNavigate } from 'react-router-dom';

export const EditableCards = ({ user }) => {
    const [showFullNotes, setShowFullNotes] = useState(false);
    const navigate = useNavigate();

    const toggleNotes = () => {
        setShowFullNotes(!showFullNotes);
    };
    return (
        <div className="bg-zinc-800 dark:bg-white text-white dark:text-zinc-800 p-4 m-4 rounded-lg max-w-sm mx-auto">
            <div>
                <div className="text-lg font-bold flex justify-between">
                    <p className="text-lg font-bold">{user.name}</p>
                    <p>+91 {user.number}</p>
                </div>
                <p>Address - {user.address}</p>
                <p>Slots - {user.slots.join(' ')}</p>
                <p>Cost/Meal - {user.cost1Meal}Rs</p>
            </div>
            <div className="flex justify-around mt-1">
                <button onClick={() => callNumber(user.number)} className="bg-zinc-400 dark:bg-zinc-200 h-10 w-10 rounded-full flex items-center justify-center">
                    <img src={phoneIcon} alt="Phone" />
                </button>
                <button onClick={() => openWhatsAppChat(user.number)} className="bg-zinc-400 dark:bg-zinc-200 h-10 w-10 rounded-full flex items-center justify-center">
                    <img src={whatsappIcon} alt="WhatsApp" />
                </button>
                <button onClick={()=>navigate(`/update?userId=${user.id}`)} className="bg-zinc-400 dark:bg-zinc-200 h-10 w-10 rounded-full flex items-center justify-center">
                    <img src={editIcon} alt="Edit" />
                </button>
            </div>
            <div
                id="show-more"
                onClick={toggleNotes}
                className="bg-zinc-300 dark:bg-zinc-400 text-black dark:text-white p-2 rounded-lg w-full text-left mt-2 overflow-hidden"
                style={{ height: showFullNotes ? 'auto' : '38px' , whiteSpace: 'pre-wrap'}}
            >
                {user.notes}
            </div>
        </div>
    );
}
