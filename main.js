document.addEventListener('DOMContentLoaded', () => {
    // Установите начальное состояние элемента явно
    document.getElementById('menu').style.display = 'none';
  });
  
  document.getElementById('menu-btn').addEventListener('click', function() {
    var content = document.getElementById('menu');
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
  


let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    currentIndex += direction;
    
    // Циклическое возвращение к первому/последнему слайду
    if (currentIndex >= totalSlides) { currentIndex = 0; }
    if (currentIndex < 0) { currentIndex = totalSlides - 1; }
    
    const offset = currentIndex * -100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Инициализация слайдера с первым слайдом
changeSlide(0);
ymaps.ready(init);

function init() {
    var map1 = new ymaps.Map("map1", {
        center: [55.827402, 37.955596],
        zoom: 10
    });
    var map2 = new ymaps.Map("map2", {
        center: [55.827402, 37.955596],
        zoom: 10
    });

    // Добавление кастомных меток на первую карту
    var placemark1_1 = createPlacemark(map1, [55.819277, 37.964388], 'images/zubdlycart.png');
    var placemark1_2 = createPlacemark(map1, [55.827402, 37.955596], 'images/zubdlycart.png');
    var placemark2_1 = createPlacemark(map2, [55.819277, 37.964388], 'images/zubdlycart.png');
    var placemark2_2 = createPlacemark(map2, [55.827402, 37.955596], 'images/zubdlycart.png');

    // Функция для создания меток
    function createPlacemark(map, coords, iconPath) {
        var placemark = new ymaps.Placemark(coords, {}, {
            iconLayout: 'default#image',
            iconImageHref: iconPath,
            iconImageSize: [45, 42],
            iconImageOffset: [-15, -21]
        });
        map.geoObjects.add(placemark);
        return placemark;
    }

    // Добавление кнопок для перемещения к меткам с кастомным расположением
   
    addMapButton(map2, placemark2_1, " ул. Заречная 9", { bottom: 10, right: 479 });
    addMapButton(map2, placemark2_2, " ул. Звездная, д. 10", { bottom: 10, right: 710 });

    function addMapButton(map, placemark, buttonText, position) {
        var button = new ymaps.control.Button({
            data: { content: buttonText },
            options: {
                selectOnClick: false,
                position: position // Кастомное расположение кнопки
            }
        });
        button.events.add('click', function () {
            map.setCenter(placemark.geometry.getCoordinates(), 14, {
                checkZoomRange: true
            });
        });
        map.controls.add(button);
    }
}






  document.addEventListener('DOMContentLoaded', () => {
    // Установите начальное состояние элемента явно
    document.getElementById('skidka').style.display = 'none';
  });
  
  document.getElementById('ava').addEventListener('click', function() {
    var content = document.getElementById('skidka');
    if (content.style.display === 'none') {
      content.style.display = 'flex';
    } else {
      content.style.display = 'none';
    }
  });








  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide-1');
    const navigationContainer = document.querySelector('.slider-navigation');
  
    function changeSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
          slide.classList.add('active');
        }
      });
      const offset = index * -100;
      document.querySelector('.slider-1').style.transform = `translateX(${offset}%)`;
      updateNavigationDots(index);
    }
  
    function updateNavigationDots(index) {
      document.querySelectorAll('.nav-dot').forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
          dot.classList.add('active');
        }
      });
    }
  
    function createNavigationDots() {
      slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('nav-dot');
        dot.addEventListener('click', () => changeSlide(index));
        navigationContainer.appendChild(dot);
      });
    }
  
    createNavigationDots();
  
    // Swipe support
    let startX;
    const slider = document.querySelector('.slider-1');
    slider.addEventListener('touchstart', e => startX = e.touches[0].clientX);
    slider.addEventListener('touchmove', e => {
      if (!startX) return;
      const moveX = e.touches[0].clientX;
      const diffX = startX - moveX;
      const activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
      if (diffX > 50) { // Swipe left
        changeSlide(Math.min(activeIndex + 1, slides.length - 1));
        startX = null;
      } else if (diffX < -50) { // Swipe right
        changeSlide(Math.max(activeIndex - 1, 0));
        startX = null;
      }
    });
  
    // Initialize navigation dots
    document.querySelectorAll('.nav-dot')[0].classList.add('active');
    // Set the first slide as active if none is active
    if (!document.querySelector('.slide-1.active')) {
      slides[0].classList.add('active');
    }
    // Update navigation dots to match the active slide
    const initialActiveIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    updateNavigationDots(initialActiveIndex);
  });
  document.addEventListener('DOMContentLoaded', function () {
    var scrollButton = document.querySelector('.sab-menu-link-8');
    var targetElement = document.querySelector('.footer');

    scrollButton.addEventListener('click', function () {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
const modal = document.getElementById('modalWindow');
const overlay = document.getElementById('modalOverlay');
const openSvg = document.getElementById('openModalSvg');
const closeBtn = document.getElementById('closeModal');

// Функция для открытия модального окна
function openModal() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

// Открываем модальное окно при клике на SVG
openSvg.onclick = openModal;

// Закрываем модальное окно при клике на кнопку закрытия или затемняющий фон
closeBtn.onclick = closeModal;
overlay.onclick = closeModal;

var modali = document.getElementById("myModal");

// Получаем кнопку, открывающую модальное окно
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("big-zub-button-1");
var btn2 = document.getElementById("spectr-button");

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, открываем модальное окно
btn.onclick = function() {
    modal.style.display = "block";
}
btn1.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закрываем модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь нажимает в любом месте за пределами модального окна, закрываем его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

