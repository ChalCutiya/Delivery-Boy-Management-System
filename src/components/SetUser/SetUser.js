import React, { useState } from 'react';
import {user} from '../Extra/userSchema';
import { addUser } from '../Extra/curdUser';
export const SetUser = () => {
    const [formData, setFormData] = useState(user);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
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
        console.log(formData)
        addUser(formData);
        setFormData(user);
    };

    return (
        <div className="bg-zinc-100 dark:bg-zinc-900 min-h-screen">
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md max-w-md mx-auto my-4">
                <h2 className="text-xl text-center font-semibold text-zinc-900 dark:text-white mx-auto my-auto w-100">Delivery Details</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-200 dark:bg-zinc-700 dark:text-white dark:focus:ring-zinc-500 dark:border-zinc-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="number" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="number"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-200 dark:bg-zinc-700 dark:text-white dark:focus:ring-zinc-500 dark:border-zinc-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-200 dark:bg-zinc-700 dark:text-white dark:focus:ring-zinc-500 dark:border-zinc-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white">Select Delivery Slot</label>
                        <div className="flex space-x-2 text-white m-2">
                            <input
                                type="checkbox"
                                id="morning"
                                name="slots"
                                value="morning"
                                checked={formData.slots.includes('morning')}
                                onChange={handleSlotChange}
                                className="text-zinc-700 dark:text-zinc-300"
                            />
                            <label htmlFor="morning">Morning</label>

                            <input
                                type="checkbox"
                                id="evening"
                                name="slots"
                                value="evening"
                                checked={formData.slots.includes('evening')}
                                onChange={handleSlotChange}
                                className="text-zinc-700 dark:text-zinc-300"
                            />
                            <label htmlFor="evening">Evening</label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-zinc-500 hover:bg-zinc-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-zinc-200 dark:bg-zinc-500 dark:hover:bg-zinc-600 dark:focus:ring dark:focus:ring-zinc-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
