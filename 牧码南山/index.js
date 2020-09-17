window.onload = function () {
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var index = 1;
    function showButton() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className ='';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }
    buttons[0].onclick = function () {
        list.style.left = - 0 + '%';
        index = 1;
        showButton();
    }
    buttons[1].onclick = function () {
        list.style.left = - 98 + '%';
        index = 2;
        showButton();
    }
    buttons[2].onclick = function () {
        list.style.left = - 196 + '%';
        index = 3;
        showButton();
    }
    play();
}