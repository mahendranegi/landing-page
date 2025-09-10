
    const container = document.querySelector(".exhibitionInner");
    const nextBtn = document.querySelector(".scrollBtn.next");
    const prevBtn = document.querySelector(".scrollBtn.prev");

    nextBtn.addEventListener("click", () => {
      container.scrollBy({ left: 350, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      container.scrollBy({ left: -350, behavior: "smooth" });
    });


    // choose school
    const slider = document.getElementById("schoolSlider");
    const dots = document.querySelectorAll("#paginationDots span");

    // Update active dot on scroll
    slider.addEventListener("scroll", () => {
      let index = Math.round(slider.scrollLeft / slider.offsetWidth);
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    });

    // Dot click → scroll to slide
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        slider.scrollTo({
          left: i * slider.offsetWidth,
          behavior: "smooth"
        });
      });
    });

    // Header

    const header = document.querySelector("header");
    const banner = document.querySelector(".heroSection");

    window.addEventListener("scroll", () => {
      if (window.scrollY > banner.offsetHeight) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
//form validation
document.getElementById("enquiryForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop form for validation

  const name = document.getElementById("parent-name").value.trim();
  const phone = document.getElementById("phone-number").value.trim();
  const grade = document.getElementById("grade").value.trim();

 
  if (name.length < 2) {
    alert("Please enter a valid parent name.");
    return;
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  if (grade.length < 1) {
    alert("Please enter the grade you are looking for.");
    return;
  }

  alert("Form submitted successfully!");
  this.submit();
});

const openBtn = document.getElementById("openFormBtn");
const formWrapper = document.getElementById("enquiryFormWrapper");
const closeBtn = document.getElementById("closeFormBtn");

openBtn.addEventListener("click", () => {
  if (window.innerWidth <= 1024) {
    formWrapper.classList.add("active");
    document.body.style.overflow = "hidden"; // prevent scroll in background
  }
});

closeBtn.addEventListener("click", () => {
  formWrapper.classList.remove("active");
  document.body.style.overflow = "";
});
