'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const erorrLogin = 'Ошибка! Логин должен быть от 4 до 16 символов';
const busyLogin = 'Такой логин уже используется!';
const successLogin = 'Логин успешно добавлен!';

const isLoginValid = function (login) {

    return login.length >= 4 && login.length <= 16;
}

const isLoginUnique = function (allLogins, login) {

    const returnFunction = allLogins.includes(login);
    return !returnFunction;

}

const addLogin = function (allLogins, login) {

    const valueLoginValid = isLoginValid(login);
    if (valueLoginValid === false) {
        alert(erorrLogin);
    }

    const valueLoginUnique = isLoginUnique(allLogins, login);
    if (valueLoginUnique === false) {
        alert(busyLogin);
    }

    if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
        logins.push(login);
        alert(successLogin);
    }
}

addLogin(logins, 'Ajax');
addLogin(logins, 'robotGoogles');
addLogin(logins, 'Zod');
addLogin(logins, 'jqueryisextremelyfast');