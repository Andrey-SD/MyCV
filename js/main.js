(function () {
  const elems = document.querySelectorAll(".sk-progress");
  elems.forEach(el => {
    let maxGrade = +el.dataset.maxgrade || 0;

    for (let i = 0; i < maxGrade; i++) {
      const div = document.createElement("div");
      div.classList.add("sk-progress-marker");
      el.appendChild(div);
    }

    // const grade = +el.dataset.grade;
    // const count = isNaN(grade) ? 0 : grade;
    let grade = +el.dataset.grade || 0; //аналогично закомментированому
    grade = (grade > maxGrade) ? maxGrade : grade;


    const markers = el.querySelectorAll(".sk-progress-marker");

    for (let i = 0; i < grade; i++) {
      markers[i].classList.add("fill");
    }
  });
})();

(function () {
  const oldLabel = document.getElementById("old-label");
  const birthday = new Date('1985-12-5');
  const date = Date.now();

  const millisecondDifference = date - birthday;
  const dayDifference = millisecondDifference / (1000 * 60 * 60 * 24);
  oldLabel.textContent = Math.floor(dayDifference/365)
})();