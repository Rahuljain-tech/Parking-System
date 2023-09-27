export class Vehicle{
    constructor(vehName,owner)
    {
        this.id="vehicle-"+(new Date()).getTime();
        this.vehName=vehName;
        this.owner=owner;

    }
   
}
