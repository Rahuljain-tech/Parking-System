import { Faculty } from "./Faculty.js";
import { Student } from "./Student.js";
import { Cycle } from "./Cycle.js";
import { Bike } from "./Bike.js";
import { Car } from "./Car.js";
import { DailyPass } from "./DailyPass.js";
import { MonthlyPass } from "./MonthlyPass.js";
import { YearlyPass } from "./Yearly.js";

const users=[]
const vehicles=[]
const passes=[]
document.addEventListener("DOMContentLoaded",()=>{

    let userSubmitButton=document.getElementById("userSubmit");
    userSubmitButton.addEventListener("click",registerUser);
    let vehicleSubmitButton=document.getElementById("vehicleSubmit");
    vehicleSubmitButton.addEventListener("click",registerVehicle);
})

const registerUser =(e)=> {
    e.preventDefault()
    let userName=document.getElementById("uName").value;
    let userNumber=document.getElementById("uContact").value;
    let userRole=document.getElementById("uRole").value;
    let user=null
    switch(userRole){
        case "faculty":
            user=new Faculty(userName,userNumber)
            break;
        case "student":
            user=new Student(userName,userNumber)
            break;          
    }
    users.push(user)
    console.log(users[users.length-1])
}

const registerVehicle =(e)=>{
    e.preventDefault()
    let vehicleName=document.getElementById("vehicleName").value;
    let owner=users[users.length-1];
    let vehicleType=document.getElementById("vehicleType").value;
    let vehicle=null;
    switch(vehicleType){
        case "cycle":
            vehicle=new Cycle(vehicleName,owner)
            break;
        case "bike":
            vehicle=new Bike(vehicleName,owner)
            break;    
        case "car":
            vehicle=new Car(vehicleName,owner)
            break;
    }
    vehicles.push(vehicle)
    console.log(vehicles[vehicles.length-1])
    showPassChoice(vehicle)
}
const showPassChoice = (vehicle)=>{
    let dailyPass= new DailyPass(vehicle)
    let monthlyPass = new MonthlyPass(vehicle)
    let yearlyPass = new YearlyPass(vehicle)
    let passChoice=document.getElementById("passChoice")

    passChoice.innerHTML=""
    let h1=document.createElement("H1")
    h1.innerHTML="Pass Choice"

    passChoice.appendChild(h1)
    let button=document.createElement("INPUT")
    button.setAttribute("type","button")
    button.value="Daily:"+dailyPass.price
    button.addEventListener("click",() => {
        passes.push(dailyPass)
        dailyPass.print()
    })


    passChoice.appendChild(button)
    button =document.createElement("INPUT")
    button.setAttribute("type","button")
    button.value="Monthly:"+monthlyPass.price
    button.addEventListener("click",()=>{
        passes.push(monthlyPass)
        monthlyPass.print()
    })


    passChoice.appendChild(button)
    button= document.createElement("INPUT")
    button.setAttribute("type","button")
    button.value="Yearly:"+yearlyPass.price
    button.addEventListener("click",()=>{
        passes.push(yearlyPass)
        yearlyPass.print()
    })
    passChoice.appendChild(button)
}
