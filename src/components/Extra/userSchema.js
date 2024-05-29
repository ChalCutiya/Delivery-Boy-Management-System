const user = {
    id: String,
    name: String,
    number: String,
    location: {
        lat: Number,
        lon: Number
    },
    address: String,
    distance: String,
    slots: [],
    deliveryStatus:[Boolean,Boolean]
}

export {user};