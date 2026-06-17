const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");
const calendarDays = document.getElementById("calendarDays");

const ACADEMIC_YEAR_START = new Date(2026, 2, 1);
const ACADEMIC_YEAR_END = new Date(2027, 1, 1);
let currentDate = new Date(2026, 5, 1);

const festivals = {
    "2026-03-18": [{ name: "UGADI CELEBRATION" }],
    "2026-03-19": [{ name: "HOLIDAY ON ACCOUNT OF UGADI" }],
    "2026-03-20": [{ name: "SPECIAL ASSEMBLY RAMZAN" }],
    "2026-03-21": [{ name: "HOLIDAY ON ACCOUNT OF RAMZAN" }],
    "2026-03-26": [{ name: "SRI RAMA NAVAMI CELEBRATION" }],
    "2026-03-27": [{ name: "HOLIDAY SRI RAMA NAVAMI" }],
    "2026-03-28": [{ name: "ART INTEGRATION" }],
    "2026-04-03": [{ name: "GOOD FRIDAY" }],
    "2026-04-04": [{ name: "Graduation day (PP2)" }],
    "2026-04-11": [{ name: "Pre-pare maps with cereals (Grade 6 to 9)" }, { name: "Spell bee Competition (G1 to G9)" }],
    "2026-04-14": [{ name: "Dr.B.R Ambedkar jayanthi" }],
    "2026-04-18": [{ name: "Hand writing test (G3 to G9)" }, { name: "Sunshine Swimming Day Gala (Pre-Primary to G2)" }],
    "2026-04-24": [{ name: "SUMMER VACATION" }],
    "2026-06-10": [{ name: "School Reopen after summer vacation" }],
    "2026-06-13": [{ name: "Second Saturday" }],
    "2026-06-20": [{ name: "Father Day Preparation greeting & Yoga day celebrations" }],
    "2026-06-26": [{ name: "Holiday on account of MUHARRAM" }],
    "2026-06-27": [{ name: "(G1 to IX Plantation) (Green Day Celebration for Nur-G2) GO GREEN" }, { name: "Clay modeling (G3-G6)" }, { name: "Puppet making (G6-G7)" }, { name: "Mask making (G8-G9)" }],
    "2026-07-04": [{ name: "Investiture ceremony" }],
    "2026-07-11": [{ name: "PTM (CBSE )" }],
    "2026-07-13": [{ name: "PERIODIC TEST-II" }],
    "2026-07-14": [{ name: "PERIODIC TEST-II" }],
    "2026-07-15": [{ name: "PERIODIC TEST-II" }],
    "2026-07-16": [{ name: "PERIODIC TEST-II" }],
    "2026-07-18": [{ name: "CBP OR ACTIVITY" }],
    "2026-07-25": [{ name: "HOLIDAY (Toli Ekadasi) Local" }],
    "2026-07-31": [{ name: "Special day celebrations for (nur-g2) theme based on cartoon characters with speech" }],
    "2026-08-01": [{ name: "Debate competition" }],
    "2026-08-03": [{ name: "P.T-II (G10)" }],
    "2026-08-04": [{ name: "P.T-II (G10)" }],
    "2026-08-05": [{ name: "P.T-II (G10)" }],
    "2026-08-08": [{ name: "PTM" }],
    "2026-08-10": [{ name: "BONALU HOLIDAY" }],
    "2026-08-13": [{ name: "PAINTING COMPETITIONS BY CULTURAL CLUB" }],
    "2026-08-14": [{ name: "FOLK SONG COMPETITION BY CULTURAL CLUB" }],
    "2026-08-15": [{ name: "INDEPENDENCE DAY CELEBRATIONS" }],
    "2026-08-17": [{ name: "P.T-II (G1-G9)" }],
    "2026-08-18": [{ name: "P.T-II (G1-G9)" }],
    "2026-08-19": [{ name: "P.T-II (G1-G9)" }],
    "2026-08-22": [{ name: "STORY TELLING THEME WISE (G1 - G5)" }],
    "2026-08-26": [{ name: "HOLIDAY MILAD-UN-NABI" }],
    "2026-08-27": [{ name: "Raksha Bandhan CELEBRATION" }],
    "2026-08-28": [{ name: "Raksha Bandhan" }],
    "2026-08-29": [{ name: "Story Telling theme wise (G6-G9)" }, { name: "Sports Day Celebrations" }],
    "2026-09-03": [{ name: "Janmashtami CELEBRATIONS" }],
    "2026-09-04": [{ name: "HOLIDAY Janmashtami" }],
    "2026-09-05": [{ name: "Teachers Day" }],
    "2026-09-12": [{ name: "Hindi Diwas" }],
    "2026-09-14": [{ name: "HOLIDAY GANESH CHATURTHI" }],
    "2026-09-17": [{ name: "Hyderabad Liberation day" }],
    "2026-09-19": [{ name: "IX-BOOK REVIEW VI-VIII - INDIAN CULTURE FESTIVALS ,DANCE food" }],
    "2026-09-26": [{ name: "III-V CROPS OF INDIAN LIFE SKILL ACTIVITY (NUR-G2)" }],
    "2026-10-01": [{ name: "TERM-1 EXAMS S.A-1 EXAMS" }],
    "2026-10-02": [{ name: "TERM-1 EXAMS S.A-1 EXAMS" }],
    "2026-10-03": [{ name: "TERM-1 EXAMS S.A-1 EXAMS" }],
    "2026-10-04": [{ name: "TERM-1 EXAMS S.A-1 EXAMS" }],
    "2026-10-05": [{ name: "TERM-1 EXAMS S.A-1 EXAMS" }],
    "2026-10-06": [{ name: "TERM-1 EXAMS S.A-1 EXAMS" }],
    "2026-10-07": [{ name: "TERM-1 EXAMS S.A-1 EXAMS" }],
    "2026-10-08": [{ name: "TERM-1 EXAMS S.A-1 EXAMS" }],
    "2026-10-09": [{ name: "TERM-1 EXAMS S.A-1 EXAMS" }],
    "2026-10-10": [{ name: "DUSSEHRA VACATION" }],
    "2026-10-11": [{ name: "DUSSEHRA VACATION" }],
    "2026-10-12": [{ name: "DUSSEHRA VACATION" }],
    "2026-10-13": [{ name: "DUSSEHRA VACATION" }],
    "2026-10-14": [{ name: "DUSSEHRA VACATION" }],
    "2026-10-15": [{ name: "DUSSEHRA VACATION" }],
    "2026-10-16": [{ name: "DUSSEHRA VACATION" }],
    "2026-10-17": [{ name: "DUSSEHRA VACATION" }],
    "2026-10-18": [{ name: "DUSSEHRA VACATION" }],
    "2026-10-19": [{ name: "DUSSEHRA VACATION" }],
    "2026-10-20": [{ name: "DUSSEHRA VACATION" }],
    "2026-10-21": [{ name: "DUSSEHRA VACATION" }],
    "2026-10-22": [{ name: "DUSSEHRA VACATION" }],
    "2026-10-31": [{ name: "Nukkad Natak (G6-G8)" }, { name: "Role Play (G1-G5)" }, { name: "Scrap Book Magicians (G9)" }],
    "2026-11-07": [{ name: "SPORTS DAY NUR-G2" }],
    "2026-11-13": [{ name: "HOUSE WISE SPORTS Competition" }],
    "2026-11-14": [{ name: "PTM AND HOUSE WISE SPORTS Competition FINAL" }],
    "2026-11-21": [{ name: "NATIONAL Integration" }],
    "2026-11-28": [{ name: "STONE PAINTING CREATIVE ART" }],
    "2026-12-12": [{ name: "ART INTEGRATION PROJECTS" }],
    "2026-12-19": [{ name: "DISPLAY SUBJECT WISE" }],
    "2026-12-23": [{ name: "CHRISTMAS CELEBRATIONS" }],
    "2026-12-24": [{ name: "CHRISTMAS HOLIDAY" }],
    "2026-12-25": [{ name: "CHRISTMAS HOLIDAY" }],
    "2027-01-09": [{ name: "PTM" }],
    "2027-01-12": [{ name: "PONGAL CELEBRATIONS" }],
    "2027-01-13": [{ name: "PONGAL HOLIDAYS" }],
    "2027-01-14": [{ name: "PONGAL HOLIDAYS" }],
    "2027-01-15": [{ name: "PONGAL HOLIDAYS" }],
    "2027-01-16": [{ name: "PONGAL HOLIDAYS" }],
    "2027-01-23": [{ name: "FOOD FEST" }],
    "2027-02-13": [{ name: "PTM" }],
    "2027-02-15": [{ name: "G8 / IX EXAMS" }],
    "2027-02-20": [{ name: "IDEAS OF SCIENCE PROJECT" }],
    "2027-02-27": [{ name: "DISPLAY OF SCIENCE PROJECTS" }],
};

const monthThemes = {
    "2026-03": "PEAK PERFORMANCE",
    "2026-04": "JOURNEY OF GROWTH",
    "2026-06": "GREEN WARRIOR & WELLNESS",
    "2026-07": "VOICE OF EXPRESSIONS",
    "2026-08": "CREATIVE EXPRESSIONS",
    "2026-09": "INNOVATIONS ACHIEVERS",
    "2026-10": "CREATE MAGIC",
    "2026-11": "WAVES OF INNOVATION",
    "2026-12": "SEASONS OF SYNERGY",
    "2027-01": "PATH OF EXCELLENCE",
    "2027-02": "EDGE OF FOCUS",
};

function isWithinAcademicYear(date) {
    return date >= ACADEMIC_YEAR_START && date <= ACADEMIC_YEAR_END;
}

function updateNavButtons() {
    const prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    prevMonth.disabled = !isWithinAcademicYear(prevDate);
    nextMonth.disabled = !isWithinAcademicYear(nextDate);
}

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const monthKey = `${year}-${String(month + 1).padStart(2, "0")}`;
    const theme = monthThemes[monthKey] || "";

    monthYear.innerText = theme
        ? `${new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(currentDate)} — ${theme}`
        : new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(currentDate);

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    calendarDays.innerHTML = "";

    for (let i = 0; i < firstDay; i++) {
        calendarDays.innerHTML += `<div class="calendar-day empty"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const isToday = new Date().toDateString() === new Date(year, month, day).toDateString();
        const festivalList = festivals[dateKey] || [];

        let festivalHTML = "";
        if (festivalList.length > 0) {
            festivalList.forEach((festival) => {
                festivalHTML += `<span class="festival-name">${festival.name}</span>`;
            });
        }

        calendarDays.innerHTML += `
            <div class="calendar-day ${isToday ? "today" : ""} ${festivalList.length > 0 ? "festival" : ""}">
                ${day}
                ${festivalHTML}
            </div>`;
    }

    updateNavButtons();
}

prevMonth.addEventListener("click", () => {
    const prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    if (!isWithinAcademicYear(prevDate)) return;
    currentDate = prevDate;
    renderCalendar();
});

nextMonth.addEventListener("click", () => {
    const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    if (!isWithinAcademicYear(nextDate)) return;
    currentDate = nextDate;
    renderCalendar();
});

renderCalendar();
