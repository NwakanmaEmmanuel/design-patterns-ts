interface Transport {
    deliver(cargo: string): void;
    costPerKm(): number;
}

class Truck implements Transport {
    deliver(cargo: string): void {
        console.log(`🚚 Delivering ${cargo} by road`);
    }

    costPerKm(): number {
        return 2;
    }
}

class Ship implements Transport {
    deliver(cargo: string): void {
        console.log(`🚢 Delivering ${cargo} by sea`);
    }

    costPerKm(): number {
        return 5;
    }
}

abstract class Logistics {

    abstract createTransport(): Transport;

    planDelivery(cargo: string): void {
        console.log(`Planning delivery of ${cargo}...`);

        const transport = this.createTransport();

        transport.deliver(cargo);

        console.log("Delivery logged.");
    }

    estimateCost(km: number): number {
        const transport = this.createTransport();

        return km * transport.costPerKm();
    }
}

class RoadLogistics extends Logistics {

    override createTransport(): Transport {
        return new Truck();
    }

}

class SeaLogistics extends Logistics {

    override createTransport(): Transport {
        return new Ship();
    }

}

new RoadLogistics().planDelivery("cement");

console.log(
    new RoadLogistics().estimateCost(100)
);

new SeaLogistics().planDelivery("oil");

console.log(
    new SeaLogistics().estimateCost(100)
);