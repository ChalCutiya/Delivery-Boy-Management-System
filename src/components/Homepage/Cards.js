import React from 'react'
import location from '../Extra/icons/location.svg'
import phone from '../Extra/icons/phone.svg'
import whatsapp from '../Extra/icons/whatsapp.svg'
import iconTrue from '../Extra/icons/true.svg'
import { getCurrentLocation, callNumber, openWhatsAppChat, openGoogleMaps } from '../Extra/main';
import { updateDeliveryStatus, updateUser } from '../Extra/curdUser';
import { Link } from 'react-router-dom'

export const Cards = ({ user }) => {
    const setLocation = async () => {
        const input = window.confirm("Is Customer lived here?");
        if (input) {
            user.location = await getCurrentLocation();
            updateUser(user);
            window.location.reload();
        }
    }

    const handleDelivered = () => {
        const input = window.confirm("Are You Delivered to " + user.name);
        if (input) {
            updateDeliveryStatus(user);
            window.location.reload();
        }
    }

    return (
    
            <div id="card" className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-4 flex items-center justify-between m-2 my-2" >
                <Link to={`/history/${user.id}`}>
                <div className="flex flex-col justify-center">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">{user.name}</span>
                    <span className="text-zinc-600 dark:text-zinc-400">{user.distance}</span>
                </div>
                </Link>
                <div className="flex items-center">
                    <button className="w-8 h-8 bg-green-500 rounded-full mr-2 flex items-center justify-center" onClick={() => callNumber(user.number)}>
                        <img src={phone} alt="icon" />
                    </button>
                    <button className="w-8 h-8 bg-green-500 rounded-full mr-2 flex items-center justify-center" onClick={() => openWhatsAppChat(user.number)} >
                        <img src={whatsapp} alt="icon" />
                    </button>
                    {
                        (user.location.lat) ?
                            (<button className="w-8 h-8 bg-blue-500 rounded-full mr-2 flex items-center justify-center" onClick={() => openGoogleMaps(user.location.lat, user.location.lon)}>
                                <img src={location} height={15} width={15} alt="icon" />
                            </button>) :
                            (<button className="w-8 h-8 bg-red-500 rounded-full mr-2 flex items-center justify-center" onClick={() => setLocation()}>
                                <img src={location} height={15} width={15} alt="icon" />
                            </button>)
                    }
                    <button className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center" onClick={() => handleDelivered()} >
                        <img src={iconTrue} alt="icon" />
                    </button>
                </div>
            </div>
    )
}
