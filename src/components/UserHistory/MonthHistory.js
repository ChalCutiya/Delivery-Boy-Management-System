import React from 'react';

const MonthHistory = ({ monthName, monthData }) => {
    const daysInMonth = monthData.length / 2; 
    const trueCount = monthData.filter(item => item === true).length;

    return (
        <div className="p-4 bg-zinc-800 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{monthName}</h2>
                <div>Total: {trueCount}</div>
            </div>
           
            <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: daysInMonth }, (_, dayIndex) => {
                    const morningIndex = dayIndex * 2;
                    const eveningIndex = dayIndex * 2 + 1;
                    const morningDelivery = monthData[morningIndex];
                    const eveningDelivery = monthData[eveningIndex];

                    return (
                        <div key={dayIndex} className="flex flex-col items-center">
                            <div className="text-center">{dayIndex + 1}</div>
                            <div className="relative w-8 h-8">
                                <div
                                    className={`absolute inset-y-0 left-0 w-1/2 ${morningDelivery ? 'bg-green-500' : 'bg-white'}`}
                                ></div>
                                <div
                                    className={`absolute inset-y-0 right-0 w-1/2 ${eveningDelivery ? 'bg-green-500' : 'bg-white'}`}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MonthHistory;
