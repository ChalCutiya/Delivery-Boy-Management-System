function getAllUsersHistory() {
    return JSON.parse(localStorage.getItem('allUsersHistory')) || {};
}

function setAllUsersHistory(allUsersHistory) {
    localStorage.setItem('allUsersHistory', JSON.stringify(allUsersHistory));
}

function getUserHistoryById(userId) {
    const allUsersHistory = getAllUsersHistory();
    return allUsersHistory[userId] || [];
}

function initializeUserHistory(userId) {
    const allUsersHistory = getAllUsersHistory();
    if (!allUsersHistory[userId]) {
        allUsersHistory[userId] = [];
        setAllUsersHistory(allUsersHistory);  
    }
}

const updateUserDeliveryHistory = (userId, day, slot, delivered) => {
    const allUsersHistory = getAllUsersHistory();
    const userHistory = allUsersHistory[userId] || [];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

  
    while (userHistory.length <= currentMonth) {
        userHistory.push(Array(62).fill(false)); 
    }

    const index = (day - 1) * 2 + (slot === 'morning' ? 0 : 1);
    userHistory[currentMonth][index] = delivered;

    allUsersHistory[userId] = userHistory;
    setAllUsersHistory(allUsersHistory);
};

export { getAllUsersHistory, initializeUserHistory, getUserHistoryById, updateUserDeliveryHistory, setAllUsersHistory };
