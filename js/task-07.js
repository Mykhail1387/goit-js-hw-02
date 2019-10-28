'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const erorrLogin = 'Ошибка! Логин должен быть от 4 до 16 символов';
const busyLogin = 'Такой логин уже используется!';
const successLogin = 'Логин успешно добавлен!';
let message;

const isLoginValid = function (login) {

    if (login.length < 4 || login.length > 16) {
        alert(erorrLogin);
        return false;
    }
    return true;
}

const isLoginUnique = function (allLogins, login) {
    if (allLogins.includes(login)) {
        alert(busyLogin);
        return false;
    }
    return true;
}

const addLogin = function (allLogins, login) {
    if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
        logins.push(login);
        alert(successLogin);
    }
}
addLogin(logins, 'Ajax');
addLogin(logins, 'robotGoogles');
addLogin(logins, 'Zod');
addLogin(logins, 'jqueryisextremelyfast');
console.log('logins:', logins);