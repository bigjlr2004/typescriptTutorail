"use strict";
//Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year?.textContent = thisYear
// 1st variation
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year === null || year === void 0 ? void 0 : year.textContent = thisYear;
