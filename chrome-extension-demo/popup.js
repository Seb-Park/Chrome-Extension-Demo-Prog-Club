colorChangeButton = document.getElementById("change-color-button");
colorChangeButton.addEventListener("click", function () {
    alert("Changing the color!");
    document.body.style.backgroundColor = "orange";
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;//https://css-tricks.com/snippets/javascript/random-hex-color/ 
});