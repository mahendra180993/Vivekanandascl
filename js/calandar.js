const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");
const calendarDays = document.getElementById("calendarDays");

let currentDate = new Date();

// 🎉 Indian Festivals with Images
const festivals = {
    "2025-07-01": [{ name: "National Doctor Day" }],
    "2025-07-05": [{ name: "Van Mahotsav" }],
    "2025-07-12": [{ name: "Paper bag day" }],
    "2025-07-19": [{ name: "Leaf painting activity" }],
    "2025-07-28": [{ name: "Go Green" }],
    "2025-08-08": [{ name: "Quite of India Movement, Quiz for higher grades" }],
    "2025-08-09": [{ name: "Raksha Bandhan" }],
    "2025-08-15": [{ name: "Independence Day - Holiday" }],
    "2025-08-16": [{ name: "Monologue" }],
    "2025-08-23": [{ name: "Food fest of India" }],
    "2025-08-26": [{ name: "Ganesh Chaturthi - Holiday" }],
    "2025-08-30": [{ name: "State Attires" }],
    "2025-09-05": [{ name: "Teachers Day Celebration" }],
    "2025-09-08": [{ name: "International Literacy Day (Debate)" }],
    "2025-09-14": [{ name: "Hindi Diwas Nukkad Nataak" }],
    "2025-09-15": [{ name: "Engineers Day (Special Assembly)" }],
    "2025-09-20": [{ name: "Creativity Arts" }],
    "2025-09-22": [{ name: "Navratri Celebrations" }],
    "2025-10-02": [{ name: "Gandhi Jayanti" }],
    "2025-10-11": [{ name: "Double your happiness by sharing" }],
    "2025-10-18": [{ name: "Diwali Celebrations" }],
    "2025-10-25": [{ name: "Disney Characters" }],
    "2025-11-08": [{ name: "Grammar Story" }],
    "2025-11-14": [{ name: "Children's Day Celebrations" }],
    "2025-11-16": [{ name: "Pen Down Story with Pictures" }],
    "2025-11-22": [{ name: "Review of Book" }],
    "2025-11-29": [{ name: "Healthy Life Display and Talk Show" }],
    "2025-12-04": [{ name: "World Life Construction Day (Seminar)" }],
    "2025-12-13": [{ name: "Cotton Dump and Bubble Print" }],
    "2025-12-23": [{ name: "Christmas Celebrations" }],
    "2025-12-27": [{ name: "Salad Making" }],
    "2026-01-03": [{ name: "Savitribai Phule Jayanti Epitome" }],
    "2026-01-12": [{ name: "Pongal Rangoli and Kite Flying Competitions" }],
    "2026-01-24": [{ name: "National Girl Child Day" }],
    "2026-01-26": [{ name: "Republic Day" }],
    "2026-02-08": [{ name: "Sand Drawing" }],
    "2026-02-15": [{ name: "Parents Day" }],
    "2026-02-28": [{ name: "National Science Day (Display for Working Model)" }],
    "2026-03-01": [{ name: "Final Examinations" }]
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
