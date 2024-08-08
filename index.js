// document.addEventListener('DOMContentLoaded', (event) => {
//     const startButton = document.getElementById('start');
//     startButton.onclick = function(){
//         document.getElementById('heading').innerHTML="Game started";
//     }
// });
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 450;

const paddleWidth = 100;
const paddleHeight = 10;
const paddleX = (canvas.width - paddleWidth) / 2;

const ballRadius = 10;
let ballX = canvas.width / 2;
let ballY = canvas.height - 30;

const blockRowCount = 5;
const blockColumnCount = 9;
const blockWidth = 75;
const blockHeight = 20;
const blockPadding = 10;
const blockOffsetTop = 30;
const blockOffsetLeft = 100;

const blocks = [];
for (let c = 0; c < blockColumnCount; c++) {
    blocks[c] = [];
    for (let r = 0; r < blockRowCount; r++) {
        blocks[c][r] = { x: 0, y: 0, status: 1, color: getRandomColor() };
    }
}

function drawBlocks() {
    for (let c = 0; c < blockColumnCount; c++) {
        for (let r = 0; r < blockRowCount; r++) {
            if (blocks[c][r].status === 1) {
                const blockX = c * (blockWidth + blockPadding) + blockOffsetLeft;
                const blockY = r * (blockHeight + blockPadding) + blockOffsetTop;
                blocks[c][r].x = blockX;
                blocks[c][r].y = blockY;
                ctx.beginPath();
                ctx.rect(blockX, blockY, blockWidth, blockHeight);
                ctx.fillStyle = blocks[c][r].color;
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight - 10, paddleWidth, paddleHeight);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBlocks();
    drawPaddle();
    drawBall();
}

draw();
