// I copied an pasted this code from the assignment solutions. I can understand it, but I didn't write it, and I probably couldn't have wrote this on my own.

import aCourse from "./Course.mjs";

aCourse.init();
document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum, false);
});