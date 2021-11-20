const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
const date = d.getDate();
const year = d.getFullYear();
let day = days[d.getDay()];
let month = months[d.getMonth()];
let hour = d.getHours();
let minute = d.getMinutes();

if (hour > 12){
    hour = hour % 12;
}

if(minute < 10){
    minute = "0" + minute;
}

document.getElementById("currentDay").innerHTML = `${day}, ${month} ${date}. ${year}`
document.getElementById("timeHour").innerHTML = `It is currently ${hour}:${minute} PM`
//Above is all of the script for the dates to display on the page, using integrated Javascript functions for each variable of the current time.



function saveBtn(time) { // Function to change the html to update classes to change to blue once completed and to collect the input in the text box for that time.
    document.getElementById(`${time}Save`).addEventListener('click', event =>{

        if(document.getElementById(`${time}Event`).value == ''){
            console.log("ERROR: Nothing To Save.");

        } else {
            document.getElementById(`${time}Save`).innerHTML = '<li id=`${time}Save` class="btn-outline-info">Save</li>'
            console.log(document.getElementById(`${time}Event`).value);
            event.preventDefault();
        }

    })
}

// BELOW IS CALLING THE FUNCTION AND INSERTING IT INTO EACH DOCUMENT ID WITH PARAMATERS OF EACH TIME.
saveBtn(`9am`);
saveBtn(`10am`);
saveBtn(`11am`);
saveBtn(`12pm`);
saveBtn(`1pm`);
saveBtn(`2pm`);
saveBtn(`3pm`);
saveBtn(`4pm`);
saveBtn(`5pm`);

