let time = document.querySelector("#time")
let date = document.querySelector("#date")
setInterval( () =>{
    today()
},1000

)

function today (){


let today =new Date();
console.log(today);

const monthNames = ["Jan","feb","March", "Apr", "May",
 "June", " July", "Aug", "sep", "Oct", "Nov", "Dec"];

 const dayNames = ["Sat", "Sun", "Mon" ,"Tues", "Wed", "thur","Fri"];


 let currentTime = `${today.getHours()  < 9 ?  '0' + today.getHours() : today.getHours()} : ${today.getMinutes()   < 9 ?  '0' + today.getMinutes() : today.getMinutes()} : ${today.getSeconds()   < 9 ?  '0' + today.getSeconds() : today.getSeconds()}`;


 let currentDate = `${dayNames[today.getDay()+1]} , ${today.getDate()}  ${monthNames[today.getMonth()]} ${today.getFullYear()}`


 time.innerHTML = currentTime;
 date.innerHTML = currentDate;
}