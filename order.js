class Order {
    constructor(id, from, to, firstOrderLongitude, firstOrderLatitude, secondOrderLongitude, secondOrderLatitude, distance) {
        this.id = id;
        this.from = from;
        this.to = to;
        this.locationA = new Location(firstOrderLongitude,firstOrderLatitude);
        this.locationB = new Location(secondOrderLongitude,secondOrderLatitude);
        this.distance = distance;
    }
}