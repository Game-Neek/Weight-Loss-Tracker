const calendar=document.querySelector("calendar");
const eventModal = document.getElementById("eventModal");
const closeModal = document.querySelector(".close-btn");
const saveEventbtn = document.getElementById("saveEventBtn");
const deleteEventBtn = document.getElementById("deleteEventBtn");
const eventTitle= document.getElementById("eventTitle");
const eventDesc = document.getElementById("eventDesc");

let selectedDate = null;
let events = JSON.parse(localStorage.getItem("events")) || {};
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
            days: date.getDate(),
        })
    }
    return calendarParams
} 
//generate Calendar for each month
let calendarEl;               // will hold the DOM node

document.addEventListener('DOMContentLoaded', () => {
  calendarEl = document.querySelector('.calendar');
  if (!calendarEl) {
    console.error('Calendar container ".calendar" not found');
    return;
  }
  generateCalendar();         
});


function generateCalendar() {
  if (!calendarEl) return;    // defensive guard

  calendarEl.innerHTML = "";

  if (!Array.isArray(yearDetails) || yearDetails.length === 0) {
    yearDetails = getYearlyCalendarDetails();
  }

  const monthObj = yearDetails[currentMonthIndex];
  const daysInMonth = monthObj.days;

  const month = document.createElement('div');
  month.classList.add('month');

  // Header
  const monthHead = document.createElement('div');
  monthHead.classList.add('month-head');
  monthHead.innerHTML = `
    <button id="prevBtn" type="button">Previous</button>
    <span>${monthObj.month} ${monthObj.year}</span>
    <button id="nextBtn" type="button">Next</button>
  `;
  calendarEl.appendChild(monthHead);

  monthHead.querySelector('#prevBtn').addEventListener('click', showPreviousMonth);
  monthHead.querySelector('#nextBtn').addEventListener('click', showNextMonth);

  // Days
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.classList.add('day');
    day.textContent = i;

    const key = `${currentMonthIndex}_${i}`;
    if (events[key]) {
      const marker = document.createElement('div');
      marker.classList.add('event-marker');
      day.appendChild(marker);

      day.addEventListener('mouseenter', (e) => showTooltip(e, events[key].title));
      day.addEventListener('mouseleave', hideTooltip);
    }

    day.addEventListener('click', () => openModal(currentMonthIndex, i));
    month.appendChild(day);
  }

  calendarEl.appendChild(month);
}


//Handle month navigation
function showPreviousMonth(){
    if(currentMonthIndex>0){
        currentMonthIndex-=1;
        generateCalendar();

    }
}

function showNextMonth(){
    if(currentMonthIndex < 11){
        currentMonthIndex+=1;
        generateCalendar();

    }
}

//tooltip function
function showTooltip(e,title){
    tooltip.textContent = title;
    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.top = `${e.pageY + 10}px`;
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "1";
}

function hideTooltip(){
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = "0";   
}

function openModal(currentMonth,date){
    selectedDate = `${currentMonth}_${date}`;
    eventTitle.value = events[`${currentMonth}_${date}`]?.title || "";
    eventDesc.value=events[`${currentMonth}_${date}`]?.description || "";
    eventModal.style.display = "block";

}

function closeModalWindow(){
    eventModal.style.display = "none";
    selectedDate = null;
}

function saveEvent(){
    if(selectedDate && eventTitle.value.trim()){
        events[selectedDate]={
            title:eventTitle.value.trim(),
            description: eventdesc.value.trim(),

        };
        localStorage.setItem("events", JSON.stringify(events));
        generateCalendar();
        closeModalWindow();

    }

}

function deleteEvent(){
    if(selectedDate){
        delete events[selectedDate];
        localStorage.setItem("events", JSON.stringify(events));
        generateCalendar();
        closeModalWindow();
    }
}

//Close modal button
closeModal.addEventListener("click",closeModalWindow);
//save button(inside modal)
saveEventbtn.addEventListener("click",saveEvent);
//delete event 
deleteEventBtn.addEventListener("click", deleteEvent);

//if user clicks on anywhere except the input close the modal
window.addEventListener("click", (e)=> {
    if(e.target === eventModal) 
        closeModalWindow();
});

window.onload = () => {
    generateCalendar();
}



