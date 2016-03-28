var arr = new Array();
var loggedIn = false;

for (i = 0; i < 5; i++) {
    arr[i] = prompt('Введите имя ' + (i + 1));
}

var userName = prompt('Введите имя');

for (i = 0; i < 5; i++) {
    if (arr[i] == userName) {
        alert(userName + ', вы успешно вошли');
        loggedIn = true;
        break;
    }
}

if (!loggedIn) {
    alert('Неверное имя пользователя');
}
