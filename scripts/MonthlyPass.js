import { Pass } from "./Pass.js";
export class MonthlyPass extends Pass {
    constructor(vehicle) {
        let creationDateTime = new Date();
       creationDateTime.setMonth(creationDateTime.getMonth() + 1);
        let price=0
        switch (vehicle.type) {
            case "cycle":
                price = 5;
                break;
            case "bike":
                price = 10;
                break;
            case "car":
                price = 50;
                break;
        }
        super(vehicle, creationDateTime,price);
        this.type = "monthly";
    }
}