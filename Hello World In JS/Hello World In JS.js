const title = document.getElementById("title");
const button = document.getElementById("button");

let index = 0;



const messages = [
    "H0000 00000",
    "He000 00000",
    "Hel00 00000",
    "Hell0 00000",
    "Hello 00000",
    "Hello W0000",
    "Hello Wo000",
    "Hello Wor00",
    "Hello Worl0",
    "Hello World",
];



button.addEventListener("click", function() {
    if (index < messages.length) {
        title.innerHTML = messages[index];
        index++;
    }

});
