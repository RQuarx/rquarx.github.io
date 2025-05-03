"use strict";
function update_time() {
    const clock = document.getElementById("current-time");
    const day = document.getElementById("current-day");
    if (!clock)
        return;
    if (!day)
        return;
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, "0");
    const min = now.getMinutes().toString().padStart(2, "0");
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day_str = days[now.getDay()];
    clock.textContent = hour + ':' + min;
    day.textContent = day_str;
}
update_time();
setInterval(update_time, 60 * 1000);
