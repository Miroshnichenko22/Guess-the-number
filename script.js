// Получение доступа к элементам и считывание в переменную с соотв. названием 
let input = document.querySelector(".field__form__input");
let btn = document.querySelector(".field__form__btn");
let check = document.querySelector(".result__check__out");
let help = document.querySelector(".result__help__out");
let count = document.querySelector(".result__count__out");

//переменная содержит число попыток 
let item = 0;
// сгенерировать число, заданное компьютером 
let randNum = 1 + Math.floor(Math.random() * 100);
//=> формула: переменная randNum содержит = 
//0.1 = Math.random(): случайное число от 0 до 1 * 100 (умноженное на 100)
//0.2-0.3 = Math.floor округляет число (Math.random() * 100)
///0.4 = 1 + (плюс 1) = итого случайное число 

btn.onclick = function(evt) {
	evt.preventDefault();
	// считываем значение-число, введенное пользователем при нажатии кнопкой  
	userNum = input.value;
	//если число пользователя больше сгенерир. числа, тогда ...
	if (userNum > randNum) {
		//выводиится сообщение  ...
		check.textContent = "Пока что не угадали . . .";
		//выводиится подсказка  ...
		help.textContent = "Многовато будет";
		//увеличиваем число попыток ...
		item++;
		//вывод счетчика ...
		count.textContent = item;
	} else if (userNum < randNum) {
		check.textContent = "Пока что не угадали . . .";
		help.textContent = "Маловато будет";
		item++;
		count.textContent = item;
	} else {
		check.textContent = "Поздравляем! Вы угадали!";
		help.textContent = "В самый раз!";
		item++;
		count.textContent = item;
	}
};