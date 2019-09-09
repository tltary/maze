let gameArray = [
	[[2,'ball'],[0,''],[0,''],[0,''],[0,''],[0,''],[0,''],[0,''],[0,''],[0,'']],
	[[1,''],[1,''],[0,''],[1,''],[1,''],[1,''],[1,''],[0,''],[1,''],[0,'']],
	[[0,''],[0,''],[0,''],[0,''],[0,''],[0,''],[1,''],[0,''],[1,''],[0,'']],
	[[1,''],[0,''],[1,''],[1,''],[1,''],[0,''],[1,''],[0,''],[0,''],[0,'']],
	[[0,''],[0,''],[1,''],[0,''],[0,''],[0,''],[0,''],[1,''],[1,''],[1,'']],
	[[1,''],[1,''],[1,''],[1,''],[1,''],[1,''],[0,''],[0,''],[0,''],[3,'']],
];

const app = document.querySelector('.app');
const ball = document.querySelector('.js-ball');
let gameBall = [0,0];

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
		alert('You can’t go there')
		return false;
	}
	if (gameArray[x][clickPosition][0] === 1) {
		alert('There is a block, think again')
		return false;
	} else if (gameArray[x][clickPosition][0] === 3) {
		gameArray[x][y][1] = '';
		gameArray[x][clickPosition][1] = 'ball';
		gameBall[1] = clickPosition;
		ball.style.left = `${clickPosition * 100}px`;
		init();
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
		alert('You can’t go there')
		return false;
	}
	if (gameArray[x][clickPosition][0] === 1) {
		alert('There is a block, think again')
		return false;
	} else if (gameArray[x][clickPosition][0] === 3) {
		gameArray[x][y][1] = '';
		gameArray[x][clickPosition][1] = 'ball';
		gameBall[1] = clickPosition;
		ball.style.left = `${clickPosition * 100}px`;
		init();
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
		alert('You can’t go there')
		return false;
	}
	if (gameArray[clickPosition][y][0] === 1) {
		alert('There is a block, think again')
		return false;
	} else if (gameArray[clickPosition][y][0] === 3) {
		gameArray[x][y][1] = '';
		gameArray[x][clickPosition][1] = 'ball';
		gameBall[1] = clickPosition;
		ball.style.top = `${clickPosition * 100}px`;
		init();
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
		alert('You can’t go there')
		return false;
	}
	if (gameArray[clickPosition][y][0] === 1) {
		alert('There is a block, think again')
		return false;
	} else if (gameArray[clickPosition][y][0] === 3) {
		gameArray[x][y][1] = '';
		gameArray[x][clickPosition][1] = 'ball';
		gameBall[1] = clickPosition;
		ball.style.top = `${clickPosition * 100}px`;
		init();
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
			render += `<span class="item ${cacheClass}">${cacheText}</span>`
		}
	}
	app.innerHTML = null;
	app.innerHTML = render;
	render = null;
}

document.addEventListener("DOMContentLoaded", function(event) {
	init()
});

