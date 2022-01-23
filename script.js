const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////////////////////
// Smooth scrolling navigation

allLinks.forEach(function (link) {
  const href = link.getAttribute("href");
  if (href.startsWith("#")) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Scroll back to top
      // if (href == "#")
      //   window.scrollTo({
      //     top: 0,
      //     behavior: "smooth",
      //   });

      // scroll to other links
      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      // close mobile navigation
      if (link.classList.contains("main-nav-link")) {
        headerEl.classList.toggle("nav-open");
      }
    });
  }
});
