import React, { useState } from 'react';
import { getUserDataById, updateUser } from '../Extra/curdUser';
import { useLocation } from 'react-router-dom';

export const UpdateUser = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get('userId');
    const user = getUserDataById(userId);

    const [formData, setFormData] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSlotChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setFormData(prevState => ({
                ...prevState,
                slots: [...prevState.slots, value]
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                slots: prevState.slots.filter(slot => slot !== value)
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const updated = updateUser(formData);
        if (updated) window.alert('User Updated');
    };

    const handleResize = (e) => {
        const heightLimit = 150; 
        e.target.style.height = "";
        e.target.style.height = Math.min(e.target.scrollHeight, heightLimit) + "px"; 
    };

    return (
        <div className="bg-black min-h-screen">
            <div className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto m-2">
                <h2 className="text-xl text-center font-semibold text-zinc-900 mx-auto my-auto w-100">Update User Details</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 p-1 px-2 block w-full rounded-md border-zinc-700 shadow-sm focus:border-zinc-400 focus:ring-0 dark:border-zinc-700 dark:focus:border-zinc-400"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="number" className="block text-sm font-medium text-zinc-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="number"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            className="mt-1 p-1 px-2 block w-full rounded-md border-zinc-700 shadow-sm focus:border-zinc-400 focus:ring-0 dark:border-zinc-700 dark:focus:border-zinc-400"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-zinc-700">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 p-1 px-2 block w-full rounded-md border-zinc-700 shadow-sm focus:border-zinc-400 focus:ring-0 dark:border-zinc-700 dark:focus:border-zinc-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black">Select Delivery Slot</label>
                        <div className="flex space-x-2 m-2">
                            <input
                                type="checkbox"
                                id="morning"
                                name="slots"
                                value="morning"
                                checked={formData.slots.includes('morning')}
                                onChange={handleSlotChange}
                                className="text-zinc-700"
                            />
                            <label htmlFor="morning">Morning</label>

                            <input
                                type="checkbox"
                                id="evening"
                                name="slots"
                                value="evening"
                                checked={formData.slots.includes('evening')}
                                onChange={handleSlotChange}
                                className="text-zinc-700"
                            />
                            <label htmlFor="evening">Evening</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="cost1Meal" className="block text-sm font-medium text-zinc-700">
                            Cost per Meal
                        </label>
                        <input
                            type="number"
                            id="cost1Meal"
                            name="cost1Meal"
                            value={formData.cost1Meal}
                            onChange={handleChange}
                            className="mt-1 p-1 px-2 block w-full rounded-md border-zinc-700 shadow-sm focus:border-zinc-400 focus:ring-0 dark:border-zinc-700 dark:focus:border-zinc-400"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-zinc-700">
                            Notes
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            onInput={handleResize}
                            className="mt-1 p-1 px-2 block w-full rounded-md border-zinc-700 shadow-sm focus:border-zinc-400 focus:ring-0 dark:border-zinc-700 dark:focus:border-zinc-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-zinc-500 hover:bg-zinc-600 text-white font-medium py-2 px-2 rounded-md focus:outline-none focus:ring-0 dark:bg-zinc-500 dark:hover:bg-zinc-600"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};
