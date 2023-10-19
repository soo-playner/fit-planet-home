// history.scrollRestoration = "manual";
// const wrap = document.getElementsByClassName("wrap")[0]; // 보일 영역
// const slide = document.getElementsByClassName("slide");
// let page = 0; // 영역 포지션 초기값
// let animation = true;
// const lastPage = slide.length - 1; // 마지막 페이지
// const slideLength = document.querySelectorAll(".slide").length;
// let createBullet = ``;
// for (i = 0; i < slideLength; i++) {
//   createBullet += `<li class="bullet" data-index=${i}></li>`;
// }
// document.querySelector(".pagination ul").innerHTML = createBullet;

// window.addEventListener(
//   "wheel",
//   e => {
//     if (!animation) return;
//     // e.preventDefault();
//     animation = false;
//     setTimeout(() => {
//       animation = true;
//     }, 1000);
//     if (e.deltaY > 0) {
//       page++;
//     } else if (e.deltaY < 0) {
//       page--;
//     }
//     if (page < 0) {
//       page = 0;
//     } else if (page > lastPage) {
//       page = lastPage;
//     }
//     wrap.style.top = page * -100 + "vh";
//   }
//   // { passive: false }
// ); // 디폴트 기능 제거 - 스크롤

// document.querySelectorAll(".bullet").forEach(el => {
//   el.addEventListener("click", e => {
//     const index = e.target.dataset.index;
//     page = Number(index);
//     // wrap.style.top = page * -100 + "vh";
//     scrollTo({ left: 0, top: page * window.innerHeight, behavior: "smooth" });
//   });
// });

var uAgent = navigator.userAgent.toLowerCase();  

var mobilePhones = new Array('iphone', 'ipod', 'ipad', 'android', 'blackberry', 'windows ce','nokia', 'webos', 'opera mini', 'sonyericsson', 'opera mobi', 'iemobile');
for (var i = 0; i < mobilePhones.length; i++)
    if (uAgent.indexOf(mobilePhones[i]) != -1)
      document.location = "https://fit-planet-home-mobile.wizclass.kr";