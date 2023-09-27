import { Vehicle } from "./Vehicle.js";
export class Car extends Vehicle{
    constructor(vehname,owner)
    {
        super(vehname,owner);
        this.type="car";

    }
}