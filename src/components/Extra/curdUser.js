import { initializeUserHistory, updateUserDeliveryHistory } from "./deliveryHistory";
import { capitalizeEachWordFirst } from "./extrafunc";

function getAllUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function addUser(newUser) {
    let users = getAllUsers();
    newUser.id = "GO" + Math.random().toString(36).slice(2);
    newUser.name= capitalizeEachWordFirst(newUser.name);
    newUser.address= capitalizeEachWordFirst(newUser.address);
    users.push(newUser);
    updateUsers(users);
    initializeUserHistory(newUser.id);
}

function updateUsers(updatedUsers) {
    localStorage.setItem('users', JSON.stringify(updatedUsers));
}

function getUserDataById(userId){
    let users = getAllUsers();
    let index = users.findIndex(user => user.id === userId);
    return users[index];
}
function updateUser(updatedUser) {
    updatedUser.name= capitalizeEachWordFirst(updatedUser.name);
    updatedUser.address= capitalizeEachWordFirst(updatedUser.address);
    let users = getAllUsers();
    let index = users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
        users[index] = updatedUser;
        updateUsers(users);
        return true;
    }
    return false;
}

function deleteUser(userId) {
    let users = getAllUsers();
    let updatedUsers = users.filter(user => user.id !== userId);
    updateUsers(updatedUsers);
}


const ismorning = () => {
    const now = new Date();
    const hour = now.getHours();
    return (hour >= 0 && hour < 16) ? 'morning' : 'evening';
}

const getUndeliveredUsers = () => {
    updateCurrentDate();
    const users = getAllUsers();
    const undeliveredUsers = users.filter(user => {
        const vakt = ismorning();
        if (user.slots.includes(vakt)) {
            const index = (vakt === 'morning') ? 0 : 1;
            return !user.deliveryStatus[index];
        }
        return false;
    });
    return undeliveredUsers;
};


const resetDeliveryStatus = () => {
    const users = getAllUsers();
    users.forEach(user => {
        user.deliveryStatus = [false, false];
    });
    updateUsers(users);
}

const updateCurrentDate = () => {
    const now = new Date();
    const currentDate = JSON.parse(localStorage.getItem('currentDate')) || -1;
    if (currentDate !== now.getDate()) {
        localStorage.setItem('currentDate', JSON.stringify(now.getDate()));
        resetDeliveryStatus();
    }
}

/// here i will also update user history in year history
const updateDeliveryStatus = (user) => {
    const vakt = ismorning();
    const now = new Date();
    const currentdate = now.getDate();
    
    if (user.slots.includes(vakt)) {
        const index = (vakt === 'morning') ? 0 : 1;
        if (!user.deliveryStatus[index]) {
            user.deliveryStatus[index] = true;
            updateUser(user);
            updateUserDeliveryHistory(user.id,currentdate,vakt,true);
        } else {
            console.log(`Delivery already marked as delivered for ${vakt} slot.`);
        }
    }
};


export {
    addUser, updateUser, deleteUser, getAllUsers, getUndeliveredUsers, updateDeliveryStatus, resetDeliveryStatus,updateCurrentDate,getUserDataById
}