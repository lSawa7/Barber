// Mune Media
let menu = document.querySelector(".toggle");
menu.onclick = () => {
  document.querySelectorAll(".toggle span").forEach((e) => {
    e.classList.toggle("tog");
  });
  document.querySelector(".links").classList.toggle("height");
  document.querySelector(".links ul").style.opacity = "1";
};
// End of Mune Media
window.onscroll = () => {
  // Header_
  if (window.pageYOffset >= 20) {
    document.querySelector(".page-content").style.cssText =
      "padding-top:65px;transition:.3s;";
    document.querySelector("header").style.cssText = document.querySelector(
      "header"
    ).style.cssText =
      "background-color:rgba(93, 88, 81,.7);position:sticky; top:0;";
  } else {
    document.querySelector(".page-content").style.cssText =
      "margin-top:150px;transition:.3s;";
    document.querySelector("header").style.cssText =
      "background-color:transparent;transition:.3s; position:static";
  }
  // End_Of_Header_
  if (this.pageYOffset >= 570) {
    document.querySelector(".continar").style.cssText = "padding-top:66px";
    document.querySelector("header").style.cssText =
      "background-color:rgba(93, 88, 81,.7);width:100%; transition:.3s; position:fixed; top:0;";
  } else {
    document.querySelector(".continar").style.cssText = "padding-top:0px";
  }
  ///ScrollSpy///

  var sections = document.querySelectorAll("section");
  var navbarLinks = document.querySelectorAll("header ul  li ");
  sections.forEach(function (section, index) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      navbarLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      navbarLinks[index].classList.add("active");
    }
  });
  ///End ScrollSpy///
};

//Right Bar
let settingBox = document.querySelector(".setting-box i");
settingBox.onclick = () => {
  document.querySelector(".setting-box").classList.toggle("open");
};
//custsome color
let colors = document.querySelectorAll(".setting-box .lists ul li");
colors.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
  });
});
