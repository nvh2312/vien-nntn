let listDivImg = document.querySelectorAll(".list-img .col div");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let imgWrap = document.querySelector(".img-wrap img");

let currentIndex = 0;
setCurrent(currentIndex);
setInterval(() => {
    currentIndex++;
    setCurrent(currentIndex);
}, 10000);
function setCurrent(index) {
  currentIndex = index;
  imgWrap.src = listDivImg[currentIndex].querySelector("img").src;

  // remove all active img
  listDivImg.forEach((item) => {
    item.classList.remove("active");
  });

  // set active
  listDivImg[currentIndex].classList.add("active");
  let array = [...listDivImg];
  $(".list-img .col").empty();
  let a = array.slice(currentIndex, array.length + 1);

  for (let i = 0; i < currentIndex; i++) a.push(array.shift());
  a.forEach((value, index) => {
    $(".list-img .col").append(value);
  });
}

listDivImg.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    setCurrent(index);
  });
});

next.addEventListener("click", () => {
  if (currentIndex == listDivImg.length - 1) {
    currentIndex = 0;
  } else currentIndex++;

  setCurrent(currentIndex);
});

prev.addEventListener("click", () => {
  if (currentIndex == 0) currentIndex = listDivImg.length - 1;
  else currentIndex--;

  setCurrent(currentIndex);
});
