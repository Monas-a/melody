$(document).ready(function () {
  var currentFloor = 2; //переменная, где хранится текущий этаж
  var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); //кнопка увеличения этажа
  var counterDown = $(".counter-down");  //кнопка уменьшения этажа

  // функция при наведении мышью на этаж
  floorPath.on("mouseover", function () {
     floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
     currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
     $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
   });
    // отслеживаем клик по кнопке вверх
   counterUp.on("click", function (){ 
     // проверяем значение этажа, не больше 18 должно быть
    if (currentFloor < 18) { 
       currentFloor++; // прибавлеям один этаж
       usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажом, чтобы было 02, а не 2
       $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
       floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
       $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий
    }
  });

 // отслеживаем клик по кнопке вниз
  counterDown.on("click", function (){
    // проверяем значение этажа, больше 2 должно быть
    if (currentFloor > 2) {
       currentFloor--; // отнимаем один этаж
       usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажом, чтобы было 02, а не 2
       $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
       floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
       $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");  // подсвечиваем текущий
    }
  });
});