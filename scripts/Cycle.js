import { Vehicle } from "./Vehicle.js";
export class Cycle extends Vehicle{
    constructor(vehname,owner)
    {
        super(vehname,owner);
        this.type="cycle";

    }
}