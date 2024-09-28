export function getCurrentDateTime() {
    const now = new Date();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currentTime = now.toLocaleTimeString();  // Current time in hh:mm:ss AM/PM format
    const currentDay = days[now.getDay()];         // Current day (e.g., Monday)
    const currentMonth = months[now.getMonth()];   // Current month (e.g., January)
    const currentDate = now.getDate();             // Current date (day of the month)
    const currentYear = now.getFullYear();         // Current year (e.g., 2024)

    return `${currentTime}, ${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}.`;
}

// console.log(getCurrentDateTime());
