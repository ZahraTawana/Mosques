const mosques = [
  {
    name: "مسجد جامع هرات",
    image: "imeg/1.jpg",
    info: "مسجد جامع هرات از آثار ارزشمند تاریخی افغانستان است. این مسجد به کاشی‌کاری‌های فیروزه‌ای و معماری اسلامی شهرت دارد.",
  },
  {
    name: "مجموعه گازرگاه",
    image: "imeg/2.jpg",
    info: "گازرگاه یکی از مکان‌های تاریخی و زیارتی هرات است که آرامگاه خواجه عبدالله انصاری در آن قرار دارد.",
  },
  {
    name: "مسجد و مجموعه گوهرشاد بیگم",
    image: "imeg/3 (2).jpg",
    info: "گوهرشاد بیگم از بانوان مشهور دوره تیموری بود که در ساخت بناهای تاریخی و مذهبی نقش مهمی داشت.",
  },
  {
    name: "مسجد خواجه علی موفق",
    image: "imeg/4.jpg",
    info: "این بخش را با معلومات تأییدشده درباره مسجد خواجه علی موفق تکمیل کن.",
  },
  {
    name: "مسجد ملک هرات",
    image: "imeg/5.jpg",
    info: "مسجد ملک یکی از نام‌هایی است که می‌توان برای معرفی میراث مذهبی شهر هرات بررسی کرد.",
  },
];

let currentIndex = 0;

const bigImage = document.getElementById("bigImage");
const mosqueName = document.getElementById("mosqueName");
const mosqueInfo = document.getElementById("mosqueInfo");
const sideImages = document.getElementById("sideImages");

function showMosque(index) {
  currentIndex = index;

  bigImage.style.opacity = "0";

  setTimeout(() => {
    bigImage.src = mosques[index].image;
    bigImage.alt = mosques[index].name;
    mosqueName.textContent = mosques[index].name;
    mosqueInfo.textContent = mosques[index].info;
    bigImage.style.opacity = "1";
  }, 250);

  document.querySelectorAll(".small-image").forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
}

// ساخت عکس‌های کوچک
mosques.forEach((mosque, index) => {
  const div = document.createElement("div");

  div.className = "small-image";

  div.innerHTML = `
        <img src="${mosque.image}" alt="${mosque.name}">
    `;

  div.addEventListener("click", () => {
    showMosque(index);
  });

  sideImages.appendChild(div);
});

// دکمه عکس قبلی
document.getElementById("prev").addEventListener("click", () => {
  let index = (currentIndex - 1 + mosques.length) % mosques.length;
  showMosque(index);
});

// دکمه عکس بعدی
document.getElementById("next").addEventListener("click", () => {
  let index = (currentIndex + 1) % mosques.length;
  showMosque(index);
});

// نمایش خودکار عکس‌ها
setInterval(() => {
  let index = (currentIndex + 1) % mosques.length;
  showMosque(index);
}, 5000);

// نمایش عکس اول
showMosque(0);
