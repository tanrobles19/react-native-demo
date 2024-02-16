export default class Place {
    constructor(id, title, imageURL, address, location) {
        this.id = id;
        // this.id = new Date().toString + Math.random().toString;
        this.title = title;
        this.imageURL = imageURL;
        this.address = address;
        // this.location = { lat: location.lat, lng: location.lng };
        this.location = location;
    }
}