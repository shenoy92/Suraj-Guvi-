
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var homePageBody = document.getElementById('homePageBody');
if (homePageBody) {
    var homePagecontainer = document.createElement('div');
    homePagecontainer.classList.add('container', 'vh-100', 'd-flex', 'justify-content-center', 'flex-column', 'align-items-center');
    var img = document.createElement('img');
    img.id = "img";
    img.setAttribute('src', 'https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,g=0.5x0.5,f=auto/d07c1db617a36898b5e8c71013d228d11003eb36d7150b7abfe988fe097c7d66.png');
    var start = document.createElement('button');
    start.id = "start";
    start.innerText = "Start";
    homePagecontainer.append(img, start);
    homePageBody.appendChild(homePagecontainer);
    document.getElementById('start').addEventListener('click', function () {
        window.location.href = "games/game.html";
    });
}
var WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var gamePageBody = document.getElementById('gamePageBody');
if (gamePageBody) {
    var X_CLASS_1 = 'x';
    var CIRCLE_CLASS_1 = 'circle';
    var cellElements_1 = document.querySelectorAll('[data-cell]');
    var board_1 = document.getElementById('board');
    var restartButton = document.getElementById('restartButton');
    var EndButton = document.getElementById('EndButton');
    var winningMessageElement_1 = document.getElementById('winningMessage');
    var winningMessageTextElement = document.querySelector('[data-winning-message-text]');
    var circleTurn_1;
    var setBoardHoverClass_1 = function () {
        board_1.classList.remove(X_CLASS_1);
        board_1.classList.remove(CIRCLE_CLASS_1);
        if (circleTurn_1) {
            board_1.classList.add(CIRCLE_CLASS_1);
        }
        else {
            board_1.classList.add(X_CLASS_1);
        }
    };
    var isDraw_1 = function () {
        return __spreadArray([], cellElements_1).every(function (cell) {
            return cell.classList.contains(X_CLASS_1) ||
                cell.classList.contains(CIRCLE_CLASS_1);
        });
    };
    var placeMark_1 = function (cell, currentClass) {
        cell.classList.add(currentClass);
    };
    var swapTurns_1 = function () {
        circleTurn_1 = !circleTurn_1;
    };
    var checkWin_1 = function (currentClass) {
        return WINNING_COMBINATIONS.some(function (combination) {
            return combination.every(function (index) {
                return cellElements_1[index].classList.contains(currentClass);
            });
        });
    };
    var handleClick_1 = function (e) {
        var cell = e.target;
        var currentClass = circleTurn_1 ? CIRCLE_CLASS_1 : X_CLASS_1;
        placeMark_1(cell, currentClass);
        if (checkWin_1(currentClass)) {
            endGame_1(false);
        }
        else if (isDraw_1()) {
            endGame_1(true);
        }
        else {
            swapTurns_1();
            setBoardHoverClass_1();
        }
    };
    var startGame = function () {
        circleTurn_1 = false;
        cellElements_1.forEach(function (cell) {
            cell.classList.remove(X_CLASS_1);
            cell.classList.remove(CIRCLE_CLASS_1);
            cell.removeEventListener('click', handleClick_1);
            cell.addEventListener('click', handleClick_1, { once: true });
        });
        setBoardHoverClass_1();
        winningMessageElement_1.classList.remove('show');
    };
    startGame();
    restartButton.addEventListener('click', startGame);
    EndButton.addEventListener('click', function () {
        window.location.href = "../index.html";
    });
    var endGame_1 = function (draw) {
        // if(draw){
        //     winningMessageTextElement.innerText ='Draw!'
        // } else {
        //     winningMessageTextElement.innerText = `${circleTurn ? "O's":"X's"} Wins!`
        // }
        winningMessageElement_1.classList.add('show');
    };
}
