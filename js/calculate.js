/* Открываем и скрываем блок с расчетами*/

let hideBlock = document.querySelector('.hideBlock');
let calculate__btn = document.querySelector('.calculate__btn');
hideBlock.hidden = true;

function hideFunc() {
  if (hideBlock.hidden == false) {
    hideBlock.hidden = true;
  }
  else {
    hideBlock.hidden = false;
  }
};

calculate__btn.addEventListener('click', hideFunc);


/*Вытаскиваем данные из input, в который вводится процентная ставка и присваиваем это значение percentScore*/

let calculate__percent = document.querySelector('.calculate__percent');
let persentScore = document.querySelector('.persentScore');

function persentFunc() {
  return persentScore.textContent = calculate__percent.value;
};

calculate__btn.addEventListener('click', persentFunc);


/*Расчет кредита*/

let calculate__sum = document.querySelector('.calculate__sum');
let calculate__term = document.querySelector('.calculate__term');
let credite_calculation = document.querySelector('.credite_calculation');
let total_free = document.querySelector('.total_free');
let overpayment = document.querySelector('.overpayment');

function calculationFunc() {
  let r = (Number(persentScore.textContent)) / 100 / 12;
  let t = r + 1;
  let s = 1;
  let month = (Number(calculate__term.value)) * 12;
  for (let i = 0; i < month; i++) {
    s = s * t;
  };
  let p = (((Number(calculate__sum.value)) * r * s) / (s - 1));

  credite_calculation.textContent = p.toFixed(2);
  total_free.textContent = (p * month).toFixed(2);
  overpayment.textContent = ((p * month) - Number(calculate__sum.value)).toFixed(2)
};

calculate__btn.addEventListener('click', calculationFunc);


/* Выводим alert при нажатии на кнопки*/

let alertView = document.querySelectorAll('.alertView');

function alertView_click() {
  alert('Извините, это демо-версия сайта');
};
for (let i = 0; i < alertView.length; i++) {
  alertView[i].addEventListener('click', alertView_click);
};



















