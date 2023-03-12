const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controlls");
const secBtn = document.querySelectorAll(".control");
const BODY = document.querySelector(".main-content");

// Buttons 'active-btn' class
function PageTrans() {
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener("click", function () {
      let currentButton = document.querySelector(".active-btn");
      if (currentButton) {
        currentButton.classList.remove("active-btn");
      }
      this.classList.add("active-btn");
    });
  }

  //Sections 'active' class
  BODY.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      secBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      // Hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  // Toggle Mode

  const btnTheme = document.querySelector(".theme-btn");
  btnTheme.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}

PageTrans();
