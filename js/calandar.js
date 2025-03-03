const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");
const calendarDays = document.getElementById("calendarDays");

let currentDate = new Date();

// 🎉 Indian Festivals with Images
const festivals = {
    "2025-03-17": [{ name: "Chhatrapati Shivaji Maharaj Jayanti", image: "img/chhatrapati_shivaji.jpg" }],
    "2025-03-14": [{ name: "Holi", image: "img/holi.webp" }],
    "2025-03-30": [{ name: "Ugadi", image: "img/Ugadi_Pacchadi.jpg" }],

    "2025-04-06": [{ name: "Rama Navami", image: "img/ram-navmi.jpg" }],
    "2025-04-14": [{ name: "Dr. B. R. Ambedkar Jayanti", image: "img/mbedkar.jpeg" }],
    "2025-04-18": [{ name: "Good Friday", image: "img/goodfriday.jpg" }],

    "2025-08-09": [{ name: "Raksha Bandhan (Rakhi)", image: "img/raksha.webp" }],
    "2025-08-15": [{ name: "Independence Day", image: "img/aug15.webp" }],

    "2025-10-02": [
        { name: "Gandhi Jayanti", image: "img/gandi.jpg" },
        { name: "Dussehra", image: "img/devi.jpeg" }
    ],

    "2025-11-01": [{ name: "Diwali", image: "img/diwali.png" }],
    "2025-11-03": [{ name: "Bhai Dooj", image: "img/bhai_dooj.png" }],

    "2025-12-25": [{ name: "Christmas", image: "img/christmas.webp" }]
};

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  monthYear.innerText = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(currentDate);

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  calendarDays.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
      calendarDays.innerHTML += `<div class="calendar-day empty"></div>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
      let dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const isToday = new Date().toDateString() === new Date(year, month, day).toDateString();
      const festivalList = festivals[dateKey] || [];

      let festivalHTML = "";
      if (festivalList.length > 0) {
          festivalList.forEach(festival => {
              festivalHTML += `
                  <img src="${festival.image}" alt="${festival.name}" class="festival-img">
                  <span class="festival-name">${festival.name}</span>
              `;
          });
      }

      calendarDays.innerHTML += `
          <div class="calendar-day ${isToday ? "today" : ""} ${festivalList.length > 0 ? "festival" : ""}">
              ${day}
              ${festivalHTML}
          </div>`;
  }
}

// Navigation buttons
prevMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
