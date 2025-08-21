const calendar=document.querySelector("calendar");
const eventModal = document/getElementById("eventModal");
const closeModal = document.querySelector(".close-btn");
const saveEventbtn = document.getElementById("saveEventBtn");
const deleteEventBtn = document.getElementById("deleteEventBtn");
const eventTitle= document.getElementById("eventTitle");
const eventDescs = document.getElementById("eventDesc");

let selectedDate = null;
let events = JSON.parse(locakStorage.getItem("events")) || {};
let yearDetails = [];
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonthIndex = currentDate.getMonth();
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.appendChild(tooltip);

//Generates a whole year object
const getYearlyCalendarDetails = ()=>{
    let calendarParams = [];
    for(let month=0;month<12;month++){
        let date = new Date(currentYear, month + 1, 0);
        const monthName = date.toLocaleString("default", {month:"long"});
        calendarParams.push({
            year: currentYear,
            month: monthName,
            days: date.getDate()
        })
    }
    return calendarParams
} 
//generate Calendar for each month
function generateCalendar(){
    calendar.innerHTML = "";
    if(yearDetails.length == 0){
        yearDetails = getYearlyCalendarDetails();
    }
    const monthObj = yearDetails[currentMonthIndex];
    const daysInMonth = monthObj.days;
    const month = document.createElement("div");
    month.classList.add("month")
    //Head Part
    const monthHead = document.createElement("div");
    monthHead.classList.add("month-head");
    monthHead.innerHTML= `<button id="prevbtn>Previous</button>"
    <span>${monthObj.month} ${monthObj.year}</span>
    <button id="nextBtn">Next</button>`;
    calendar.appendChild(monthHead);
    monthHead.querySelector("#prevBtn").addEventListener("click", showPreviousMonth);
    monthHead.querySelector("#nextBtn").addEventListener("click",showNextMonth);
    for(let i = 1; i<= daysInMonth; i++){
        const day = document.createElement("div");
        day.classList.add("day");
        day.textContent = i;
        //mark the day with event 
    }
}
