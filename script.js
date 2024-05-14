var colors = ['#B4EDB8', '#F1A7EC', '#95BEC7', '#FBFAEC', '#F0C7C2', '#E7EF8B'];
var index = 0;
var text = document.getElementById('bg-color-change-element');

function changeColor() {
    text.style.backgroundColor = colors[index]; 
    index = (index + 1) % colors.length; 
}

setInterval(changeColor, 5500); 
