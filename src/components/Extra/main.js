
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let location = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                };
                resolve(location);
            }, (error) => {
                reject(error);
            });
        } else {
            reject("Geolocation is not supported by this browser.");
        }
    });
}



function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180; // Convert degrees to radians
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}


function callNumber(phoneNumber) {
    window.location.href = "tel:" + phoneNumber;
}


function openWhatsAppChat(phoneNumber) {
    window.open("https://wa.me/" + phoneNumber, "_blank");
}

function openGoogleMaps(lat, lon) {
    window.open("https://www.google.com/maps/dir/?api=1&destination=" + lat + "," + lon, "_blank");
}


// // Example usage
// getCurrentLocation();
// console.log("Distance between coordinates: " + calculateDistance(40.7128, -74.0060, 34.0522, -118.2437) + " km");
// callNumber("+1234567890");
// openWhatsAppChat("+1234567890");
// openGoogleMaps(40.7128, -74.0060);


export { getCurrentLocation, calculateDistance, callNumber, openWhatsAppChat, openGoogleMaps };

