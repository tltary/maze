let gameArray = [];

const app = document.querySelector('.app');
const ball = document.querySelector('.js-ball');
const turn = document.querySelector('.js-turn');
const restart = document.querySelector('.js-restart');
let gameBall = [0,0];

restart.addEventListener('click', function() {
	generateRandomMaze()
}, true)

turn.addEventListener('click', function() {
	if (!this.classList.contains('active')) {
		app.classList.add('active');
		ball.classList.add('active');
		turn.classList.add('active');
	} else {
		app.classList.remove('active');
		ball.classList.remove('active');
		turn.classList.remove('active');
	}
}, true)

window.addEventListener('keydown', function (event) {
	if (event.key === 'ArrowUp') {
		ballUp()
	}
	if (event.key === 'ArrowLeft') {
		ballLeft()
	}
	if (event.key === 'ArrowRight') {
		ballRight()
	}
	if (event.key === 'ArrowDown') {
		ballDown()
	}
}, true);

ballLeft = () => {
	let x = gameBall[0];
	let y = gameBall[1];
	let clickPosition = y - 1;
	if (gameBall[1] === 0) {
		return false;
	}
	if (gameArray[x][clickPosition][0] === 1) {
		return false;
	} else if (gameArray[x][clickPosition][0] === 3) {
		gameArray[x][y][1] = '';
		gameArray[x][clickPosition][1] = 'ball';
		gameBall[1] = clickPosition;
		ball.style.left = `${clickPosition * 100}px`;
		generateRandomMaze();
		alert('Congratulations you won!')
	} else {
		gameArray[x][y][1] = '';
		gameArray[x][clickPosition][1] = 'ball';
		gameBall[1] = clickPosition;
		ball.style.left = `${clickPosition * 100}px`;
		init();
	}
}

ballRight = () => {
	let x = gameBall[0];
	let y = gameBall[1];
	let clickPosition = y + 1;
	if (gameBall[1] === 9) {
		return false;
	}
	if (gameArray[x][clickPosition][0] === 1) {
		return false;
	} else if (gameArray[x][clickPosition][0] === 3) {
		gameArray[x][y][1] = '';
		gameArray[x][clickPosition][1] = 'ball';
		gameBall[1] = clickPosition;
		ball.style.left = `${clickPosition * 100}px`;
		generateRandomMaze();
		alert('Congratulations you won!')
	} else {
		gameArray[x][y][1] = '';
		gameArray[x][clickPosition][1] = 'ball';
		gameBall[1] = clickPosition;
		ball.style.left = `${clickPosition * 100}px`;
		init();
	}
}

ballUp = () => {
	let x = gameBall[0];
	let y = gameBall[1];
	let clickPosition = x - 1;
	if (gameBall[0] === 0) {
		return false;
	}
	if (gameArray[clickPosition][y][0] === 1) {
		return false;
	} else if (gameArray[clickPosition][y][0] === 3) {
		gameArray[x][y][1] = '';
		gameArray[x][clickPosition][1] = 'ball';
		gameBall[1] = clickPosition;
		ball.style.top = `${clickPosition * 100}px`;
		generateRandomMaze();
		alert('Congratulations you won!')
	} else {
		gameArray[x][y][1] = '';
		gameArray[clickPosition][y][1] = 'ball';
		gameBall[0] = clickPosition;
		ball.style.top = `${clickPosition * 100}px`;
		init();
	}
}

ballDown = () => {
	let x = gameBall[0];
	let y = gameBall[1];
	let clickPosition = x + 1;
	if (gameBall[0] === 5) {
		return false;
	}
	if (gameArray[clickPosition][y][0] === 1) {
		return false;
	} else if (gameArray[clickPosition][y][0] === 3) {
		gameArray[x][y][1] = '';
		gameArray[x][clickPosition][1] = 'ball';
		gameBall[1] = clickPosition;
		ball.style.top = `${clickPosition * 100}px`;
		generateRandomMaze();
		alert('Congratulations you won!')
	} else {
		gameArray[x][y][1] = '';
		gameArray[clickPosition][y][1] = 'ball';
		gameBall[0] = clickPosition;
		ball.style.top = `${clickPosition * 100}px`;
		init();
	}
}

function init() {
	let render = ``;
	for (let i = 0;i < gameArray.length;i = i + 1) {
		let cache = gameArray[i];
		for (let a = 0;a < cache.length;a = a + 1) {
			cacheClass = ``;
			cacheText = ``;
			if (cache[a][0] === 1) {
				cacheClass = `block`;
			}
			if (cache[a][0] === 2) {
				cacheText = `start`;
			}
			if (cache[a][0] === 3) {
				cacheText = `finish`;
			}
			render += `<span class="item ${cacheClass}" data-pos="${a}" data-state="${cache[a][0]}">${cacheText}</span>`
		}
	}
	app.innerHTML = null;
	app.innerHTML = render;
	render = null;
}

document.addEventListener("DOMContentLoaded", function(event) {
	generateRandomMaze();
});

function generateRandomMaze() {
	gameArray = [];
	let generateArray = [];
	for (let i = 0;i < 6;i = i + 1) {
		generateArray[i] = []
		for (let a = 0;a < 10;a = a + 1) {
			generateArray[i][a] = [];
			let randomInt = parseInt(Math.random() * 10);
			if (randomInt <= 4) {
				generateArray[i][a][0] = 0;
			} else {
				generateArray[i][a][0] = 1;
			}
			generateArray[i][a][1] = '';
		}
	}
	gameArray = generateArray;
	gameArray[0][0][0] = 2;
	gameArray[0][0][1] = 'ball';
	gameArray[0][1][0] = 0;
	gameArray[0][1][1] = '';
	gameArray[1][0][0] = 0;
	gameArray[1][0][1] = '';
	let randomX = parseInt(Math.random() * 10);
	let randomY = parseInt(Math.random() * 10);
	let finishX = 0;
	let finishY = 0;
	if (randomX >= 5) {
		finishX = 5;
	} else if (finishX === 0) {
		finishX = 2;
	} else {
		finishX = randomX;
	}
	if (randomY >= 9) {
		finishY = 9;
	} else if (randomY === 0) {
		finishY = 2;
	} else {
		finishY = randomY;
	}
	gameArray[finishX][finishY][0] = 3;
	gameArray[finishX][finishY][1] = '';
	gameArray[finishX - 1][finishY][0] = 0;
	gameArray[finishX - 1][finishY][1] = '';
	gameArray[finishX][finishY - 1][0] = 0;
	gameArray[finishX][finishY - 1][1] = '';
	gameBall = [0,0];
	ball.style.left = `0px`;
	ball.style.top = `0px`;
	init();
}

