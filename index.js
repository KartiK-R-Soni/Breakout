document.addEventListener('DOMContentLoaded', (event) => {
    const startButton = document.getElementById('start');
    startButton.onclick = function(){
        document.getElementById('heading').innerHTML="Game started";
    }
});