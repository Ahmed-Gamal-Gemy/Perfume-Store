//header
// click to logo in header ele to return to home page
document.querySelector(".logo").onclick = function () {
  this.href = "index.html";
};
// !!!! set link with links in header !!!!
let headLinks = document.querySelectorAll(".us-sign button a");
headLinks[0].href = "account.html";
headLinks[1].href = "account.html";
headLinks[2].href = "contact.html";

//header

//nav
// click to icon home to return to home page
document.querySelector(".navbar .icon").onclick = function () {
  this.href = "index.html";
};
let myLinks = document.querySelectorAll(
  ".navbar .navbar-nav .nav-item .nav-link"
);

// for link men and women and make ur prefume page
myLinks[0].href = "women.html";
myLinks[1].href = "men.html";
myLinks[2].href = "makeurperfume.html";
//nav
// for image slider
let productContainer = [...document.querySelectorAll(".product-container")];
let preBtn = [...document.querySelectorAll(".pre-btn")];
let nxtBtn = [...document.querySelectorAll(".nxt-btn")];
productContainer.forEach((item, i) => {
  let containerDiminsions = item.getBoundingClientRect();
  let containerWidth = containerDiminsions.width;
  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
});
// for image slider
