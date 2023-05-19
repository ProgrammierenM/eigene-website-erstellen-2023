class PageHandler {
  constructor() {
    if (localStorage.getItem("theme") == "dark") {
      document.documentElement.classList.add("dark");
    }

    this.setThemeIcon();
    this.typeWriterManager();

    document.querySelector("#colorSwitch").addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");

      if (localStorage.getItem("theme") == "dark") {
        localStorage.setItem("theme", "");
      } else {
        localStorage.setItem("theme", "dark");
      }

      this.setThemeIcon();
    });
  }

  setThemeIcon() {
    let colorSwitch = document.querySelector("#colorSwitch");
    if (colorSwitch === null) return;

    if (localStorage.getItem("theme") == "dark") {
      colorSwitch.innerHTML = `
        <img src="/icons/sun.svg" alt="sun" class="w-6 h-6" />
      `;
    } else {
      colorSwitch.innerHTML = `
        <img src="/icons/moon.svg" alt="sun" class="w-6 h-6" />
      `;
    }
  }

  typeWriterManager() {
    let dynamicHeaderElement = document.querySelector("#dynamic-header-text");
    if (dynamicHeaderElement === null) return;

    let dynamicHeaderTextArray = ["Design", "Kaffee", "Pizza"];
    let i = 0;
    let currentText = dynamicHeaderTextArray[i];
    let currentWord = dynamicHeaderTextArray[i];
    let isDeleting = false;

    let typeWriter = () => {
      currentWord = dynamicHeaderTextArray[i];

      if (isDeleting) {
        currentText = currentWord.substring(0, currentText.length - 1);
      }

      if (!isDeleting) {
        currentText = currentWord.substring(0, currentText.length + 1);
      }

      dynamicHeaderElement.innerHTML = currentText;

      if (!isDeleting && currentText === currentWord) {
        isDeleting = true;
        setTimeout(typeWriter, 3000);
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        i++;

        if (i === dynamicHeaderTextArray.length) {
          i = 0;
        }

        setTimeout(typeWriter, 500);
      } else {
        setTimeout(typeWriter, 100);
      }
    };

    typeWriter();
  }
}

const init = () => {
  new PageHandler();
};

document.addEventListener("DOMContentLoaded", () => init());
