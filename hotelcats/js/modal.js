var link = document.querySelector(".btn-modal");//Для начала найдём в разметке кнопку, клик по которой покажет модальное окно. Запишем её в переменную.
var popup = document.querySelector(".modal-booking");
var feedback = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close"); //Найдём в разметке кнопку закрытия модального окна и запишем её в переменную.
var lolo = feedback.querySelector(".modal-closes"); //ПЕРЕИМЕНОВАТЬ ПЕРЕМЕННУЮ
var form = popup.querySelector("form"); //Вызываем форму разметки
var name = popup.querySelector("[name=name]"); //Поработаем над улучшением формы входа. Сделаем так, чтобы при открытии формы фокус автоматически устанавливался в поле ввода логина. Для этого в первую очередь найдём это поле.
var phone = popup.querySelector("[name=phone]"); //Будем проверять все поля ввода в форме, поэтому найдём поле другого типа.
var btn = document.querySelector(".submit-btn");//Кнопка, отвечающая за форму Спасибо
var isStorageSupport = true; //Некоторые браузеры не имеют поддержку localStorage, или он может быть отключен, нам стоит учитывать такую возможность.
  var storage = "";
  
  try {
    storage = localStorage.getItem("name"); //если получилось заполнить поле name - то ок
  } catch (err) {
    isStorageSupport = false; //в противном случае значение переменной isStorageSupport меняется на ложное
  }

btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedback.classList.add("modal-open");
    popup.classList.remove("modal-booking");
});

link.addEventListener("click", function (evt) { //Поймаем событие клика по этой кнопке.
    evt.preventDefault(); //Отменим стандартное действие ссылки при нажатии на неё.
    popup.classList.add("modal-show"); //С помощью метода classList.add добавляем этот класс к модальному окну по клику на ссылку.
    if(storage) {//Если значение существует
        name.value = storage; //записываем имя в соответствующее поле ввода при открытии модального окна.
        phone.focus(); //И сместим фокус на поле ввода телефона, если значение имени уже есть.
    } 
    // else {
    //     name.focus();
    // }
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show"); //Добавим обработчик клика по кнопке закрытия модального окна. Отменяем стандартное действие и удаляем класс, который отвечает за показ модального окна.
    popup.classList.remove("modal-error");//уберем класс при закрытии формы
});
lolo.addEventListener("click", function(evt) { //ПЕРЕИМЕНОВАТЬ ПЕРЕМЕННУЮ
    evt.preventDefault();
    feedback.classList.remove("modal-open");
});
form.addEventListener("submit", function(evt) {
    if (!name.value || !phone.value) { //если какое-то поле не заполнено, отменяет отправка формы и выводится console.log
        evt.preventDefault();
        popup.classList("modal-error");//Если форма не валидна, добавим модальному окну класс ошибки.
    }
    else {
        if (isStorageSupport) { //для подстраховки(запись в переменных), если браузер не поддерживает local storage
            localStorage.setItem("name", name.value); //А в случае правильно заполненной формы запишем логин пользователя в локальное хранилище.
        }
    }
});
window.addEventListener("keydown", function (evt) { //Добавим обработчик события
    if (evt.keyCode === 27) { //который будет отлавливать нажатие кнопки ESC
        evt.preventDefault();
        if(popup.classList.contains("modal-show")) { // и в случае, если модальное окно открыто
            popup.classList.remove("modal-show");//закрывать его (удаляет класс modal-show)
            popup.classList.remove("modal-error");//уберем класс при нажатии кнопки ES
            feedback.classList.remove("modal-open");
        }
    }
});
//Метод addEventListener() регистрирует обработчик события для целевого объекта (eventTarget), для которого он будет вызываться при возникновении события. Целевым объектом может быть объект Element, Document, Window или любой другой объект поддерживающий события, например, такой как XMLHttpRequest. Отлавливает события.
//preventDefault - отменяет стандартное действие ссылки при нажатии на нее
//добавляет класс modal-show при клике к переменной popup, которая вызывает окно попапа с классом modal
//фокусирует на форме ввода
//Оператор if(...) вычисляет условие в скобках и, если результат true, то выполняет блок кода.
//II - оператор ИЛИ
//!  - оператор НЕ
//if (!name.value || !phone.value) - ЕСЛИ значения name или phone НЕ заполнены, то console.log("Нужно ввести логин и пароль");
//localStorage и sessionStorage позволяют хранить пары ключ/значение в браузере; Что в них важно – данные, которые в них записаны, сохраняются после обновления страницы (в случае sessionStorage) и даже после перезапуска браузера (при использовании localStorage). В отличие от куки, объекты веб-хранилища не отправляются на сервер при каждом запросе. Поэтому мы можем хранить гораздо больше данных. 
//setItem(key, value) – сохранить пару ключ/значение.
//синтаксическая конструкция try..catch, которая позволяет «ловить» ошибки и вместо падения делать что-то более осмысленное.
//Работает она так: Сначала выполняется код внутри блока try {...}. Если в нём нет ошибок, то блок catch(err) игнорируется: выполнение доходит до конца try и потом далее, полностью пропуская catch. Если же в нём возникает ошибка, то выполнение try прерывается, и поток управления переходит в начало catch(err). Переменная err (можно использовать любое имя) содержит объект ошибки с подробной информацией о произошедшем.
//Глобальный объект предоставляет переменные и функции, доступные в любом месте браузера.
//Оператор строгого равенства === проверяет равенство без приведения типов. Т.е 1===2 - true, text===2, "1"===2 - false.
//if (evt.keyCode === 27)  - 27 - кнопка ESCAPE