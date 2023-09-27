export class Pass{
    constructor(vehicle,expiry,price)
    {
        this.id="pass-"+(new Date()).getTime();
        this.expiry=expiry;
        this.vehicle=vehicle;
        this.price=price;
    }
    print(){
        let passTprint=`
         <h1> Pass </h1>
         <div>
           <label>Pass Id:</label>
           <label>${this.id}</label>
         </div>
         <div>
           <label>Vehicle Id:</label>
           <label>${this.vehicle.vehName}</label>
         </div>
         <div>
           <label>Owner:</label>
           <label>${this.vehicle.owner.name}</label>
         </div>
         <div>
           <label>Expiry:</label>
           <label>${this.expiry}</label>
         </div>
        `
        let ticket=document.getElementById("ticket")
        ticket.innerHTML=passTprint
    }
}