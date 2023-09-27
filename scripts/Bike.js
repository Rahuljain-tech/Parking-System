import { Vehicle } from "./Vehicle.js";
export class Bike extends Vehicle{
    constructor(vehname,owner)
    {
        super(vehname,owner);
        this.type="bike";

    }
}